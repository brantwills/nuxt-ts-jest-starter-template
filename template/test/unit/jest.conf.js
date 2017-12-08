const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
    'vue'
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.ts$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
    '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor'
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e'
  ],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|js)$',
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  mapCoverage: true,
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'components/**/*.{js,ts,vue}',
    'layouts/**/*.{js,ts,vue}',
    'pages/**/*.{js,ts,vue}',
    'store/**/*.{js,ts,vue}',
    '!**/node_modules/**'
  ]
}
