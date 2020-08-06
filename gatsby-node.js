exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/flower/)) {
    page.matchPath = "/flower/*"
    createPage(page)
  }
}
