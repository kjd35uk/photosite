import React from 'react'
import { Link } from 'gatsby'
import '../css/albumPics.css'
import Img from 'gatsby-image'

const AlbumPics = ({ data }) => (
  data.images.edges.map(image => {
    const name = image.node.name
    const link = name.replace(/_/g, '-')
    const title = name.replace(/_/g, ' ').split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
    return (
      <div key={image.node.name}>
        <Img alt='' fluid={image.node.childImageSharp.fluid} />
        <div className='albumTitleContainer'>
          <Link className='albumTitleLink' to={`/${link}`}>
            <div className='albumTitle'>{title}</div>
          </Link>
        </div>
      </div>
    )
  })
)

export default AlbumPics
