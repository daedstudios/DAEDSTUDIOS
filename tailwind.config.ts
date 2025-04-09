import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--custom)"],
        mono: ["var(--custom-two)"],
      },
      colors: {
        ...colors,
        primary: "#000000",
        hover: "#FF6200",
      },

      keyframes: {
        floatCircle: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(45px, -45px)" },
          "50%": { transform: "translate(0px, -45px)" },
          "75%": { transform: "translate(-45px, -45px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        moveFromLeftToRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        moveFromRightToLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },

      animation: {
        floatCircle: "floatCircle 6s ease-in-out infinite",
        slideLeftToRight: "moveFromLeftToRight 9s linear infinite",
        slideRightToLeft: "moveFromRightToLeft 9s linear infinite",
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
