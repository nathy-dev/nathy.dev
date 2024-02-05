/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      forest: {
        100: '#afb38c',
        300: '#606c38',
        500: '#445128',
        700: '#283618',
        900: '#1c2711',
      },
      wood: {
        100: '#fefae0',
        300: '#eece9f',
        500: '#dda15e',
        700: '#cd8742',
        900: '#bc6c25',
      },
      tangerine: '#f78811',
      background: 'rgb(var(--background) / <alpha-value>)',
    },
  },
  darkMode: 'class',
  plugins: [],
};
