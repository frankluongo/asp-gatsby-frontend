import React from "react"
import { graphql } from "gatsby"

import SEO from "@components/seo"
import GalleryPreview from "@components/GalleryPreview"
import { LayoutHorizontal } from "@components/Layout"

export default function Collection({ data }) {
  const { title, galleries } = data.sanityCollection
  return (
    <LayoutHorizontal>
      <SEO title={`${title} | Alicia Stepp Photography`} />
      {galleries.map(gallery => (
        <GalleryPreview key={gallery.id} gallery={gallery} />
      ))}
    </LayoutHorizontal>
  )
}

export const query = graphql`
  query CollectionQuery($id: String) {
    sanityCollection(id: { eq: $id }) {
      title
      galleries {
        cover {
          asset {
            fluid(maxWidth: 1680) {
              ...GatsbySanityImageFluid
            }
          }
        }
        id
        slug {
          current
        }
        thumbnail {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        title
      }
    }
  }
`
