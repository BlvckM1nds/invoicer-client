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
        dark: "#535b61",
        blue: "#0c2f54",
        'black-2-opacity': "rgba(0, 0, 0, 0.02)",
        'black-1-opacity': "rgba(0, 0, 0, 0.1)"
      },
      gridTemplateColumns: {
        'custom-80-20': '80% 20%',
      },
    },
  },
  plugins: [],
}