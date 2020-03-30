import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/globals/home"
import About from "../components/globals/about"
import Header from "../components/globals/header"
import "../components/styles/layout.css"

const IndexPage = () => (
  <div className="container">
    <Layout>
      <SEO title="Home" />
      <Header />
      <Home />
      <About />
    </Layout>
  </div>
)

export default IndexPage
