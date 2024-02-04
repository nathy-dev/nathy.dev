/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      ghoul: {
        100: '#b492d3',
        300: '#9e7ac0',
        500: '#8862ac',
        700: '#6a4b86',
        900: '#4b3460',
      },
      licorice: '#0a0312',
      lilac: '#be7bf9',
      ash: {
        500: '#b4bcae',
      },
      forest: {
        100: '#AFB38C',
        300: '#606c38',
        700: '#283618',
      },
      wood: {
        100: '#fefae0',
        500: '#dda15e',
        900: '#bc6c25',
      },
    },
  },
  plugins: [],
};
