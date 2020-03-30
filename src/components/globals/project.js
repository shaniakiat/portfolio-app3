import React from "react"
import "../styles/project.css"
import VirtualChef from "../../../static/images/virtualchef2.png"
import Gratis from "../../../static/images/gratis2.png"

const Project = () => (
  <section class="hero">
    <div className="container">
      <h1 className="project-h1">Featured Projects</h1>
      <div className="grid">
        <div className="left-content">
          <img src={VirtualChef} className="project-img"></img>
        </div>
        <div className="right-content">
          <h3>Virtual Chef</h3>
          <p className="project-p">
            Full-stack web application that suggests new foods using neural
            networks
          </p>
        </div>
      </div>
      <div className="grid">
        <div className="left-content">
          <img src={Gratis} className="project-img"></img>
        </div>
        <div className="right-content">
          <h3>Gratis</h3>
          <p className="project-p">
            Gratis helps connect local Philadelphia restaurants with surplus
            food to shelters in the area to provide food for those in need.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Project
