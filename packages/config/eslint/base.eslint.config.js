const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const babelParser = require('@babel/eslint-parser');
const reactPlugin = require('eslint-plugin-react');
const prettierPlugin = require('eslint-plugin-prettier');

const sharedRules = {
  'prettier/prettier': 'error',
  'react/prop-types': 'off',
};

const sharedReactPlugins = {
  react: reactPlugin,
  prettier: prettierPlugin,
};

module.exports = [
  {
    ignores: ['**/dist/**', '**/node_modules/**'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      ...sharedReactPlugins,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...sharedRules,
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        requireConfigFile: false,
      },
    },
    plugins: sharedReactPlugins,
    rules: sharedRules,
  },
  {
    files: ['**/.storybook/**/*.jsx'],
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
];
