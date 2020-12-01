import { graphql, useStaticQuery } from "gatsby"

export function useSiteData() {
  const data = useStaticQuery(graphql`
    query {
      settings: sanitySetting(
        id: { eq: "-4bfbe670-8b2c-5753-8b7a-e4df3fcf79e4" }
      ) {
        phoneNumber
        primaryNav {
          ... on SanityCollection {
            id
            title
            slug {
              current
            }
          }
          ... on SanityGallery {
            id
            title
            slug {
              current
            }
          }
          ... on SanityLink {
            id
            text
            url
          }
          ... on SanityPage {
            id
            title
            slug {
              current
            }
          }
        }
        secondaryNav {
          ... on SanityCollection {
            id
            title
            slug {
              current
            }
          }
          ... on SanityGallery {
            id
            title
            slug {
              current
            }
          }
          ... on SanityLink {
            id
            text
            url
          }
          ... on SanityPage {
            id
            title
            slug {
              current
            }
          }
        }
        title
        instagramUrl
        instagramHandle
        emailAddress
      }
    }
  `)
  const { settings } = data
  return settings
}
