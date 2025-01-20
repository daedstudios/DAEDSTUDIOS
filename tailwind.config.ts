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
        slideLeftToRight: "moveFromLeftToRight 9s linear infinite",
        slideRightToLeft: "moveFromRightToLeft 9s linear infinite",
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
