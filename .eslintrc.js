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
    'import/order': 'off',
    'no-alert': 'off',
    'arrow-body-style': 'off',
    'no-unused-vars': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'consistent-return': 'off',
    'no-undef': 'off',
    'no-param-reassign': [2, {
      props: false,
    }],
  },
};
