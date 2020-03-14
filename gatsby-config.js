module.exports = {
  siteMetadata: {
    title: `We The Church`,
    description: `A house church in Kitchener-Waterloo`,
    siteUrl: "https://wethechurch.ca",
    author: `@adrw`
  },
  plugins: [
    {
      resolve: "@westegg/gatsby-theme-core",
      options: {
        mdx: true,
        mdxLayouts: {
          default: require.resolve("./src/components/layout.js")
        },
        mdxShowToc: false
      }
    },
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "2",
        matomoUrl: "https://matomo.adrw.xyz",
        siteUrl: "https://wethechurch.ca"
      }
    }
  ]
}
