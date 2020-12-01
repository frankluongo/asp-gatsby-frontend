const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const Gallery = path.resolve("./src/templates/Gallery.js")
  const Collection = path.resolve("./src/templates/Collection.js")
  const pageBuilder = buildPage.bind(null, createPage)
  const collections = await graphql(`
    {
      allSanityCollection {
        edges {
          node {
            slug {
              current
            }
            id
          }
        }
      }
    }
  `)
  const galleries = await graphql(`
    {
      allSanityGallery {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (collections.errors)
    return reporter.panicOnBuild(`Error while running GraphQL query.`)

  const Collections = collections.data.allSanityCollection.edges
  const Galleries = galleries.data.allSanityGallery.edges

  Collections.forEach(collection =>
    pageBuilder({
      path: `/${collection.node.slug.current}`,
      component: Collection,
      context: { id: collection.node.id },
    })
  )
  Galleries.forEach(gallery =>
    pageBuilder({
      path: `/${gallery.node.slug.current}`,
      component: Gallery,
      context: { id: gallery.node.id },
    })
  )
}

function buildPage(createPage, { path, component, context }) {
  createPage({ path, component, context })
}
