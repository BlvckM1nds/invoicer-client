/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      print: { raw: 'print' }
    },
    extend: {
      colors: {
        dark: "#333333",
        blue: "#0C2F54",
        'black-2-opacity': "rgba(0, 0, 0, 0.02)",
        'black-1-opacity': "rgba(0, 0, 0, 0.1)"
      },
      gridTemplateColumns: {
        'custom': '72% 28%',
      },
    },
  },
  plugins: [],
}