/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6E8CFB",
        secondary: "#636CCB",
        tertiary: "#3C467B",
        custom_black: "#000000",
      },
    },
  },
  plugins: [],
};
