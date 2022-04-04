module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './public/**/*.{html,js}'
  ],
  theme: {
    extend: {
      fontSize: {
        mammoth: ['8rem', { lineHeight: '1rem' }],
      },
      fontWeight: {
        blackest: '900'
      },
      fontFamily: {
        goth: 'League Gothic',
        robotic: 'Roboto'
      }

    },
  },
  plugins: [],
}
