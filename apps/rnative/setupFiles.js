const {jest} = require('@jest/globals');

const RESET_MODULE_EXCEPTIONS = ['react'];

let mockActualRegistry = {};

RESET_MODULE_EXCEPTIONS.forEach(moduleName => {
  jest.doMock(moduleName, () => {
    if (!mockActualRegistry[moduleName]) {
      mockActualRegistry[moduleName] = jest.requireActual(moduleName);
    }
    return mockActualRegistry[moduleName];
  });
});
