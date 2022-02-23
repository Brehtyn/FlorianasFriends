export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'florianaspets',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  router: {
    middleware: ['auth']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
          // https://go.nuxtjs.dev/pwa
          '@nuxtjs/pwa',
              
          [
            '@nuxtjs/firebase',
            {
              config: {
                apiKey: "AIzaSyAF4D4fwlNyDbTGyXSfHJZKTTBeDGsP4mo",
                authDomain: "florianasfriends.firebaseapp.com",
                projectId: "florianasfriends",
                storageBucket: "florianasfriends.appspot.com",
                messagingSenderId: "528184157444",
                appId: "1:528184157444:web:502a3005860fee09e85c51"
              },
              services: {
                auth: {
                  persistence: 'local', // default
                  initialize: {
                    onAuthStateChangedAction: 'onAuthStateChangedAction',
                    subscribeManually: false
                  },
                  ssr: false,
                },
                firestore: true,
                functions: true,
                storage: true,
                database: true,
                messaging: true,
              }
            }
          ]


  ],

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
