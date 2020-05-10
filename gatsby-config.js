module.exports = {
  siteMetadata: {
    title: `Building Brainiacs`,
    description: `Every child deserves the gift of reading. Our reading specialists turn the sentiment into a reality.`,
    author: `Kyle Soeltz`,
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `building-brainiacs-v2`,
        short_name: `building-brainiacs`,
        start_url: `/`,
        background_color: `#1475a0`,
        theme_color: `#1475a0`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-80375418-1",
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
