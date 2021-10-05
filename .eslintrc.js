module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': 'off',
    'no-extra-semi': 'off',
    'no-undef': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'event' }],
    'import/extensions': 'off',
  },
};
