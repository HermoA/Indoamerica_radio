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
      },
      keyframes:{
        "browse-in": {
                    "0%": {
                        transform: "scale(0.8) translateZ(0px)",
                        zIndex: "-1"
                    },
                    "10%": {
                        transform: "scale(0.8) translateZ(0px)",
                        zIndex: "-1",
                        opacity: "0.7",
                    },
                    "80%": {
                        transform: "scale(1.05) translateZ(0px)",
                        zIndex: "999",
                        opacity: "1",
                    },
                    "100%": {
                        transform: "scale(1) translateZ(0px)",
                        zIndex: "999"
                    },
                },
      },
      animation:{
        browsein: 'browse-in 0.4s ease-in-out 0.25s 1',
      }
    },
    
  },
  plugins: [],
}