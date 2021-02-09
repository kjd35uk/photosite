import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/page'

const Nightlife = ({ data }) => (
  <Page data={data} albumName='Nightlife 2016' seoTitle='Black And White Street Night Photography' />
)

export const query = graphql`
query allNightlifeImgs {
  images: allFile(
    sort: { order: ASC, fields: [absolutePath] }
    filter: { relativePath: { regex: "/nightlife/.*.jpg/" } }
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

export default Nightlife
