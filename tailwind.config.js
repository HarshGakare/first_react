/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",  // Ensure this includes your component files
  ],
  theme: {
      extend: {
          fontFamily: {
              lexend: ['Lexend Exa', 'sans-serif'],
          },
      },
  },
  plugins: [],
}
