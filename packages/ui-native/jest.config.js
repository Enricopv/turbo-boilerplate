const { jestPreset: tsJest } = require("ts-jest");

module.exports = {
  preset: "react-native",
  moduleDirectories: [
    "node_modules",
    "<rootDir>/node_modules",
    "<rootDir>/packages",
  ],
  transform: {
    "^.+\\.ts?$": "<rootDir>/../../node_modules/ts-jest",
    "^.+\\.tsx?$": "<rootDir>/../../node_modules/ts-jest",
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
  },
  testRegex: "(<rootDir>/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],


  globals: {
    "ts-jest": {
      babelConfig: true,
    },
  },
};
