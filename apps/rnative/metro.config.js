const path = require('path');
const {readdirSync} = require('fs');
const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, '../..');
const rootPackage = require('./package.json');
const workspacePackage = require('../../package.json');

function findSharedPackages(workspaceRoot, sharedPackagesFolder) {
  const sharedPackageRoots = sharedPackagesFolder.map(packageFolder =>
    path.resolve(workspaceRoot, packageFolder),
  );

  return sharedPackageRoots
    .map(sharedPackageRoot =>
      readdirSync(sharedPackageRoot, {
        withFileTypes: true,
      })
        .filter(dir => dir.isDirectory() && !dir.name.startsWith('.'))
        .map(dir => dir.name)
        .map(packageFolder => {
          const packagePath = path.resolve(sharedPackageRoot, packageFolder);

          const packageName = require(`${packagePath}/package.json`).name;

          return {packageName, packagePath};
        }),
    )
    .flat();
}

const config = {
  resolver: {},
};

/**
 * Get monorepo dependencies, flagged by a "*"
 */

const monoRepoFolders = workspacePackage.workspaces.packages.map(pkg =>
  pkg.substring(0, pkg.search(RegExp('\\/\\*'))),
);

const dependencies = {
  ...rootPackage.dependencies,
  ...rootPackage.devDependencies,
};

const usedDeps = Object.keys(dependencies).filter(
  dep => dependencies[dep] === '*',
);

const allRepoPackages = findSharedPackages(
  path.resolve(workspaceRoot),
  monoRepoFolders,
);

/**
 * We don't need to watch the whole repo as it can get pretty large over time.
 * We just want to follow:
 * - Root node_modules
 * - Other libraries in our monorepo
 */

const watchFolders = allRepoPackages
  .filter(pkg => Boolean(usedDeps.find(dep => pkg.packageName === dep)))
  .map(pkg => pkg.packagePath);

config.watchFolders = [
  path.resolve(__dirname, '../../node_modules'),
  ...watchFolders,
];

/**
 * Make sure to include app & package node_modules
 */
config.resolver.nodeModulesPath = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

/**
 * We need to block other deps from conflicting with this project's node_modules
 * While we're at it, I figure why not block the whole folder.
 * 1. We block the folders of our other apps & libraries that aren't a dependency.
 * 2. The apps that are a dependency, we block their node_modules so as to not conflict
 *    with this project's react-native package and other dependencies it uses.
 * 3. Omitted here is this apps/package's project directory, so we can keep watching for changes here.
 */

const unusedRepoPackages = allRepoPackages
  .filter(pkg => pkg.packageName !== rootPackage.name)
  .filter(pkg => !usedDeps.find(dep => pkg.packageName === dep))
  .map(
    ({packagePath}) =>
      new RegExp(`^${escape(path.resolve(packagePath))}\\/.*$`),
  );
const usedRepoPackages = allRepoPackages
  .filter(pkg => pkg.packageName !== rootPackage.name)
  .filter(pkg => usedDeps.find(dep => pkg.packageName === dep))
  .map(
    ({packagePath}) =>
      new RegExp(`^${escape(path.resolve(packagePath, 'node_modules'))}\\/.*$`),
  );

// config.resolver.blockList = blockList;

config.resolver.blockList = [...unusedRepoPackages, ...usedRepoPackages];

/**
 * We make sure to point to where our react-native module is.
 */
config.resolver.extraNodeModules = {
  'react-native': path.resolve(__dirname, 'node_modules/react-native'),
  '@react-navigation/native': path.resolve(
    __dirname,
    '../../node_modules/@react-navigation/native',
  ),

  '@react-navigation/native-stack': path.resolve(
    __dirname,
    '../../node_modules/@react-navigation/native-stack',
  ),
};

module.exports = config;
