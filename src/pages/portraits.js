import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/page'

const Portraits = ({ data }) => (
  <Page data={data} albumName='Portraits' seoTitle='Black And White Portrait Photography' />
)

export const query = graphql`
query allPortraitImgs {
  images: allFile(
    filter: { relativePath: { regex: "/portraits/.*./" } }
    ) {
      edges{
        node{
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 2700, maxHeight: 4000, quality:90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  }
}
`

export default Portraits
