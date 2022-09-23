/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warmGrey: '#1C1917',
        warmGrey700: '#44403C',
        warmGrey400: '#A8A29E',
        purple400: '#C084FC',
      }
    },
  },
  plugins: [],
}
