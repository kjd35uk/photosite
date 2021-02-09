import React from 'react'
import { Link } from 'gatsby'
import '../css/page.css'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Page = ({ data, albumName, seoTitle }) => (
  <Layout>
    <SEO title={seoTitle} />
    <div className='albumContainer'>
      <div className='album-name'>{albumName}</div>
      <div className='album-pics'>
        {data.images.edges.map(image => {
          const name = image.node.name
          const title = name.replace(/_/g, ' ').split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
          return (
            <div key={image.node.name}>
              <Img alt='' fluid={image.node.childImageSharp.fluid} />
              {/* name of individual pic file */}
              <p>{title}</p>
            </div>
          )
        })}
      </div>
    </div>
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
)

export default Page
