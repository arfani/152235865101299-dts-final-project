/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'courgette' : ['Courgette', 'cursive'],
      'coustard' : ['Coustard', 'serif'],
      'mousememoirs' : ['Mouse Memoirs', 'sans-serif']
    }
  },
  plugins: [],
}
