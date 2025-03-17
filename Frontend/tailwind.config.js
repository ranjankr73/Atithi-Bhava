/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#75D3CF',
        'secondary': '#2D9596',
        'accent': '#FF6B6B',
        'accent-light': '#FFE1E1',
        'dark': '#2D3436',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
}