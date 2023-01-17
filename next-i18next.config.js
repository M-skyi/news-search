const path = require('path')

module.exports = {
    i18n: {
      locales: ['en', 'ua'],
      defaultLocale: 'en'
    },
    localePath: path.resolve('./public/locales')
  }