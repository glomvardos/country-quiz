module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: theme => ({
        hero: "url('/src/assets/background.png')",
      }),
      colors: {
        blueTitle: '#2F527B',
        lightPurple: '#6066D0',
        orangeHover: '#F9A826',
        correctAnswer: '#60BF88',
        wrongAnswer: '#EA8282',
      },
      width: {
        96: '29rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
