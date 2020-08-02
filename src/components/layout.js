import React from "react"
import PropTypes from "prop-types"

import "./styles/layout.css"
import "./styles/switch.css"

import Header from "./globals/header"
import Footer from "./globals/footer"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
