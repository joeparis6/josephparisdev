export default {
  extends: [
    'prettier',
    'prettier/prettier',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  rules: {
    semi: 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
  },
};
