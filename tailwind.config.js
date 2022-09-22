/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warmGrey: '#1C1917',
        warmGrey400: '#A8A29E',
      }
    },
  },
  plugins: [],
}
