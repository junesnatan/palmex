/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palm: {
          950: '#04170d',
          900: '#072415',
          850: '#0a2e1b',
          800: '#0d3822',
          700: '#155333',
          600: '#1b6b42',
          500: '#228653',
          400: '#34a36a',
          300: '#5dc08a',
          200: '#99e0b8',
          100: '#d1f4e1',
          50: '#f0faf4',
        },
        gold: {
          600: '#b47814',
          500: '#c88718',
          400: '#e5a528',
        },
        surface: {
          light: '#f8faf7',
          card: '#ffffff',
          dark: '#072415',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
