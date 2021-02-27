module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './component/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: 'Karla',
      },
      colors: {
        main: '#6B3399',
        accent: '#D7D7FC',
        'dark-grey': '#403F40',
        'light-grey': '#D9D9D9',
      },
    },
  },
  variants: {},
  plugins: [],
}
