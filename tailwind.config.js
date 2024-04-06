/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        primary: '#8bc5bf',
        secondary: '#edc1c9',
        accent: '#b7dbd8',
        card: '#232323',
      },
    },
  },
  plugins: [],
};