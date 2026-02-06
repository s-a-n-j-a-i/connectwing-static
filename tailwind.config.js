/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        cw: {
          navy: "#0f2233",
          cobalt: "#0e7490",
          aqua: "#1d4ed8",
          ink: "#0f2233",
          mist: "#d6e3ea",
          ice: "#eef6f8",
          amber: "#f59e0b",
          berry: "#be185d",
        },
      },
      fontFamily: {
        display: ["Work Sans", "IBM Plex Sans", "sans-serif"],
        body: ["Work Sans", "IBM Plex Sans", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 46px rgba(15, 34, 51, 0.14)",
        lift: "0 30px 72px rgba(12, 25, 38, 0.28)",
      },
    },
  },
  plugins: [],
};
