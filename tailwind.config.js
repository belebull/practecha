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
        header: 'Karla',
        body: 'Karla',
      },
      colors: {
        base: '#6B3399',
        accent: '#D7D7FC',
        'dark-grey': '#707070',
        'light-grey': '#D9D9D9',
      },
    },
  },
  variants: {},
  plugins: [],
}
