/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1600px",
      },
      colors: {
        colors: {
          "theme-black": "#1c1c1c",
          modal: "rgb(0 0 0/0.7)",
        },
      },
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        montserrat: ["'Montserrat'", "sans-serif"],
      },
      keyframes: {
        firstGradient: {
          "0%, 25%": {
            opacity: 1,
          },
          "50%, 75%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        firstWhiteText: {
          "0%, 25%": {
            opacity: 0,
          },
          "37.5%, 88.5%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        secondGradient: {
          "0%, 25%": {
            opacity: 0,
          },
          "37.5%,75%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        secondWhiteText: {
          "0%,25%": {
            opacity: 1,
          },
          "50%,65%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
