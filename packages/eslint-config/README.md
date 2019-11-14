@bigpopakap/eslint-config
=========================

Shared ESLint configurations for bigpopakap's personal projects.

# Adding to a new repo

## Installation

```bash
yarn add -D @bigpopakap/eslint-config
```

## Running

Examples of how to run the linter:
```bash
yarn eslint-bigpopakap
yarn eslint-bigpopakap --fix
```

## Configuration

Add the following `.eslintrc.js` to your project:
```js
module.exports = {
  extends: [
    // Update to `/node`, `/react`, or another flavor, depending on what kind of project you have.
    '@bigpopakap/eslint-config/base'
  ],

  // Optional, but useful to help ESLint resolve absolute path imports,
  // matching whatever path is in your `tsconfig.json#compilerOptions#baseUrl`.
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"]
      }
    },
  }
};
```

## Useful scripts

You may want to add the following scripts to your `package.json`:
```json
{
  "scripts": {
    "lint": "npm-run-all -c lint:*",
    "lintfix": "npm-run-all -c lint:*:fix",
    "lint:js": "yarn eslint-bigpopakap",
    "lint:js:fix": "yarn lint:js --fix",
  }
}
```
