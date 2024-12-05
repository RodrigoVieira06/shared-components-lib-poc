import react from 'eslint-plugin-react';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '*.min.js',
      'build/**',
      '.storybook/**',
      'packages/**/dist/**',
      'packages/**/coverage/**',
      'packages/design-tokens/src/**',
    ],

    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
    },
    plugins: {
      react,
      '@typescript-eslint': ts,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
