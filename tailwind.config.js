/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html',
            './src/module-front-end/*.js'],
  theme: {
    extend: {
      prefix: 'tw-',
    },
  },
  plugins: [],
}