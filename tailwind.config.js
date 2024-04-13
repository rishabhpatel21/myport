/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      Lobster:["Lobster Two", "sans-serif"],
      SourceCode:["Source Code Pro", "monospace"],
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}

