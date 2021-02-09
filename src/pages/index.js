import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import AlbumLinks from "../components/albumLinks"
import AlbumPics from "../components/albumPics"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`kirstie`, `davidson`, `photography`, `street photography`, `portrait photography`, `black and white`,  `travel photography`, `kirstie davidson photos`]} />
    <div className="main-div">
      <div className="album">
        <div className="album-links">
          <AlbumLinks />
        </div>
        <div className="album-pics-home">
          <AlbumPics data={data} />
        </div>
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
