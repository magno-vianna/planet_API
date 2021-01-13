module.exports = {
  preset: '@shelf/jest-mongodb',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  clearMocks: true,
  testMatch: [
    '**/*.spec.ts',
  ],
};
