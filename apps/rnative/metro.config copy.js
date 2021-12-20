const path = require('path');
const getWorkspaces = require('get-yarn-workspaces');
const workspaces = getWorkspaces(__dirname);
const metroResolver = require('metro-resolver');
const pkg = require('./package.json');

const pkgName = pkg.name;

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
        `apps/${pkgName}/node_modules/react-native`,
      ),
    },
    // resolveRequest: getResolveRequest(['', 'ts', 'tsx', 'js', 'jsx']),
  },
};

export function getResolveRequest(extensions) {
  return function (_context, realModuleName, platform, moduleName) {
    const DEBUG = process.env.NX_REACT_NATIVE_DEBUG === 'true';

    if (DEBUG) {
      console.log(`[Nx] Resolving: ${moduleName}`);
    }

    const {resolveRequest, ...context} = _context;
    try {
      return metroResolver.resolve(context, moduleName, platform);
    } catch {
      if (DEBUG) {
        console.log(
          `[Nx] Unable to resolve with default Metro resolver: ${moduleName}`,
        );
      }
    }

    const matcher = getMatcher();
    let match;
    const matchExtension = extensions.find(extension => {
      match = matcher(realModuleName, undefined, undefined, ['.' + extension]);
      return !!match;
    });

    if (match) {
      return {
        type: 'sourceFile',
        filePath:
          !matchExtension || match.endsWith(`.${matchExtension}`)
            ? match
            : `${match}.${matchExtension}`,
      };
    } else {
      if (DEBUG) {
        console.log(`[Nx] Failed to resolve ${moduleName}`);
        console.log(
          `[Nx] The following tsconfig paths was used:\n:${JSON.stringify(
            paths,
            null,
            2,
          )}`,
        );
      }
      throw new Error(`Cannot resolve ${moduleName}`);
    }
  };
}

let matcher;
let absoluteBaseUrl;
let paths;

function getMatcher() {
  const DEBUG = process.env.NX_REACT_NATIVE_DEBUG === 'true';

  if (!matcher) {
    const result = loadConfig();
    if (result.resultType === 'success') {
      absoluteBaseUrl = result.absoluteBaseUrl;
      paths = result.paths;
      if (DEBUG) {
        console.log(`[Nx] Located tsconfig at ${absoluteBaseUrl}`);
        console.log(
          `[Nx] Found the following paths:\n:${JSON.stringify(paths, null, 2)}`,
        );
      }
      matcher = createMatchPath(absoluteBaseUrl, paths);
    } else {
      console.log(`[Nx] Failed to locate tsconfig}`);
      throw new Error(`Could not load tsconfig for project`);
    }
  }
  return matcher;
}
