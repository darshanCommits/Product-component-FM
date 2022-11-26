/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    colors: {
      'cream' : 'hsl(30, 38%, 92%)',
      'cyan': 'hsl(158, 36%, 37%)',
      'hover': 'hsl(158, 36%, 30%)',
      'white': '#fff',
      'blue': 'hsl(212, 21%, 14%)',
      'grey': 'hsl(228, 12%, 48%)',
    },
    extend: {
      fontFamily: {
        'serif' : ['Montserrat'],
        'sans' : ['Fraunces'],
      },
    },
  },
  plugins: [],
}
