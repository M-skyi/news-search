module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb/base',
    'eslint:recommended',
    'plugin:react/recommended',
    'next/core-web-vitals',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'no-shadow': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-param-reassign': [2, {
      props: false,
    }],
  },
};
