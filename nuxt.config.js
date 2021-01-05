import colors from 'vuetify/es5/util/colors';

export default {
  head: {
    titleTemplate: 'Biuro Makowskaj',
    title: 'Biuro Makowskaj',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Kompleksowa obsługa księgowa dla firm i osób prywatnych',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    ],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/fontawesome',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/fontawesome'],
  fontawesome: {
    component: 'fa',
    icons: {
      brands: true,
      solid: true,
    },
  },
  axios: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      defaut: 'dark',
      themes: {
        dark: {
          primary: '#ffffff',
          accent: colors.grey.darken3,
          secondary: '#5b0770',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  build: {},
};
