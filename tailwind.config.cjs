/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*[js, jsx]"],
  theme: {
    extend: {
      backgroundImage:{
        'Win-max': "url(public/Winmax.jpg)",
      }
    },
  },
  plugins: [],
}
