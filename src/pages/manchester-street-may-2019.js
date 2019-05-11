import React from "react";
import { Link } from "gatsby";
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Manchester_Street_May_2019 = ({ data }) => (
  <Layout>
    <SEO title="Manchester Street Photography and Portraits" />
    <div className="main-div">
      <div className="album-name">Manchester Street, May 2019</div>
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
`;

export default Manchester_Street_May_2019;
