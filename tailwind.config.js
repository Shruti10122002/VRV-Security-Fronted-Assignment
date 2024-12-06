/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Specify content files
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto"', "Arial", "sans-serif"], // Custom sans font
        serif: ['"Merriweather"', "serif"], // Custom serif font (optional)
      },
    },
  },
  plugins: [],
};
