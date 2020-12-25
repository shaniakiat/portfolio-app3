import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Home from "../components/globals/home"
import Experience from "../components/globals/experience"
import Project from "../components/globals/project"
import Contact from "../components/globals/contact"

import "../components/styles/layout.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Shania A. Kiat" />
    <Home />
    <Experience />
    <Project />
    <Contact />
  </Layout>
)

export default IndexPage
