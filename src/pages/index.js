import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"
import "../components/styles/layout.css"

const IndexPage = () => (
  <div className="container">
    <Layout>
      <SEO title="Home" />
      <Home />
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  </div>
)

export default IndexPage
