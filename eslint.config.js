const config = [
  {
    files: ['packages/**/*.tsx', 'packages/**/*.ts', 'apps/**/*.tsx'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'), // Use the TypeScript parser for .tsx and .ts files
      parserOptions: {
        ecmaVersion: 'latest', // Use the latest ECMAScript version
        sourceType: 'module', // Enable ES module syntax
        requireConfigFile: false, // Disable the Babel config file check
        ecmaFeatures: {
          jsx: true, // Enable JSX syntax for .tsx files
        },
      },
      globals: {
        __dirname: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
      prettier: require('eslint-plugin-prettier'),
      react: require('eslint-plugin-react'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'), // TypeScript plugin
    },
    rules: {
      'prettier/prettier': 'error', // Make Prettier errors show up as ESLint errors
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' }, // Ignore unused args that start with '_'
      ],
      '@typescript-eslint/no-explicit-any': 'error', // Disallow the use of 'any' type
    },
  },
  {
    files: ['packages/ui-mui/.storybook/*.jsx', '*.js', '*.jsx'], // Match .js and .jsx files here
    languageOptions: {
      parser: require('@babel/eslint-parser'), // Use Babel parser for .js and .jsx files
      parserOptions: {
        ecmaVersion: 'latest', // Use the latest ECMAScript version
        sourceType: 'module', // Enable ES module syntax
        requireConfigFile: false, // Disable the Babel config file check
        ecmaFeatures: {
          jsx: true, // Enable JSX for .js and .jsx files
        },
      },
    },
    plugins: {
      prettier: require('eslint-plugin-prettier'),
      react: require('eslint-plugin-react'),
    },
    rules: {
      'prettier/prettier': 'error', // Make Prettier errors show up as ESLint errors
      'react/prop-types': 'off', // Disable prop-types checking in React (TypeScript handles types)
    },
  },
  {
    files: ['*.ts'], // Handle TypeScript files separately (if needed)
    languageOptions: {
      parser: require('@typescript-eslint/parser'), // Use TypeScript parser for .ts files
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' }, // Ignore unused args that start with '_'
      ],
      '@typescript-eslint/no-explicit-any': 'error', // Disallow the use of 'any' type
    },
  },
];

module.exports = config;
