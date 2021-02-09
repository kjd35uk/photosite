import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/page'

const Malta = ({ data }) => (
  <Page data={data} albumName='Malta 2017' seoTitle='Malta Black And White Travel Photography' />
)

export const query = graphql`
query allMaltaImgs {
  images: allFile(
    sort: { order: ASC, fields: [absolutePath] }
    filter: { relativePath: { regex: "/malta/.*.jpg/" } }
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

export default Malta
