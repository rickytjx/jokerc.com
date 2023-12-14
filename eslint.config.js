const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  react: true,
  formatters: true,
  overrides: {
    typescript: {
      'ts/no-redeclare': 'off',
      'node/prefer-global/process': 'off',
    },
  },
})
