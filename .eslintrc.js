module.exports = {
  extends: [
    'bigpopakap/base'
  ],
  rules: {
    // Since this repo is mostly configs written in Javascript instead of Typescript
    // without fancy module imports
    '@typescript-eslint/no-var-requires': 'off'
  }
};
