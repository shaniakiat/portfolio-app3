import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Resume from "../components/globals/resume"

const second = () => (
  <Layout>
    <div className="container">
      <SEO title="Resume" />
      <Resume />
    </div>
  </Layout>
)

export default second
