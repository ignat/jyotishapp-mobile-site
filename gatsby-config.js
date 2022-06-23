const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Jyotish Computer`,
    description: `Jyotish Computer - Vedic Astrology for Everyone`,
    author: `@ignat`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.blue["400"],
        display: `minimal-ui`,
        icon: `src/images/jyotishapp-icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NFQC9TN",
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
  ],
};
