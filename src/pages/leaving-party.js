import React from "react";
import { Link } from "gatsby";
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const LeavingParty = ({ data }) => (
  <Layout>
    <SEO title="Party Black and White Protography" />
    <div className="main-div">
      <div className="album-name">Leaving Party 2019</div>
        <div className="album-pics">
          {data.images.edges.map( image => {
            const name = image.node.name
            const title = name.replace(/_/g, " ").split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
            return(
              <div key={image.node.name}>
                <Img alt="" fluid={image.node.childImageSharp.fluid}/>
                <p>{title}</p>
              </div>
            )
          })}
        </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
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