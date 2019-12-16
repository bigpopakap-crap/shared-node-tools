module.exports = {
  extends: ['./base.js'],
  plugins: ['filenames'],
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  rules: {
    /* File naming ****************************************************************/
    // Everything should be kebab case by default
    'filenames/match-regex': ['error', '^[a-z-\\.]+$', true],
    // The default export name, when converted to kebab case, should match the filename
    'filenames/match-exported': ['error', 'kebab'],
  },
};
