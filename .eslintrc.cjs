module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true // Added if you're using any Node.js APIs or scripts
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended' // Integrating Prettier with ESLint
  ],
  ignorePatterns: ['dist/', 'node_modules/', '.eslintrc.js'], // Updated to ignore more folders
  parserOptions: {
    ecmaVersion: 12, // Updated to explicitly use version 12
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true // Enables linting for JSX specifically
    }
  },
  settings: {
    react: {
      version: 'detect' // Automatically detect the React version
    }
  },
  plugins: [
    'react',
    'react-hooks',
    'prettier' // Added to manage Prettier as a plugin
  ],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react/jsx-uses-react': 'off', // Not needed for React 17+
    'react/react-in-jsx-scope': 'off', // Not needed for React 17+
    'prettier/prettier': [
      'error',
      {
        // Ensures Prettier errors are shown as ESLint errors
        endOfLine: 'auto',
        singleQuote: true,
        jsxSingleQuote: true,
        semi: false
      }
    ],
    'no-unused-vars': 'warn', // Warns about unused variables
    'no-console': 'warn' // Warns about console usage in production
  }
}
