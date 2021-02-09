import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/page'

const FiftiethParty = ({ data }) => (
  <Page data={data} albumName='50th Birthday' seoTitle='Black And White Event Photography' />
)

export const query = graphql`
query FiftiethPartyImgs {
  images: allFile(
    sort: { order: ASC, fields: [absolutePath] }
    filter: { relativePath: { regex: "/fujian/.*./" } }
    ) {
      edges{
        node{
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 4000, maxHeight: 2700, quality:90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  }
}
`

export default FiftiethParty
