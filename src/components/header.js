import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div
      style={{
        margin: `0`,
        padding: `1rem 1.0875rem`,
        display: 'flex'
      }}
    >
      <h1 style={{ margin: 0, width: `100%`, display: `flex` }}>
        <Link
          to="/"
          className="heading-link"
        >
        <img alt="" src="./logo.png" width="120" height="120" style={{
            margin: `0 1rem -15px auto`,
        }}/>
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div style={{ backgroundColor: '#ff7b14', height: `0.5rem` }}></div>
    <div style={{ backgroundColor: 'white', height: `2rem` }}></div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
