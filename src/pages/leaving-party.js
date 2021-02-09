import React from "react";
import { graphql } from 'gatsby'
import Page from '../components/page'

const LeavingParty = ({ data }) => (
  <Page data={data} albumName='Leaving Party 2019' seoTitle='Black And White Event Photography' />
)

export const query = graphql`
query allLeavingPartyImgs {
  images: allFile(
    sort: { order: ASC, fields: [absolutePath] }
    filter: { relativePath: { regex: "/leaving_party/.*.JPG/" } }
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
`;

export default LeavingParty
