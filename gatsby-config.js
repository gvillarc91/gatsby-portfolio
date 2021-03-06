require("dotenv").config()
const COSMIC_SLUG = process.env.COSMIC_BUCKET_SLUG
const COSMIC_KEY = process.env.COSMIC_READ_KEY

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-env-variables",
      options: {
        whitelist: ["COSMIC_READ_KEY", "COSMIC_BUCKET_SLUG"],
      },
    },
    {
      resolve: `gatsby-source-cosmicjs`,
      options: {
        bucketSlug: COSMIC_SLUG,
        objectTypes: [
          `pages`,
          `people`,
          `services`,
          `projects`,
          `settings`,
          `connects`,
          `skills`,
          `clients`,
          `contacts`,
        ],
        apiAccess: {
          read_key: COSMIC_KEY,
        },
        localMedia: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
