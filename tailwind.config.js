module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      black: colors.black,
      white: colors.white,
    },
  },
};
