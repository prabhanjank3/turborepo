module.exports = {
  // Allow Jest to resolve modules from packages
  modulePaths: ['<rootDir>/packages', '<rootDir>/apps'],

  // Look for test files in packages and apps
  roots: ['<rootDir>/packages', '<rootDir>/apps'],

  // Pattern for test files
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],

  // Use Babel/TypeScript to handle code if needed
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  // Set up the environment if needed (like jsdom for browser-like environment)
  testEnvironment: 'jsdom', // Or 'jsdom' for browser tests
  testResultsProcessor: 'jest-sonar-reporter',

  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  // Optionally, configure global setups or mocks
  //   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
