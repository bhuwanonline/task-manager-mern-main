/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/**/*.test.ts"],
  verbose: true,
  forceExit: false,

  clearMocks: true,
  coverageProvider: "v8",
  roots: ["<rootDir>/src"],
};
