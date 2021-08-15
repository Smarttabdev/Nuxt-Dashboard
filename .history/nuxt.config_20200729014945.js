const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
     { rel:"stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap"}
    //  <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [


  
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [ '~/plugins/customauth.js','~/plugins/youtube.js'],
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
    'nuxt-material-design-icons'
  ],
  axios: {
    baseURL: 'http://localhost:3000/api'
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/',
      home: '/welcome'
    },
    plugins: [ '~/plugins/auth.js' ],
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
        redirect_uri: "http://localhost:3000/",
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
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
