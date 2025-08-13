/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],

  theme: {
    extend: {
      fontFamily: {
        raleway: "Raleway"
      },
      colors: {
        primary: 'rgb(7,61,68)',
        lighter: 'rgb(56,93,101)',
      }
    },
  },
  plugins: [],
}

