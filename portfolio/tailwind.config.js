/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D1D1D", // Dark background
        secondary: "#6C63FF", // Vibrant purple for accents/buttons
        tertiary: "#E2E2E2", // Light gray for text
        slate: {
          10: "#f1f3f4", // Subtle gray background for cards
        },
        green: {
          50: "#30AF5B", // Bright green for buttons
          90: "#1E2A24", // Dark green for backgrounds
        },
        gray: {
          10: "#333333", // Slightly lighter dark gray for elements
          20: "#777777", // Medium gray for text/icons
          30: "#B3B3B3", // Light gray for secondary text
          50: "#1A1A1A", // Dark gray for deep backgrounds
          90: "#0E0E0E", // Near-black background
        },
      },
      screens: {
        xs: "360px", // Mobile screens
        "3xl": "1680px", // Large desktops
        "4xl": "2200px", // Ultra-wide screens
      },
      maxWidth: {
        "10xl": "1700px", // Wide containers
      },
      borderRadius: {
        "5xl": "40px", // Large UI elements
      },
    },
  },
  plugins: [],
};
