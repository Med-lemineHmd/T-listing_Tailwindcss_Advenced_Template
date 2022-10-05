/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "cursive"],
        lora: ["lora", "serif"],
        nunito: ["Nunito", "sans-serif"],
        libre: ["Libre Baskerville", "serif"],
        monte: ["Montserrat", "sans-serif"],
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
