const pkg = require('./package')

module.exports = {
  mode: 'universal',

  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#409EFF' },

  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/theme/index.scss'
  ],

  plugins: [
    '@/plugins/globals',
    '@/plugins/axios'
  ],

  modules: [
    '@nuxtjs/axios',
    ['nuxt-env', {
      keys: [
        { key: 'MONGO_URI', secret: true },
        { key: 'JWT', secret: true },
        { key: 'BASE_URL', secret: true }
      ]
    }]
  ],

  axios: {
    baseURL: this.$env.BASE_URL || 'http://localhost:3000'
  },

  build: {
    transpile: [/^element-ui/],
    extend (config, ctx) {

    }
  }
}
