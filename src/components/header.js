import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import '../css/header.css'

const Header = ({ siteTitle }) => (
  <header className='header'>
    <div className='titleContainer'>
      <h1 style={{ margin: 0, width: '100%', display: 'flex' }}>
        <Link
          to='/'
          className='heading-link'
        >
          <img className='logo' alt='' src='./logo_clear.png' width='120' height='120' />
          <div className='title'>{siteTitle}</div>
        </Link>
      </h1>
    </div>
    <div className='headerStripe' />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
