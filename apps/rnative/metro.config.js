const path = require('path');
const getWorkspaces = require('get-yarn-workspaces');
const workspaces = getWorkspaces(__dirname);
const pkg = require('./package.json');

const pkgName = pkg.name;

const workspaceRoot = path.resolve(__dirname);

module.exports = {
  projectRoot: workspaceRoot,

  watchFolders: [
    // * Make sure to include & watch deps at monorepo root
    path.resolve(__dirname, '../../node_modules'),
    // * Make sure to include local node_modules
    path.resolve(__dirname, './node_modules'),
    ...workspaces,
  ],

  resolver: {
    // ...defaultConfig,
    // blockList: workspaces.map(
    //   workspacePath =>
    //     `/${workspacePath.replace(
    //       /\//g,
    //       '[/\\\\]',
    //     )}[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/`,
    // ),

    extraNodeModules: {
      'react-native': path.resolve(
        __dirname,
        `apps/${pkgName}/node_modules/react-native`,
      ),
      // axios: path.resolve(__dirname, '../../node_modules/axios'),
    },
    // resolveRequest: getResolveRequest(['', 'ts', 'tsx', 'js', 'jsx']),
  },
};
