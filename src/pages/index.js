import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'


import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <h1>Hi people</h1> */}
    <div style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
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
    <Link to="/fujian-2017">Fujian 2017</Link>
    <Link to="/margarita-rumble-2019">Margarita Rumble 2019</Link>
    <Link to="/portraits">Portraits</Link>
    <Link to="/malta-2016">Malta 2017</Link>
    <Link to="/manchester">Manchester Street Photography</Link>
  </Layout>
)

export const query = graphql`
query allCoverImgs {
  images: allFile(
    filter: { relativePath: { regex: "/coverphotos/.*.jpg/" } }
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
export default IndexPage
