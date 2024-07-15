const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        lighterGray: '#F1F1F1',
        lightGray: '#E3E3E3',
        gray: '#ADADAD',
        darkGray: '#808080',
        darkerGray: '#575757',
        darkestGray: '#282828',
        black:'#000000',
        // light colors
        blue:{
          100: "#46A3FF",
          200: "#2475C5",
          300: "#212835",
          400: "#12161F",
          500: "#0C1017"
        },
        yellow: "#FFB048",        
        green:{
          100:"#00C096",
          200: "#00A682"
        },
        red: {
          100:"#FF827E",
          200:"#E45651"
        },

      },
      fontFamily:{
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
