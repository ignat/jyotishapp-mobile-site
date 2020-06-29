// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'system-ui', '-apple-system', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif']
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  // plugins: [require("@tailwindcss/custom-forms")],
};
