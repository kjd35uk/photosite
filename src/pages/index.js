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
          <li className="album-links-list-title">Travel</li>
          <li className="album-links-list-item"><Link to="/kyrgyzstan-and-kazakhstan-2016">Kazakhstan & Krygyzstan (2016)</Link></li>
          <li className="album-links-list-item"><Link to="/malta-2017">Malta (2017)</Link></li>
          <li className="album-links-list-item"><Link to="/fujian-2017">Fujian (2017)</Link></li>
          <li className="album-links-list-item"><Link to="/luxembourg-2018">Luxembourg (2018)</Link></li>
          <li className="album-links-list-title">Events</li>
          <li className="album-links-list-item"><Link to="/50th-party">50th Party (2018)</Link></li>
          <li className="album-links-list-item"><Link to="/leaving-party">Leaving Party (2019)</Link></li>
          <li className="album-links-list-item"><Link to="/margarita-rumble-2019">Margarita Rumble (2019)</Link></li>
          <li className="album-links-list-title">Street</li>
          <li className="album-links-list-item"><Link to="/manchester-street-may-2019">Manchester (2019)</Link></li>
          <li className="album-links-list-item"><Link to="/nightlife">Nightlife (2016)</Link></li>
          <li style={{ fontSize: `1.2rem` }}><Link to="/portraits">Portraits</Link></li>
        </ul>
      </div>
      <div className="album-pics" style={{maxWidth: `50%`, marginLeft: `45%`}}>
        {data.images.edges.map( image => {
          const name = image.node.name
          const link = name.replace(/_/g, "-")
          const title = name.replace(/_/g, " ").split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
          return(
            <div key={image.node.name}>
              <Img alt="" fluid={image.node.childImageSharp.fluid}/>
              <div style={{ height: `3rem`, paddingLeft: `1rem`}}>
                <Link style={{color: `white`, fontFamily: `Roboto Mono`}} to={`/${link}`}>{title}</Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </Layout>
)

export const query = graphql`
query allCoverImgs {
  images: allFile(
    sort: { order: ASC, fields: [absolutePath] }
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
