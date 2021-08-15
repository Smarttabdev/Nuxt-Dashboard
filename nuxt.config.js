const pkg = require('./package')


const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const colors = require('vuetify/es5/util/colors').default
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Vue Material Admin Template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description', name: 'description', content: 'Vue Material Admin Template is a \n' +
          '    Google Material Design inspired admin dashboard template built with Vue and Vuetify.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/echarts/4.0.4/echarts-en.min.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3adced' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/theme.styl',
    '~/assets/style/app.styl',
    'font-awesome/css/font-awesome.css',
    'roboto-fontface/css/roboto/roboto-fontface.css',
    '~/assets/variables.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/vee-validate',
    '@/plugins/customauth.js',
    '@/plugins/components.client.js'
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-material-design-icons',
    "@nuxtjs/svg",
    '@nuxtjs/component-cache',

    // With options
    [
      '@nuxtjs/component-cache',
      {
        max: 10000,
        maxAge: 1000 * 60 * 60
      }
    ]
  ],

  axios: {
    baseURL: 'http://localhost/api'
  },
  auth: {
    redirect: {
      login: '/newlogin',
      logout: '/newlogin',
      callback: '/newlogin',
      home: '/dashboard'
    },
    plugins: ['~/plugins/auth.js'],
    strategies: {
      local: {
        endpoints: {
          login: { url: '/users/login', method: 'post', propertyName: 'token' },
          logout: { url: '/users/logout', method: 'post' },
          user: { url: '/users/me', method: 'post', propertyName: 'result' }
        },
        // tokenRequired: true,
        // tokenType: 'bearer'
        // autoFetchUser: true
      },
      facebook: {
        client_id: '278317299834308',
        userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',
        scope: ['public_profile', 'email', 'user_birthday']
      },
      google: {
        client_id: '285876302732-51sr3en0m64mev5mg6i3p5lknke0cnb3.apps.googleusercontent.com'
      },
      linkedin: {
        _scheme: 'oauth2',
        authorization_endpoint: 'https://www.linkedin.com/oauth/v2/authorization',
        userinfo_endpoint: 'https://api.linkedin.com/v2/me',
        scope: ['r_liteprofile', 'r_emailaddress', 'w_member_social'],
        access_type: 'offline',
        access_token_endpoint: 'https://www.linkedin.com/oauth/v2/accessToken',
        response_type: 'code',
        token_type: 'Bearer',
        redirect_uri: "http://localhost/",
        client_id: '86ffrqxo3ctbpg',
        token_key: 'access_token'

      }
    }
  },

  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.purple,
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3,
          background: colors.indigo.lighten5, // Not automatically applied
        },
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ["~assets/style/variables.styl"]
      }
    },
    // vendor: ['@/components/chart/echart'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // if (ctx.isServer) {
      //   config.externals = [
      //     nodeExternals({
      //       whitelist: [/^echart/]
      //     })
      //   ]
      // }
    }
  },

  /*
  ** Server options
  */
  server: {
    port: 80
  }
}
