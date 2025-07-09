/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/js/*.js'],
  theme: {
    extend: {
      fontFamily: {
        romantic: ['Dancing Script', 'cursive'],
        comfy: ['Comfortaa', 'sans-serif'],
      },
      keyframes: {
        flowerUp: {
          '0%': {
            transform: 'translateY(0) scale(1)',
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(-100vh) scale(0.5)',
            opacity: '0'
          }
        }
      },
      animation: {
        flowerUp: 'flowerUp 4s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}
