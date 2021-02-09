import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/page'

const MargaritaRumble = ({ data }) => (
  <Page data={data} albumName='Margarita Rumble 2019' seoTitle='Black And White Event Photography' />
)

export const query = graphql`
query allMargaritaImgs {
  images: allFile(
    sort: { order: ASC, fields: [absolutePath] }
    filter: { relativePath: { regex: "/margarita/.*.JPG/" } }
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

export default MargaritaRumble
