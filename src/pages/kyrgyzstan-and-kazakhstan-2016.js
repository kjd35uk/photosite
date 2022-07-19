import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Kyrgyzstan_And_Kazakhstan_2016 = ({ data }) => (
  <Layout>
    <SEO title="Kyrgyzstan And Kazakhstan 2016 Black and White Protography" />
    <div className="main-div">
      <div className="album-name">Kyrgyzstan And Kazakhstan 2016</div>
        <div className="album-pics">
          {data.images.edges.map( image => {
            const name = image.node.name
            const title = name.replace(/_/g, " ").split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
            return (
              <div key={image.node.name}>
                <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} alt="" />
                <p>{title}</p>
              </div>
            );
          })}
        </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`query allKyrgyzstanAndKazakhstanImgs {
  images: allFile(
    sort: {order: ASC, fields: [absolutePath]}
    filter: {relativePath: {regex: "/KKs/.*.JPG/"}}
  ) {
    edges {
      node {
        relativePath
        name
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
    }
  }
}
`;

export default Kyrgyzstan_And_Kazakhstan_2016
