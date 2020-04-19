import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Resume from "../components/globals/resume"

const second = () => (
  <div className="container">
    <Layout>
      <SEO title="Resume" />
      <Resume />
    </Layout>
  </div>
)

export default second

{
  /* <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout> */
}
