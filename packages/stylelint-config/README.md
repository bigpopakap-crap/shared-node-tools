@bigpopakap/stylelint-config
===========================

Shared Stylelint configurations for bigpopakap's personal projects.

# Adding to a new repo

## Installation

```bash
yarn add -D @bigpopakap/stylelint-config
```

## Running

Examples of how to run the linter:
```bash
yarn stylelint-bigpopakap
yarn stylelint-bigpopakap --fix
```

## Configuration

Add the following `.stylelintrc.js` to your project:
```js
module.exports = {
  "extends": [
    // Update `/***` to `/react-styled-components` or another flavor, depending on what kind of project you have.
    "@bigpopakap/stylelint-config/***"
  ]
};
```

## Useful scripts

You may want to add the following scripts to your `package.json`:
```json
{
  "scripts": {
    "lint": "npm-run-all -c lint:*",
    "lintfix": "npm-run-all -c lint:*:fix",
    "lint:css": "yarn stylelint-bigpopakap",
    "lint:css:fix": "yarn lint:css --fix"
  }
}
```
