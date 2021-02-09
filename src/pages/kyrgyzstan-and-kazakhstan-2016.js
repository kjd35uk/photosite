import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/page'

const KyrgyzstanAndKazakhstan2016 = ({ data }) => (
  <Page data={data} albumName='Kyrgyzstan And Kazakhstan 2016' seoTitle='Kyrgyzstan And Kazakhstan Black And White Travel Photography' />
)

export const query = graphql`
query allKyrgyzstanAndKazakhstanImgs {
  images: allFile(
    sort: { order: ASC, fields: [absolutePath] }
    filter: { relativePath: { regex: "/KKs/.*.JPG/" } }
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

export default KyrgyzstanAndKazakhstan2016
