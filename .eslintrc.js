module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['vue', 'nuxt'],
  // add your custom rules here
  rules: {}
};
