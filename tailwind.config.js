/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],

  theme: {
    extend: {
      fontFamily: {
        raleway: "Raleway"
      },
      colors: {
        primary: 'rgb(50,0,83)',
        lighter: 'rgb(217,193,255)',
        lightest: "rgb(230,224,246)",
        lightest2: "rgb(85,38,120)",
        milk: "rgb(247,246,249)",
        box1: "rgb(241,241,243)",
        box2: "rgb(216,193,254)",
        box3: "rgb(rgb(241,238,244)",
        bpurple: "rgb(83,41,115)",
      }
    },
  },
  plugins: [],
}

