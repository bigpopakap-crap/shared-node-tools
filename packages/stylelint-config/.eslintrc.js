module.exports = {
  extends: [
    '@bigpopakap/eslint-config/node'
  ],
  rules: {
    // Since this repo is mostly configs written in Javascript instead of Typescript
    // without fancy module imports
    '@typescript-eslint/no-var-requires': 'off',

    // We also allow relative imports in this repo because they are usually
    // very simple
    'absolute-import/no-relative-path': 'off'
  }
};
