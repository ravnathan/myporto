/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {

      backgroundImage: {
        "cartoon" : "url(/assets/meCartoon.png)"
      },

      colors: {"regal" : "#0a2c47", 
        "cream" : "#e6d9c6", 
        "otherblue" : "#194260",
        "bluegray" : "#4a5666",
        "coffee" : "#9c7d60"},

      animation: {
        bubble: "bubble 9s infinite",
        slidein2:"slidein 2s",
        slidein3:"slidein 3s",
        slidein4:"slidein 4s",
        slidein5:"slidein 5s",
        slidein6:"slidein 6s",
        slidein7:"slidein 7s",
        slidein8:"slidein 8s",
        pulseloop4: "pulseloop 4s ease-in-out 700ms infinite",
        pulseloop6: "pulseloop 6s ease-in-out 700ms infinite",
        pulseloop8: "pulseloop 8s ease-in-out 700ms infinite",
        pulseloop10: "pulseloop 10s ease-in-out 700ms infinite"
      },

      keyframes: {

        slidein: {
          from: {
            opacity: "0",
            transform: "translateX(-10px)"
          },
          to: {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        
        pulseloop: {
          "0%" : {opacity: "0.5"},
          "33%" : {opacity: "1"},
          "66%" : {opacity: "0.7"},
          "100" : {opacity: "0.5"}
        },

        bubble:{
          "0%": {trasform: "translate(0px, 0px) scale(0.5)",},
          "33%": {transform: "translate(30px, -50px) scale(1)",},
          "66%": {transform: "translate(-20px, 20px) scale(0.2)",},
          "100%": {transform: "translate(0px, 0px) scale (0.5),"}
        }
      }
    },
  },
  plugins: [],
}

