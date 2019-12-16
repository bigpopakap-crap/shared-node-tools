module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:import/errors',
    'plugin:prettier/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:node/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    // TODO(#37) remove this and the eslint-plugin-typescript package
    // becuase it's supposed to be replaced by @typescript-eslint
    // but IntelliJ doesn't work with @typescript-eslint for some reason
    'typescript',
    '@typescript-eslint',
    'import',
    'absolute-import',
    'json',
    'prettier', // prettier must be last
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.module.scss'],
      },

      typescript: {
        alwaysTryTypes: true,
        // Use <root>/tsconfig.json by default. To override, use the "directory" option. See https://github.com/alexgorbatchev/eslint-import-resolver-typescript
      },
    },
  },
  rules: {
    // Replace the base rule with the typescript one so that it knows when type imports are used
    'no-unused-vars': 'off',
    'typescript/no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars': 'error',

    /* Import rules ******************************************************************/
    'import/order': ['error', { 'newlines-between': 'always' }],
    'no-restricted-imports': [
      'error',
      {
        // disallow "import * from"
        patterns: ['\\*'],
      },
    ],
    'import/no-duplicates': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',

    /* Absolute import rules ********************************************************/
    'absolute-import/no-relative-path': 'error',
    'absolute-import/no-unresolved': 'error',

    /* Explicit return types ********************************************************/
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        // Allow something like `node.addEventListener('click', () => {});`
        // See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md#allowexpressions
        allowExpressions: true,
      },
    ],

    /* Async/await *****************************************************************/
    'no-await-in-loop': 'error',
    'no-return-await': 'error',
    'require-await': 'error',

    /* Comments disabling Eslint **************************************************/
    'eslint-comments/no-unused-disable': 'error',

    /* Node things ****************************************************************/
    // Use module.exports instead of exports directly
    'node/exports-style': ['error', 'module.exports'],
    // Never allow using file extensions in import statements
    'node/file-extension-in-import': ['error', 'never'],
    // Always use a global var for "console" without importing it
    'node/prefer-global/console': ['error', 'always'],
    // Always use a global var for "process" without importing it
    'node/prefer-global/process': ['error', 'always'],
    // Always require importing UrlSearchParams from 'url'
    'node/prefer-global/url-search-params': ['error', 'never'],
    // Always require importing URL from 'url'
    'node/prefer-global/url': ['error', 'never'],
    // Use async await instead of callbacks for filesystem calls
    'node/prefer-promises/fs': ['error'],
    // Use async await instead of callbacks for dns calls
    'node/prefer-promises/dns': ['error'],

    /* Code style *****************************************************************/
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'es5',
        tabWidth: 2,
        semi: true,
      },
    ],
  },
};
