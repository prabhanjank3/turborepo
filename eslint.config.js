/** @type {import('eslint').Linter.FlatConfig} */
const config = [
  {
    files: ['packages/**/*.tsx', 'packages/**/*.js', 'apps/**/*.tsx'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'), // Use the TypeScript parser
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        __dirname: 'readonly',
        process: 'readonly',
      },
    },
    ignores: ['node_modules/', 'dist/', 'build/'],
    plugins: {
      prettier: require('eslint-plugin-prettier'),
      react: require('eslint-plugin-react'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'), // Register TypeScript plugin
    },
    rules: {
      'prettier/prettier': 'error', // Make Prettier errors show up as ESLint errors
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'error', // Disallow the use of 'any' type
    },
  },
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
    rules: {
      'react/prop-types': 'off',
    },
  },
];

module.exports = config;
