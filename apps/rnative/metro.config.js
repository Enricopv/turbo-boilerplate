const path = require('path');
const getWorkspaces = require('get-yarn-workspaces');
const workspaces = getWorkspaces(__dirname);
const pkg = require('./package.json');
const blacklist = require('metro-config/src/defaults/exclusionList');

const {getDefaultConfig, mergeConfig} = require('metro-config');
const pkgName = pkg.name;

console.log(
  'workspaces',
  ...workspaces.filter(
    ws => ws.includes('ui-native') || ws.includes('rnative'),
  ),
);

console.log(
  'blacklist',
  blacklist(
    workspaces.map(
      workspacePath =>
        `/${workspacePath.replace(
          /\//g,
          '[/\\\\]',
        )}[/\\\\]node_modules[/\\\\].*/`,
    ),
  ),
);
const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, '../..');
console.log('projectRoot', projectRoot);

const defaultConfig = getDefaultConfig(projectRoot);
module.exports = {
  // projectRoot: projectRoot,
  watchFolders: [
    // * Make sure to include & watch deps at monorepo root
    path.resolve(__dirname, '../../node_modules'),

    // path.resolve(__dirname, '../../packages/ui-native/dist'),
    // * Make sure to include local node_modules
    path.resolve(__dirname, 'node_modules'),
    ...workspaces.filter(
      ws => ws.includes('ui-native') || ws.includes('rnative'),
    ),
  ],
  resolver: {
    ...defaultConfig.resolver,
    nodeModulesPath: [
      path.resolve(projectRoot, 'node_modules'),
      path.resolve(workspaceRoot, 'node_modules'),
      // path.resolve(__dirname, '../../packages/ui-native/node_modules'),
    ],

    blockList: blacklist(
      workspaces.map(
        workspacePath =>
          `/${workspacePath.replace(
            /\//g,
            '[/\\\\]',
          )}[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/`,
      ),
    ),
    extraNodeModules: {
      'react-native': path.resolve(__dirname, 'node_modules/react-native'),
      'ui-native': path.resolve(
        __dirname,
        '../../packages/ui-native/node_modules',
      ),
    },
  },
};

// /(\/\[\/\\\\\]Users\[\/\\\\\]enrico\[\/\\\\\]Documents\[\/\\\\\]projects\[\/\\\\\]testrepo\[\/\\\\\]packages\[\/\\\\\]config\[\/\\\\\]node_modules\[\/\\\\\]\.\*\/|\/\[\/\\\\\]Users\[\/\\\\\]enrico\[\/\\\\\]Documents\[\/\\\\\]projects\[\/\\\\\]testrepo\[\/\\\\\]packages\[\/\\\\\]scripts\[\/\\\\\]node_modules\[\/\\\\\]\.\*\/|\/\[\/\\\\\]Users\[\/\\\\\]enrico\[\/\\\\\]Documents\[\/\\\\\]projects\[\/\\\\\]testrepo\[\/\\\\\]packages\[\/\\\\\]tsconfig\[\/\\\\\]node_modules\[\/\\\\\]\.\*\/|\/\[\/\\\\\]Users\[\/\\\\\]enrico\[\/\\\\\]Documents\[\/\\\\\]projects\[\/\\\\\]testrepo\[\/\\\\\]packages\[\/\\\\\]ui\[\/\\\\\]node_modules\[\/\\\\\]\.\*\/|\/\[\/\\\\\]Users\[\/\\\\\]enrico\[\/\\\\\]Documents\[\/\\\\\]projects\[\/\\\\\]testrepo\[\/\\\\\]packages\[\/\\\\\]ui\-native\[\/\\\\\]node_modules\[\/\\\\\]\.\*\/|\/\[\/\\\\\]Users\[\/\\\\\]enrico\[\/\\\\\]Documents\[\/\\\\\]projects\[\/\\\\\]testrepo\[\/\\\\\]apps\[\/\\\\\]blog\[\/\\\\\]node_modules\[\/\\\\\]\.\*\/|\/\[\/\\\\\]Users\[\/\\\\\]enrico\[\/\\\\\]Documents\[\/\\\\\]projects\[\/\\\\\]testrepo\[\/\\\\\]apps\[\/\\\\\]docs\[\/\\\\\]node_modules\[\/\\\\\]\.\*\/|\/\[\/\\\\\]Users\[\/\\\\\]enrico\[\/\\\\\]Documents\[\/\\\\\]projects\[\/\\\\\]testrepo\[\/\\\\\]apps\[\/\\\\\]rnative\[\/\\\\\]node_modules\[\/\\\\\]\.\*\/|\/\[\/\\\\\]Users\[\/\\\\\]enrico\[\/\\\\\]Documents\[\/\\\\\]projects\[\/\\\\\]testrepo\[\/\\\\\]apps\[\/\\\\\]web\[\/\\\\\]node_modules\[\/\\\\\]\.\*\/|\/\[\/\\\\\]Users\[\/\\\\\]enrico\[\/\\\\\]Documents\[\/\\\\\]projects\[\/\\\\\]testrepo\[\/\\\\\]apps\[\/\\\\\]xpo\[\/\\\\\]node_modules\[\/\\\\\]\.\*\/|\/__tests__\/.*)$/
