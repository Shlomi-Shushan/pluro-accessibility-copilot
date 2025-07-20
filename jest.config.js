module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/jest.setup.ts'],
  roots: ['<rootDir>/src/test'],
  testRegex: '.*\\.test\\.ts$',
  moduleNameMapper: {
    '^vscode$': '<rootDir>/__mocks__/vscode.ts'
  },
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/test/**/*.ts',
    '!src/**/*.d.ts',
    '!src/extension.ts',
    '!src/extension-optimized.ts',
    '!src/routes/**/*.ts',
    '!src/app.d.ts'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html', 'json'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  testTimeout: 30000,
  verbose: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/',
    '/__mocks__/',
    '/coverage/'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/coverage/'
  ]
};
