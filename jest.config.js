module.exports = {
  testURL: 'http://localhost:8000',
  testEnvironment: './tests/PuppeteerEnvironment',
  verbose: false,
  extraSetupFiles: ['./tests/setupTests.js'],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: false,
    localStorage: null,
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  // snapshotSerializers: ['enzyme-to-json/serializer'],

  // transformIgnorePatterns: ['<rootDir>/node_modules/']
  // moduleNameMapper: {
  //   '\\.(css|less|sass|scss)$': require.resolve('identity-obj-proxy'),  // 原有配置，不能改动。
  //   "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
  //   '@/components': '<rootDir>/src/components',
  //   '@/utils': '<rootDir>/src/utils',
  // },


};
