import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'


import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`kirstie`, `davidson`, `photography`, `street photography`, `portrait photography`, `black and white`]} />
    <div className="main-div">
      <div className="album-links">
        <ul className="album-links-list">
          <li><Link to="/fujian-2017">Fujian 2017</Link></li>
          <li><Link to="/margarita-rumble-2019">Margarita Rumble 2019</Link></li>
          <li><Link to="/portraits">Portraits</Link></li>
          <li><Link to="/malta-2016">Malta 2017</Link></li>
          <li><Link to="/manchester">Manchester Street Photography</Link></li>
        </ul>
      </div>
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
    {/* <Link to="/fujian-2017">Fujian 2017</Link>
    <Link to="/margarita-rumble-2019">Margarita Rumble 2019</Link>
    <Link to="/portraits">Portraits</Link>
    <Link to="/malta-2016">Malta 2017</Link>
    <Link to="/manchester">Manchester Street Photography</Link> */}
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
