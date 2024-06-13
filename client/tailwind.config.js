/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f6c6f8",
        secondary: "#b811bf",
      }
    },
  },
  plugins: [],
}

