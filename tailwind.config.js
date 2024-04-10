/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html',
            './src/module-front-end/*.js'],
  theme: {
    extend: {
      boxShadow: {
        '1110': '1px 1px 10px hsl(0, 0%, 30%)',
      },
      prefix: 'tw-',
    },
  },
  plugins: [],
}