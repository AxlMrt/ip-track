/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      'tablet': {'max': '810px'},
    },
  },
  plugins: [],
};
