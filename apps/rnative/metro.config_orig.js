const path = require('path');
const getWorkspaces = require('get-yarn-workspaces');
const workspaces = getWorkspaces(__dirname);
const pkg = require('./package.json');
const blacklist = require('metro-config/src/defaults/exclusionList');
const pkgName = pkg.name;
const {getDefaultConfig} = require('metro-config');

console.log(
  'workspaces',
  ...workspaces.filter(
    ws => ws.includes('ui-native') || ws.includes('rnative'),
  ),
);

console.log(
  'weow',
  path.resolve(__dirname, `apps/${pkgName}/node_modules/react-native`),
);

console.log(
  'ui-mative',
  path.resolve(__dirname, '../../packages/ui-native/node_modules/react-native'),
);

console.log(
  'other',
  path.resolve(
    __dirname,
    '..',
    '..',
    'packages/ui-native/node_modules/react-native',
  ),
);

const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, '../..');

module.exports = {
  projectRoot: projectRoot,
  watchFolders: [
    // * Make sure to include & watch deps at monorepo root
    path.resolve(__dirname, '../../node_modules'),
    path.resolve(__dirname, '../../packages/ui-native/dist'),
    // * Make sure to include local node_modules
    // path.resolve(__dirname, 'node_modules'),
    ...workspaces.filter(
      ws => ws.includes('ui-native') || ws.includes('rnative'),
    ),
    // workspaceRoot,
  ],
  resolver: {
    nodeModulesPath: [
      path.resolve(projectRoot, 'node_modules'),
      path.resolve(workspaceRoot, 'node_modules'),
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
        '..',
        '..',
        'packages/ui-native/node_modules/react-native',
      ),
    },
  },
};

// module.exports = {
//   projectRoot: projectRoot,

//   watchFolders: [
//     // * Make sure to include & watch deps at monorepo root
//     path.resolve(__dirname, '../../node_modules'),
//     path.resolve(__dirname, '../../packages/ui-native/dist'),
//     // * Make sure to include local node_modules
//     // path.resolve(__dirname, 'node_modules'),
//     ...workspaces.filter(
//       ws => ws.includes('ui-native') || ws.includes('rnative'),
//     ),
//   ],

//   resolver: {
//     nodeModulesPath: [
//       path.resolve(projectRoot, 'node_modules'),
//       path.resolve(workspaceRoot, 'node_modules'),
//     ],
//     // ...defaultConfig,
//     blockList: blacklist(
//       workspaces.map(
//         workspacePath =>
//           `/${workspacePath.replace(
//             /\//g,
//             '[/\\\\]',
//           )}[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/`,
//       ),
//     ),

//     extraNodeModules: {
//       'react-native': path.resolve(__dirname, 'node_modules/react-native'),
//       'ui-native': path.resolve(
//         __dirname,
//         '..',
//         '..',
//         'packages/ui-native/node_modules/react-native',
//       ),
//     },
//     // resolveRequest: getResolveRequest(['', 'ts', 'tsx', 'js', 'jsx']),
//   },
// };
