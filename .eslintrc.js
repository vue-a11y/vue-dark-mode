module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins: [
    'vue-a11y'
  ],
  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    'plugin:vue-a11y/base'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off',
    'vue-a11y/click-events-have-key-events': 'off'
  }  
}
