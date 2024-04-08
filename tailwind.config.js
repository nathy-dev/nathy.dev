/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      },
    },
    colors: {
      tangerine: '#f78811',
      ink: '#0e1409',
      scroll: '#fefae0',
      ghoul: '#be7bf9',
      background: 'rgb(var(--background) / <alpha-value>)',
      text: 'rgb(var(--text) / <alpha-value>)',
    },
    screens: {
      xs: '325px',
      ...defaultTheme.screens,
    },
    backgroundImage: {
      brick: "url('../public/floor.png')",
    },
  },
  darkMode: 'class',
  plugins: [],
};
