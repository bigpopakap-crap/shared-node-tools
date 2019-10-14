{stylelint,eslint}-config-bigpopakap
========================

# Usage

## Installation

```bash
yarn add -D eslint-config-bigpopakap
yarn add -D stylelint-config-bigpopakap

# It's ok to use npx. It will detect and ask if it should use yarn
# Optionally use the following arg: --extra-args "--ignore-engines"
npx install-peerdeps --yarn --dev --only-peers eslint-config-bigpopakap
npx install-peerdeps --yarn --dev --only-peers stylelint-config-bigpopakap
```

## Configuration

Add the following `.eslintrc.js` to your project.
```js
module.exports = {
  extends: [
    // Update to `/node`, `/react`, or another flavor, depending on what kind of project you have.
    'bigpopakap/base'
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

Add the following `.stylelintrc.js` to your project. *Important*: remember to
update `/base` to `/react-styled-components` or any other flavor,
depending on what kind of project you have.
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
    "lint:js": "yarn eslint --ext json,js,jsx,ts,d.ts,tsx ./",
    "lint:js:fix": "yarn lint:js --fix",
    "lint:css": "yarn stylelint src/**/*.{js,jsx,ts,tsx}",
    "lint:css:fix": "yarn lint:css --fix"
  }
}
```
