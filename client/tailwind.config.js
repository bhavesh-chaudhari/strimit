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
      colors: {
        colors: {
          "theme-black": "#1c1c1c",
        },
      },
      keyframes: {
        firstGradient: {
          "0%, 16.667%": {
            opacity: 1,
          },
          "33.333%, 83.333%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        firstWhiteText: {
          "0%, 16.667%": {
            opacity: 0,
          },
          "25%, 91.667%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        secondGradient: {
          "0%, 16.667%": {
            opacity: 0,
          },
          "33.333%,50%": {
            opacity: 1,
          },
          "66.667%,100%": {
            opacity: 0,
          },
        },
        secondWhiteText: {
          "0%,25%": {
            opacity: 1,
          },
          "33.333%,50%": {
            opacity: 0,
          },
          "58.333%,100%": {
            opacity: 1,
          },
        },
        thirdGradient: {
          "0%,50%": {
            opacity: 0,
          },
          "66.667%, 83.333%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        thirdWhiteGradient: {
          "0%, 58.333%": {
            opacity: 1,
          },
          "66.667%, 83.333%": {
            opacity: 0,
          },
          "91.667%,100%": {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
