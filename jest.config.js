module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    // Mock native modules that aren't needed for unit tests
    '^react-native$': '<rootDir>/__mocks__/react-native.js',
    '^expo-router$': '<rootDir>/__mocks__/expo-router.js',
    '^expo-linear-gradient$': '<rootDir>/__mocks__/expo-linear-gradient.js',
    '^@expo/vector-icons$': '<rootDir>/__mocks__/@expo/vector-icons.js',
    '^expo-status-bar$': '<rootDir>/__mocks__/expo-status-bar.js',
    '^expo-router/entry$': '<rootDir>/__mocks__/expo-router.js',
  },
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|expo|@expo|@unimodules)/)',
  ],
};
