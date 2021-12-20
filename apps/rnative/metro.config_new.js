const path = require('path');
const getWorkspaces = require('get-yarn-workspaces');
const workspaces = getWorkspaces(__dirname);
const metroResolver = require('metro-resolver');
const pkg = require('./package.json');

const pkgName = pkg.name;

const watchFolders = [path.resolve(__dirname, 'node_modules'), ...workspaces];

const blocklist1 = workspaces.map(
  workspacePath =>
    `/${workspacePath.replace(
      /\//g,
      '[/\\\\]',
    )}[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/`,
);

const escapePath = pathString => pathString.replace(/\//g, '[/\\\\]');

const getWorkspaceName = workspacePath => workspacePath.split('/').pop();

const getWorkspaceSymlink = workspacePath => {
  return path.resolve(
    __dirname,
    '..',
    '..',
    'node_modules',
    getWorkspaceName(workspacePath),
  );
};

const blocklist2 = workspaces
  .map(getWorkspaceSymlink)
  .map(workspaceSymLink => `/${escapePath(workspaceSymLink)}[/\\\\].*/`);

const blocklist = [...blocklist1, ...blocklist2];

const projectRoot = path.resolve(__dirname);

console.log('blocklist', blocklist);

module.exports = {
  projectRoot,

  watchFolders,

  resolver: {
    blocklist,

    extraNodeModules: {
      'react-native': path.resolve(
        __dirname,
        `apps/${pkgName}/node_modules/react-native`,
      ),
    },
    resolveRequest: getResolveRequest(['', 'ts', 'tsx', 'js', 'jsx']),
  },
};

function getResolveRequest(extensions) {
  return function (_context, realModuleName, platform, moduleName) {
    const DEBUG = process.env.NX_REACT_NATIVE_DEBUG === 'true';

    if (DEBUG) {
      console.log(`[Nx] Resolving: ${moduleName}`);
    }

    const {resolveRequest, ...context} = _context;
    if (moduleName === 'axios') {
      console.log(context, moduleName, platform);
      return {
        type: 'sourceFile',
        filePath: path.resolve(__dirname, '../../node_modules/axios/index.js'),
      };
    }
    try {
      return metroResolver.resolve(context, moduleName, platform);
    } catch {
      if (DEBUG) {
        console.log(
          `[Nx] Unable to resolve with default Metro resolver: ${moduleName}`,
        );
      }
    }
    throw new Error(`Cannot resolve ${moduleName}`);
  };
}

// let matcher;
// let absoluteBaseUrl;
// let paths;

// function getMatcher() {
//   const DEBUG = process.env.NX_REACT_NATIVE_DEBUG === 'true';

//   if (!matcher) {
//     const result = loadConfig();
//     if (result.resultType === 'success') {
//       absoluteBaseUrl = result.absoluteBaseUrl;
//       paths = result.paths;
//       if (DEBUG) {
//         console.log(`[Nx] Located tsconfig at ${absoluteBaseUrl}`);
//         console.log(
//           `[Nx] Found the following paths:\n:${JSON.stringify(paths, null, 2)}`,
//         );
//       }
//       matcher = createMatchPath(absoluteBaseUrl, paths);
//     } else {
//       console.log(`[Nx] Failed to locate tsconfig}`);
//       throw new Error(`Could not load tsconfig for project`);
//     }
//   }
//   return matcher;
// }

const block = [
  '/[/\\\\]Users[/\\\\]enrico[/\\\\]Documents[/\\\\]projects[/\\\\]testrepo[/\\\\]packages[/\\\\]config[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/',
  '/[/\\\\]Users[/\\\\]enrico[/\\\\]Documents[/\\\\]projects[/\\\\]testrepo[/\\\\]packages[/\\\\]scripts[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/',
  '/[/\\\\]Users[/\\\\]enrico[/\\\\]Documents[/\\\\]projects[/\\\\]testrepo[/\\\\]packages[/\\\\]tsconfig[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/',
  '/[/\\\\]Users[/\\\\]enrico[/\\\\]Documents[/\\\\]projects[/\\\\]testrepo[/\\\\]packages[/\\\\]ui[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/',
  '/[/\\\\]Users[/\\\\]enrico[/\\\\]Documents[/\\\\]projects[/\\\\]testrepo[/\\\\]packages[/\\\\]ui-native[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/',
  '/[/\\\\]Users[/\\\\]enrico[/\\\\]Documents[/\\\\]projects[/\\\\]testrepo[/\\\\]apps[/\\\\]blog[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/',
  '/[/\\\\]Users[/\\\\]enrico[/\\\\]Documents[/\\\\]projects[/\\\\]testrepo[/\\\\]apps[/\\\\]docs[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/',
  '/[/\\\\]Users[/\\\\]enrico[/\\\\]Documents[/\\\\]projects[/\\\\]testrepo[/\\\\]apps[/\\\\]rnative[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/',
  '/[/\\\\]Users[/\\\\]enrico[/\\\\]Documents[/\\\\]projects[/\\\\]testrepo[/\\\\]apps[/\\\\]web[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/',
  '/[/\\\\]Users[/\\\\]enrico[/\\\\]Documents[/\\\\]projects[/\\\\]testrepo[/\\\\]apps[/\\\\]xpo[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/',
  '/[/\\\\]Users[/\\\\]enrico[/\\\\]Documents[/\\\\]projects[/\\\\]testrepo[/\\\\]node_modules[/\\\\]config[/\\\\].*/',
  '/[/\\\\]Users[/\\\\]enrico[/\\\\]Documents[/\\\\]projects[/\\\\]testrepo[/\\\\]node_modules[/\\\\]scripts[/\\\\].*/',
  '/[/\\\\]Users[/\\\\]enrico[/\\\\]Documents[/\\\\]projects[/\\\\]testrepo[/\\\\]node_modules[/\\\\]tsconfig[/\\\\].*/',
  '/[/\\\\]Users[/\\\\]enrico[/\\\\]Documents[/\\\\]projects[/\\\\]testrepo[/\\\\]node_modules[/\\\\]ui[/\\\\].*/',
  '/[/\\\\]Users[/\\\\]enrico[/\\\\]Documents[/\\\\]projects[/\\\\]testrepo[/\\\\]node_modules[/\\\\]ui-native[/\\\\].*/',
  '/[/\\\\]Users[/\\\\]enrico[/\\\\]Documents[/\\\\]projects[/\\\\]testrepo[/\\\\]node_modules[/\\\\]blog[/\\\\].*/',
  '/[/\\\\]Users[/\\\\]enrico[/\\\\]Documents[/\\\\]projects[/\\\\]testrepo[/\\\\]node_modules[/\\\\]docs[/\\\\].*/',
  '/[/\\\\]Users[/\\\\]enrico[/\\\\]Documents[/\\\\]projects[/\\\\]testrepo[/\\\\]node_modules[/\\\\]rnative[/\\\\].*/',
  '/[/\\\\]Users[/\\\\]enrico[/\\\\]Documents[/\\\\]projects[/\\\\]testrepo[/\\\\]node_modules[/\\\\]web[/\\\\].*/',
  '/[/\\\\]Users[/\\\\]enrico[/\\\\]Documents[/\\\\]projects[/\\\\]testrepo[/\\\\]node_modules[/\\\\]xpo[/\\\\].*/',
];
