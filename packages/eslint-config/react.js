module.exports = {
  env: {
    browser: true,
    es6: true,
    node: false,
  },
  extends: [
    './base.js',
    'plugin:css-modules/recommended',
    'react-app',
    'plugin:react/recommended',
    'plugin:jsx-a11y/strict',
  ],
  plugins: ['css-modules', 'react', 'jsx-a11y'],
};
