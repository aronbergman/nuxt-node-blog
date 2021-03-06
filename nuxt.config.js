const pkg = require('./package')
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  mode: 'universal',

  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'yandex-verification', content: process.env.YANDEX_VERIFICATION },
      {
        hid: 'description',
        name: 'description',
        content: 'Возрождение нравственности и культуры отношений. Ирина Макарова, публицист, практикующий психолог в Москве'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css' }
    ]
  },

  loading: { color: '#409EFF' },

  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/theme/index.scss',
    'swiper/css/swiper.css'
  ],

  plugins: [
    '@/plugins/globals',
    '@/plugins/axios'
  ],

  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/style-resources'],
    [
      '@nuxtjs/yandex-metrika',
      {
        id: process.env.YANDEX_METRIKA,
        webvisor: true,
        clickmap: true,
        // useCDN:false,
        // trackLinks:true,
        // accurateTrackBounce:true,
      }
    ],
    ['@nuxtjs/robots', {
      UserAgent: '*',
      Allow: '*',
      Disallow: '/admin'
    }]
  ],

  styleResources: {
    scss: [
      'theme/mixins.scss',
    ]
  },

  axios: {
    baseURL: process.env.BASE_URL
  },

  build: {
    transpile: [/^element-ui/],
    extend (config, ctx) {

    }
  }
}
