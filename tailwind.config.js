/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        topNavColor: "#1A202C",
        logo: "#3563E9",
        screenBg: "#F6F7F9",
        btnBg: "#3563E9",
        pickUpText: "#90A3BF",
        iconsCard: "#90A3BF",
        sideNav: "#90A3BF",
        lablelTxt: "#90A3BF",
        inputInerText: "#1A202C",
        rotateLine: "#C3D4E966",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        'sf-pro': ['SF Pro Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
