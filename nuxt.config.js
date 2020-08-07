export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Dr Phone Repair - Queen Street Mobile Phone Repair est. 2015' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'Queen Street Mobile Phone Repair est. 2015',
        name: 'Queen Street Mobile Phone Repair est. 2015',
        content: 'Queen Street Mobile Phone Repair est. 2015' || process.env.npm_package_description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Sarpanch:wght@400;600&display=swap'
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {
      src: 'plugins/owl.js',
      ssr: false
    }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-analytics'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    postcss: {
      plugins: {
        rfs: {
          twoDimensional: false,
          baseValue: 20,
          unit: 'rem',
          breakpoint: 1200,
          breakpointUnit: 'px',
          factor: 10,
          class: false,
          unitPrecision: 6,
          safariIframeResizeBugFix: false,
          remValue: 16
        }
      }
    }
  },
  bootstrapVue: {
    icons: true,
    bootstrapCSS: true,
    bootstrapVueCSS: true
  },
  styleResources: {
    scss: [
      '@/assets/scss/_variables.scss'
    ]
  },
  fontawesome: {
    icons: {
      solid: ['faHome', 'faPhone', 'faEnvelope', 'faClock', 'faMobile', 'faLaptop', 'faWrench']
    }
  },
  googleAnalytics: {
    id: 'UA-174913069-1'
  }
}
