import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Home from "../components/globals/home"
import About from "../components/globals/about"
import Project from "../components/globals/project"
import Contact from "../components/globals/contact"

import "../components/styles/layout.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Shania A. Kiat" />
    <Home />
    <About />
    <Project />
    <Contact />
  </Layout>
)

export default IndexPage
