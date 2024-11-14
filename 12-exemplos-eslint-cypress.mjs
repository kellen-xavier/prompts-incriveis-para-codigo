import plugin from 'eslint-plugin-cypress';

export default [
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**"],
    plugins: {
      cypress: plugin 
    },
    rules: {
      ...plugin.configs.recommended.rules, 

      // Outras regras personalizadas
      "no-console": "warn",
      "prefer-const": "error",
      "no-var": "error",
      "arrow-body-style": ["error", "as-needed"],
      "no-unused-vars": "error"
    }
  },
  {
    files: ["cypress/support/commands.js"],
    rules: {
      "cypress/no-async-tests": "error" 
    }
  }
];