const path = require("path") // eslint-disable-line
const Queries = {
  index: {
    query: `
    { 
      cosmicjsPages(slug: { eq: "about-me" }) {
        metadata {
          title
        }
      }
    }
  `,
    path: "/",
    component: path.resolve("src/templates/home.tsx"),
  },
}

module.exports = Queries
