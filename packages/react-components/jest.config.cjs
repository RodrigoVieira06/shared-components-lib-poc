/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  silent: true,
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx,ts,tsx}'
  ],
  coverageThreshold: {
    global: {
      lines: 80,
      functions: 70,
    },
  },
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx",
    "mjs"
  ],
  testEnvironment: "jsdom",
  preset: 'ts-jest',
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(@testing-components\/design-tokens))/"
  ]
};

module.exports = config;
