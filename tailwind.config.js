/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        source: ['"Source Sans 3"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
