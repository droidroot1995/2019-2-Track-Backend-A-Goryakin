// Configuring Jest
// See: https://facebook.github.io/jest/docs/en/configuration.html

module.exports = {
  // without this line rootDir will be `./tests`
  // 'rootDir': '..',

  moduleFileExtensions: ['js', 'jsx', 'json'],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg|svg\\?inline)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/client/$1',
    '^@/(.*)$': '<rootDir>/tests/$1',
  },
  testPathIgnorePatterns: ['/node_modules/', '/docker/', '/scripts/', '/endtoend/'],

  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 40,
      lines: 40,
      statements: 50,
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/', '/scripts/', '/endtoend/'],
  verbose: true,
}

// "jest": {
//     "roots": [
//       "<rootDir>/src"
//     ],
//     "collectCoverageFrom": [
//       "src/**/*.{js,jsx,ts,tsx}",
//       "!src/**/*.d.ts"
//     ],
//     "setupFiles": [
//       "react-app-polyfill/jsdom"
//     ],
//     "setupFilesAfterEnv": [],
//     "testMatch": [
//       "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
//       "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
//     ],
//     "testEnvironment": "jest-environment-jsdom-fourteen",
//     "transform": {
//       "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
//       "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
//       "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
//     },
//     "transformIgnorePatterns": [
//       "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
//       "^.+\\.module\\.(css|sass|scss)$"
//     ],
//     "modulePaths": [],
//     "moduleNameMapper": {
//       "^react-native$": "react-native-web",
//       "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
//     },
//     "moduleFileExtensions": [
//       "web.js",
//       "js",
//       "web.ts",
//       "ts",
//       "web.tsx",
//       "tsx",
//       "json",
//       "web.jsx",
//       "jsx",
//       "node"
//     ],
//     "watchPlugins": [
//       "jest-watch-typeahead/filename",
//       "jest-watch-typeahead/testname"
//     ]
//   }, */
