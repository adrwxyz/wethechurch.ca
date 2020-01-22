module.exports = {
  siteMetadata: {
    title: `Westegg Gatsby Theme Core Starter`,
    description: `A slim, trim, MDX powered, Gatsby starter with CI and automatic updates`,
    siteUrl: "https://adrw.xyz",
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
    }
  ]
}
