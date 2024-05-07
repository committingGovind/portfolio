/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-360deg)" },
          "50%": { transform: "rotate(360deg)" },
        },
        animation: {
          wiggle: "wiggle 7s ease-in-out 1",
        },
      },
    },
  },
  plugins: [],
};
