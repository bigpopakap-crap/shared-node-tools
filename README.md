eslint-config-bigpopakap
========================

# Installation

```bash
yarn add -D eslint-config-bigpopakap

# It's ok to use npx. It will detect and ask if it should use yarn
# Optionally use the following arg: --extra-args "--ignore-engines"
npx install-peerdeps --yarn --dev --only-peers eslint-config-bigpopakap
```

# Using in your project

Add the following `.eslintrc.js` to your project. *Important*: remember to
update `bigpopakap/base` to `bigpopakap/node` or `bigpopakap/react` depending on
whether your project is an express server or React app.
```js
module.exports = {
  extends: [
    'bigpopakap/base'
  ]
};
```

Adding the following will help ESLint resolve absolute paths, if
your `tsconfig.json` has `baseUrl: "src"`
```js
module.exports = {
  // ...

  settings: {
    "import/resolver": {
      node: {
        paths: ["src"]
      }
    },
  }
}
```

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