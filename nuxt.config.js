export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'console-h5-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: 'http://localhost:3000',
  },
  render: {
    bundleRenderer: {
      filters: {
        formatDate: (val) => {
          if (moment(val).isBefore(moment().subtract(7, 'days'))) {
            return moment(val).format('YYYY-MM-DD')
          } else {
            return moment(val).from(moment())
          }
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
