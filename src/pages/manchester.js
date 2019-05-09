import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Manchester = () => (
  <Layout>
    <SEO title="Manchester street photos" />
    <p>Welcome to Manchester Street Photography</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Manchester
