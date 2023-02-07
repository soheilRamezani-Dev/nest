/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    minWidth:{'30':'30%','100px':'120px'},
    extend: {
      maxWidth:{'8xl':'1580px'}
    },
  },
  plugins: [],
};
