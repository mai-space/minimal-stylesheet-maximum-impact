module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: './tsconfig.json',
  },

  ignorePatterns: [
    '*.js',
  ],

  plugins: [
    '@typescript-eslint',
  ],

  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],

  rules: {
    'max-len': [
      'warn',
      {
        'code': 350,
      },
    ],
    'no-console': [
      'warn',
      {
        'allow': [
          'error',
          'info',
        ],
      },
    ],
    'no-param-reassign': 0,
    'no-restricted-exports': 0,
    "no-unused-vars": [
      "warn",
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
    ],
    "@typescript-eslint/no-use-before-define": [
      "warn",
    ],
  }
};
