const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /** primary */
        red: "#C1121F",
        green: "#00B655",
        grey: "#70747A",
        /** base */
        gypsum: "#FCF6F1",
        sand: "#E7E3D4",
        wood: "#655947",
        fig: "#1E002B",
        /** functional */
        snow: "#FFFFFF",
        onyx: "#000000",
        success: "#329F3B",
        error: "#E70532",
        disabled: "#9B9B9B",
        /** accent */
        sky: "#7CC0FF",
        citrus: "#FF9A51",
        lotus: "#FFA3EB",
        lavender: "#B490FF",
      },
      boxShadow: {
        cardShadow: '0px 1.83px 9.149px 0px rgba(229, 28, 68, 0.40)'
      }
    },
  },
  plugins: [],
});
