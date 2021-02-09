import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/page'

const Luxembourg2018 = ({ data }) => (
  <Page data={data} albumName='Luxembourg 2018' seoTitle='Luxembourg Black And White Travel Photography' />
)

export const query = graphql`
query allLuxembourgImgs {
  images: allFile(
    sort: { order: ASC, fields: [absolutePath] }
    filter: { relativePath: { regex: "/luxembourg/.*.JPG/" } }
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

export default Luxembourg2018
