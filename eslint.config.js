// eslint.config.js
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  // Global configuration for all JavaScript/TypeScript files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['dist-electron/**', 'dist-renderer/**', 'release/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      '@typescript-eslint': tsPlugin
    },
    rules: {
      // General JavaScript rules
      'no-console': 'warn',
      'no-debugger': 'error',
      
      // React-specific rules
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      ...reactHooks.configs.recommended.rules,
      
      // TypeScript-specific rules
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      
      // Disable prop-types as TypeScript provides type checking
      'react/prop-types': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  
  // Additional configuration for Electron main process files
  {
    files: ['electronapp/**/*.{js,ts}'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        __dirname: 'readonly',
        __filename: 'readonly'
      }
    }
  }
];
