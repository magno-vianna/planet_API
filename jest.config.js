module.exports = {
  preset: '@shelf/jest-mongodb',
  testEnvironment: 'node',
  clearMocks: true,
  testMatch: [
    '**/*.spec.ts',
  ],
};
