import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/page'

const ManchesterStreetMay2019 = ({ data }) => (
  <Page data={data} albumName='Manchester 2019' seoTitle='Manchester Black And White Street Photography' />
)

export const query = graphql`
query allManchesterImgs {
  images: allFile(
    sort: { order: ASC, fields: [absolutePath] }
    filter: { relativePath: { regex: "/manchester/.*.JPG/" } }
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

export default ManchesterStreetMay2019
