module.exports = {
  siteMetadata: {
    title: `Chris Harley | Portfolio`,
    description: `Portfolio of Front End Developer/Visual designer Chris Harley`,
    author: 'Chris Harley',
    siteUrl: `https://chrisharley.io/`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
      },
    },
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
        name: `Chris Harley Portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#F0EBE3`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#F0EBE3`,
        display: `minimal-ui`,
        icon: `src/images/ch-favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
