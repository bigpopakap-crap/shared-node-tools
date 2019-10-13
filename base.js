module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:import/errors',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    // TODO(#37) remove this and the eslint-plugin-typescript package
    // becuase it's supposed to be replaced by @typescript-eslint
    // but IntelliJ doesn't work with @typescript-eslint for some reason
    'typescript',
    '@typescript-eslint',
    'import',
    'json',
    'prettier' // prettier must be last
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.module.scss']
      }
    }
  },
  rules: {
    // replace the base rule with the typescript one so that it knows when type imports are used
    'no-unused-vars': 'off',
    'typescript/no-unused-vars': 'error',

    // import rules
    'import/order': ['error', { 'newlines-between': 'always' }],
    'no-restricted-imports': [
      'error',
      {
        // disallow "import * from"
        patterns: ['\\*']
      }
    ],
    'import/no-duplicates': 'error',

    // code style
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'none',
        tabWidth: 2,
        semi: true
      }
    ]
  }
};
