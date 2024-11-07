module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  parser: '@babel/eslint-parser', // Use this parser for modern JavaScript
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // Customize rules here
    'import/no-unused-modules': 'error',
    'no-console': 'warn',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'prettier/prettier': 'error', // Make Prettier errors show up as ESLint errors
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
};
