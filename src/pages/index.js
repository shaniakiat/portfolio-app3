import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/globals/header"
import Home from "../components/globals/home"
import About from "../components/globals/about"
import Contact from "../components/globals/contact"

import "../components/styles/layout.css"

const IndexPage = () => (
  <div className="container">
    <Layout>
      <SEO title="Home" />
      <Header />
      <Home />
      <About />
      <Contact />
    </Layout>
  </div>
)

export default IndexPage
