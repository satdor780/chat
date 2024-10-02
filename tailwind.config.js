/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#DB5375',
        'blue': '#8774e1'
      }
     
    },
  },
  plugins: [],
}