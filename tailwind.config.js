/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        liq: {
          '0%': { transform: 'translate(-40%, -75%) rotate(0deg)'},
          '100%': { transform: 'translate(-40%, -75%) rotate(180deg)' },
        }
      }
    },
  },
  plugins: [],
}
