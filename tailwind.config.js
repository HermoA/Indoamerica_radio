/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indo_gray': '#272727',
        'indo_green': '#00e380',
        'indo_blue': '#0071bc',
      },
      fontFamily:{
        roboto:['Roboto', 'sans-serif'],
      }
    },
    
  },
  plugins: [],
}