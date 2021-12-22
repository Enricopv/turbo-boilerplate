const {getDefaultConfig} = require('@expo/metro-config');
const path = require('path');

const getWorkspaces = require('get-yarn-workspaces');
const workspaces = getWorkspaces(__dirname);
const config = getDefaultConfig(__dirname);

// Monorepo
const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, '../..');

config.watchFolders = [
  // * Make sure to include & watch deps at monorepo root
  path.resolve(__dirname, '../../node_modules'),

  // path.resolve(__dirname, '../../packages/ui-native/dist'),
  // * Make sure to include local node_modules
  path.resolve(__dirname, 'node_modules'),
  ...workspaces.filter(
    ws => ws.includes('ui-native') || ws.includes('rnative'),
  ),
];

config.resolver.nodeModulesPath = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

config.resolver.extraNodeModules = {
  'react-native': path.resolve(__dirname, 'node_modules/react-native'),
  // react: path.resolve(__dirname, 'node_modules/react'),
  'ui-native': path.resolve(__dirname, '../../packages/ui-native'),
};

config.resolver.blockList = [
  /^\/Users\/enrico\/Documents\/projects\/testrepo\/packages\/config\/node_modules\/.*$/,
  /^\/Users\/enrico\/Documents\/projects\/testrepo\/packages\/scripts\/node_modules\/.*$/,
  /^\/Users\/enrico\/Documents\/projects\/testrepo\/packages\/tsconfig\/node_modules\/.*$/,
  /^\/Users\/enrico\/Documents\/projects\/testrepo\/packages\/ui\/node_modules\/.*$/,
  // /^\/Users\/enrico\/Documents\/projects\/testrepo\/packages\/ui-native\/node_modules\/.*$/,
  /^\/Users\/enrico\/Documents\/projects\/testrepo\/apps\/blog\/node_modules\/.*$/,
  /^\/Users\/enrico\/Documents\/projects\/testrepo\/apps\/docs\/node_modules\/.*$/,
  // /^\/Users\/enrico\/Documents\/projects\/testrepo\/apps\/rnative\/node_modules\/.*$/,
  /^\/Users\/enrico\/Documents\/projects\/testrepo\/apps\/web\/node_modules\/.*$/,
  /^\/Users\/enrico\/Documents\/projects\/testrepo\/apps\/xpo\/node_modules\/.*$/,
];

module.exports = config;
