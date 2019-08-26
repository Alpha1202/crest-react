module.exports = {
    bail: false,
    clearMocks: true,
    collectCoverage: false,
    collectCoverageFrom: [
      'src/**/*.{js,jsx}',
      '!src/index.js',
      '!src/store/index.js',
      '!src/reducers/index.js',
      '!src/actions/types.js',
      '!**/node_modules/**',
      '!**/vendor/**',
    ],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/src/actions/',
      '/src/store',
      '/src/components/App.js',
      '/src/components/carousel.js',
      '/src/services',
      '/src/components/shared/Links/SideBar.js',
      '/src/pages/user-dashboard.js',
      '/src/pages/admin-dashboard/SummaryBox.js',
      '/src/pages/admin-dashboard/',
      '/src/reducers/account.reducer.js',
      '/src/reducers/auth.reducer.js',
      '/src/reducers/transaction.reducer.js',

    ],
    coverageReporters: [
      'json',
      'text',
      'lcov',
      'clover',
    ],
    coverageThreshold: {
      global: {
        branches: 60,
        functions: 70,
        lines: 70,
        statements: -20,
      },
    },
    errorOnDeprecated: true,
    moduleFileExtensions: ['js', 'json', 'jsx'],
    setupFilesAfterEnv: ['./tests.setup.js'],
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    testPathIgnorePatterns: ['/node_modules/'],
    testURL: 'http://localhost',
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>config/jest/assetsTransformer.js',
      '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/'],
    verbose: true,
  };
  