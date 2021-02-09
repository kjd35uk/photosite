import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/page'

const Fujian = ({ data }) => (
  <Page data={data} albumName='Fujian 2017' seoTitle='Fujian China Black And White Photography' />
)

export const query = graphql`
query allImgs {
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

export default Fujian
