/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "50px",
    },
    extend: {
      colors: {
        primary: "#F55050",
        dark: "#0f172a",
        green: "#658864",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};