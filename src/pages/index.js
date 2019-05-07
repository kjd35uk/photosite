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
    <h1>Hi people</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    {/* const fluid = data.images.edges[0].node.childImageSharp.fluid */}
    <Img alt="" fluid={data.images.edges[1].node.childImageSharp.fluid}/>
      {/* <Image /> */}
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
            fluid(maxWidth: 9300, maxHeight: 5860, quality:90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  }
}
`;
export default IndexPage
