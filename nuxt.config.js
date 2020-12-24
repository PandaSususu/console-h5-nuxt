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
  plugins: [
    '~/plugins/filters',
    '~/plugins/directives',
    '~/plugins/veevalidate',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],
  axios: {
    proxy: true, // 表示开启代理
    prefix: '/api', // 表示给请求url加个前缀 /api
    credentials: true, // 表示跨域请求时是否需要使用凭证
  },
  proxy: {
    '/api': {
      target: 'http://192.168.1.13:10241', // 目标接口域名
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {
        '^/api': '', // 把 /api 替换成 /
      },
    },
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/login/login',
            method: 'post',
            propertyName: 'data.token',
          },
          // logout: {
          //   url: '/api/auth/logout', method: 'post'
          // },
          user: {
            url: '/user/info',
            method: 'get',
            propertyName: 'data',
          },
        },
      },
    },
    cookie: {
      options: {
        maxAge: 60 * 60 * 24 * 1
      }
    },
    localStorage: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
