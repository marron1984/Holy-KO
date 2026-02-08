import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sage: {
          50: "#f0f4ef",
          100: "#dce5da",
          200: "#b9ccb5",
          300: "#8fad89",
          400: "#6b8f64",
          500: "#4B6344",
          600: "#3d5138",
          700: "#2f3f2b",
          800: "#222d1f",
          900: "#141b12",
        },
        beige: {
          50: "#fdfdf8",
          100: "#F5F5DC",
          200: "#ededc8",
          300: "#e0e0a8",
        },
        gold: {
          50: "#faf6e8",
          100: "#f0e6c0",
          200: "#e5d498",
          300: "#D4AF37",
          400: "#c09b20",
          500: "#a3831a",
          600: "#856b15",
        },
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', "serif"],
        sans: ['"Noto Sans JP"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
