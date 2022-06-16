// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  content: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: "#3182ce",
          700: "#2b6cb0"
        }
      }
    },
    fontFamily: {
      'sans': ['Inter', 'system-ui', '-apple-system', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif']
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  // plugins: [require("@tailwindcss/custom-forms")],
};
