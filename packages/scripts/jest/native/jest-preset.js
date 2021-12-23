module.exports = {
  haste: {
    defaultPlatform: 'ios',
    platforms: ['android', 'ios', 'native'],
  },
  roots: ["<rootDir>"],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePathIgnorePatterns: [
    "<rootDir>/test/__fixtures__",
    "<rootDir>/node_modules",
    "<rootDir>/dist",
  ],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)/)',
  ],
  testEnvironment: 'node',
  preset: "../../../ui-native/node_modules/react-native"
};


// /**
//  * Copyright (c) Facebook, Inc. and its affiliates.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  *
//  * @format
//  */

//  'use strict';

//  module.exports = {
//    haste: {
//      defaultPlatform: 'ios',
//      platforms: ['android', 'ios', 'native'],
//    },
//    transform: {
//      '^.+\\.(js|ts|tsx)$': 'babel-jest',
//      '^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp)$': require.resolve(
//        './jest/assetFileTransformer.js',
//      ),
//    },
//    transformIgnorePatterns: [
//      'node_modules/(?!((jest-)?react-native|@react-native(-community)?)/)',
//    ],
//    setupFiles: [require.resolve('./jest/setup.js')],
//    testEnvironment: 'node',
//  };
