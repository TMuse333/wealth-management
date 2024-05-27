/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm':'655px',
        'md':'865px',
      },
      colors:{
        'light-blue': '#cce2fc',
        'dark-blue': '#93C5FD'
      }
    },
  },
  plugins: [],
}