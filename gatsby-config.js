module.exports = {
  siteMetadata: {
    title: `Shania Kiat`,
    description: `I am an Application Engineer at Vanguard. I recently graduated with my computer science degree from La Salle University. I’m passionate about delivering high performance and intuitive design of web application to the users.`,
    author: `@shaniakiat`,
    url: "https://www.shaniakiat.dev", // No trailing slash allowed!
    image: "static/images/v3.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/data`,
        ignore: [`**/\.*`],
      },
    },
    `gatsby-transformer-sharp`,
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
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-dark-mode",
  ],
}
