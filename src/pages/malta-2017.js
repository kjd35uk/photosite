import React from "react";
import { Link } from "gatsby";
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Malta = ({ data }) => (
  <Layout>
    <SEO title="Malta Black and White Protography" />
    <div className="main-div">
      <div className="album-name">Malta 2017</div>
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
`;

export default Malta
