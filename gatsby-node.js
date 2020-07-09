const Builds = require("./builds") // eslint-disable-line

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const queryIndex = await graphql(Builds.index.query);

  createPage({
    path: Builds.index.path,
    component: Builds.index.component,
    context: {
      data: queryIndex.data
    }
  });
}
