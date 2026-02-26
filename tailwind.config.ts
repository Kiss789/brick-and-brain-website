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
        primary: {
          DEFAULT: "#1e40af", // Dark blue
          light: "#3b82f6",
          dark: "#1e3a8a",
        },
        secondary: {
          DEFAULT: "#059669", // Emerald green
          light: "#10b981",
          dark: "#047857",
        },
        accent: {
          DEFAULT: "#f59e0b", // Amber/orange
          light: "#fbbf24",
          dark: "#d97706",
        },
        background: "#F5F9FF",
        foreground: "#1f2937",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
