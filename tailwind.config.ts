import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        english: ["Inter", "sans-serif"],
        arabic: ["Cairo", "Noto Kufi Arabic", "ui-sans-serif", "system-ui"],
        sans: ["sans-serif", "SF Pro"],
      },
      colors: {
        primary: {
          lighter: "#82c9e5",
          light: "#62a2d2",
          DEFAULT: "#4c77b7",
          dark: "#36527a",
          darker: "#22354f",
        },
        grey: {
          lighter: "#f6f3f4",
          light: "#ebe6e7",
          DEFAULT: "#6a7282",
          dark: "#364153",
          darker: "#1e2939",
        },
      },
    },
  },
};
export default config;
