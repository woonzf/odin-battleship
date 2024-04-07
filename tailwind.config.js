/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html',
            './src/dom/*.js'],
  theme: {
    extend: {
      prefix: 'tw-',
    },
  },
  plugins: [],
}