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
      },
      colors: {
        ...colors,
        primary: "#000000",
        hover: "#FF6200",
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
