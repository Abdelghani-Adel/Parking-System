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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#00222C",
        },
        accent: {
          lighter: "#62a2d2",
          light: "#82c9e5",
          DEFAULT: "#4c77b7",
          dark: "#36527a",
        },
        warning: {
          DEFAULT: "#ECF494",
        },
        error: {
          DEFAULT: "#D00000",
        },
        success: {
          DEFAULT: "#38B000",
        },
        customGray: {
          light: "#e5e7eb",
          DEFAULT: "#808080",
        },
      },
    },
  },
};
export default config;
