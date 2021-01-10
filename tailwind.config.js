module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.njk"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: {
        pure: '#ffffff',
        DEFAULT: '#fefff6'
      },
      black: {
        DEFAULT: '#111827',
      },
      yellow: {
        '50':  '#f9f7ea',
        '100': '#f9f3c6',
        '200': '#f5eb83',
        '300': '#ffea4d',
        '400': '#e1be13',
        '500': '#d49f06',
        '600': '#ba7b04',
        '700': '#965d07',
        '800': '#76480c',
        '900': '#5e390e',
      },
    },
    fontFamily: {
      sans: ['Raleway', 'serif'],
      title: ['peacesans-regular', 'serif'],
    },
    extend: {
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'),],
};
