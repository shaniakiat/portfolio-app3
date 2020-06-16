import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/globals/project"

const second = () => (
  <Layout>
    <div className="container">
      <SEO title="Project" />
      <Project />
    </div>
  </Layout>
)

export default second
