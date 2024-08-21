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
  },
  plugins: [],
}

