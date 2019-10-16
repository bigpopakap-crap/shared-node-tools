stylelint-config-bigpopakap
===========================

Shared Stylelint configurations for bigpopakap's personal projects.

# Adding to a new repo

## Installation

```bash
yarn add -D stylelint-config-bigpopakap

# It's ok to use npx. It will detect and ask if it should use yarn
# Optionally use the following arg: --extra-args "--ignore-engines"
npx install-peerdeps --yarn --dev --only-peers stylelint-config-bigpopakap
```

## Configuration

Add the following `.stylelintrc.js` to your project.
```js
module.exports = {
  "extends": [
    // Update `/react-styled-components` or another flavor, depending on what kind of project you have.
    "stylelint-config-bigpopakap/base"
  ]
};
```

## Useful scripts

You may want to add the following scripts to your `package.json`
```json
{
  "scripts": {
    "lint": "npm-run-all -c lint:*",
    "lintfix": "npm-run-all -c lint:*:fix",
    "lint:css": "yarn stylelint src/**/*.{js,jsx,ts,tsx}",
    "lint:css:fix": "yarn lint:css --fix"
  }
}
```
