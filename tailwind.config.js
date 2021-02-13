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
        header: 'Rubik',
        body: 'Karla',
      },
      colors: {
        base: '#320E3B',
        accent: '#E8D7F1',
        white: '#F9F8F9',
        'dark-grey': '#403F40',
        'light-grey': '#D9D9D9',
      },
    },
  },
  variants: {},
  plugins: [],
}
