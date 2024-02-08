/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      tangerine: '#f78811',
      background: 'rgb(var(--background) / <alpha-value>)',
      text: 'rgb(var(--text) / <alpha-value>)',
    },
    screens: {
      xs: '325px',
      ...defaultTheme.screens,
    },
  },
  darkMode: 'class',
  plugins: [],
};
