/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-color': '#25dfb2',
        'dark-color': '#0c0c0c',
        'nav-bg-color': '#242424', 
      },
    },
  },
  plugins: [],
}