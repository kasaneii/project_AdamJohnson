/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     './app/**/*.{html,js,jsx}',
     './app/about/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'mineShaft': '#2C2727',
        'masala': '#3E3939',
        'silver': '#CACACA',
        'codGray': '#1A1A1A',
      },

      fontFamily: {
        'workSans': ['Work Sans, sans-serif'],
        'kanit': ['Kanit, sans-serif'],
        'permanentMarker': ['Permanent Marker, cursive'],
      },
    },
  },
  plugins: [],
}
