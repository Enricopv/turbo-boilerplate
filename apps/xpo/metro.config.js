const path = require('path');

const getWorkspaces = require('get-yarn-workspaces');
// const {blockList} = require('metro-config/src/defaults');

const workspaces = getWorkspaces(__dirname);

module.exports = {
  // projectRoot: path.resolve(__dirname, 'apps/rnative'),

  watchFolders: [path.resolve(__dirname, 'node_modules'), ...workspaces],

  resolver: {
    blocklist: workspaces.map(
      workspacePath =>
        `/${workspacePath.replace(
          /\//g,
          '[/\\\\]',
        )}[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/`,
    ),

    extraNodeModules: {
      'react-native': path.resolve(
        __dirname,
        'apps/rnative/node_modules/react-native',
      ),
    },
  },
};
