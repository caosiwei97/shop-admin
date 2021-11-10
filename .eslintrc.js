module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-strongly-recommended', 'standard'],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'comma-dangle': 0,
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
    },
  ],
}
