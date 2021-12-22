const {getDefaultConfig} = require('@expo/metro-config');
const config = getDefaultConfig(__dirname);
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, '../..');

/**
 * We don't need to watch the whole repo as it can get pretty large over time.
 * We just want to follow:
 * - Root node_modules
 * - Other libraries in our monorepo
 */
config.watchFolders = [
  path.resolve(__dirname, '../../node_modules'),
  path.resolve(__dirname, '../../packages/ui-native'),
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
 * 3. Omitted here is this apps/package's project directory.
 */
config.resolver.blockList = [
  /^\/Users\/enrico\/Documents\/projects\/testrepo\/packages\/config\/.*$/,
  /^\/Users\/enrico\/Documents\/projects\/testrepo\/packages\/scripts\/.*$/,
  /^\/Users\/enrico\/Documents\/projects\/testrepo\/packages\/tsconfig\/.*$/,
  /^\/Users\/enrico\/Documents\/projects\/testrepo\/packages\/ui\/.*$/,
  /^\/Users\/enrico\/Documents\/projects\/testrepo\/apps\/blog\/.*$/,
  /^\/Users\/enrico\/Documents\/projects\/testrepo\/apps\/docs\/.*$/,
  /^\/Users\/enrico\/Documents\/projects\/testrepo\/apps\/web\/.*$/,
  /^\/Users\/enrico\/Documents\/projects\/testrepo\/apps\/rnative\/.*$/,
  /^\/Users\/enrico\/Documents\/projects\/testrepo\/packages\/ui-native\/node_modules\/.*$/,
];

/**
 * We make sure to point to where our react-native module is.
 */
config.resolver.extraNodeModules = {
  'react-native': path.resolve(__dirname, 'node_modules/react-native'),
};

module.exports = config;
