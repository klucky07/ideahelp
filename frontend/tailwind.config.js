/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'qwitcher-grypen': ['"Qwitcher Grypen"', 'cursive'],
      
      },
    },
    keyframes: {
      pulse: {
        '0%, 100%': { transform: 'scale(1)', opacity: 1 },
        '50%': { transform: 'scale(1.05)', opacity: 0.7 },
      },
      slide: {
        '0%': { transform: 'translateX(-10px)' },
        '50%': { transform: 'translateX(10px)' },
        '100%': { transform: 'translateX(-10px)' },
      },
    },
    animation: {
      'pulse': 'pulse 1.5s ease-in-out infinite',
      'slide': 'slide 2s ease-in-out infinite',
    },
  },

  plugins: [],
}

