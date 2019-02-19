const pkg = require('./package')


module.exports = {
  mode: 'spa',
  
  /*
  ** Headers of the page
  */
  head: {
    title: 'Xem web mới ngay nhận quà liền tay',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'BẬT MÍ! KTO VIỆT NAM ĐÃ RA MẮT GIAO DIỆN WEBSITE HOÀN TOÀN MỚI, BẠN ĐÃ XEM THỬ CHƯA?' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Xem web mới ngay nhận quà liền tay'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'event'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.visitkorea.org.vn/xem-web-moi-ngay-nhan-qua-lien-tay/'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.visitkorea.org.vn/img/hero_background-1.jpg'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'BẬT MÍ! KTO VIỆT NAM ĐÃ RA MẮT GIAO DIỆN WEBSITE HOÀN TOÀN MỚI, BẠN ĐÃ XEM THỬ CHƯA?'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://www.visitkorea.org.vn/wp-content/themes/kto/img/icons/favicon.ico' }
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js' },
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' },
      { src: 'https://apis.google.com/js/api:client.js' }
    ],

  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    // CSS file in the project
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/h.css',
    // SCSS file in the project
    '@/assets/css/r.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue2-smooth-scroll',
    '~/plugins/google-login'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  router: {
    // base: '/xem-web-moi-ngay-nhan-qua-lien-tay/'
  },
}
