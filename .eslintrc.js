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
    'plugin:vue/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['vue', 'nuxt'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
};
