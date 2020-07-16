import React from "react"
import "../styles/project.css"
import VirtualChef from "../../../static/images/virtualchef2.png"
import Gratis from "../../../static/images/gratis2.png"
import Portfolio from "../../../static/images/v2.png"

import { ThemeToggler } from "gatsby-plugin-dark-mode"

const Project = () => (
  <>
    <header>
      <div className="container">
        <nav className="project-nav">
          <div className="logo">
            <a href="/">SK</a>
          </div>

          {/* <div className="nav-tem">
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </div> */}

          <div>
            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <label className="switch">
                  <input
                    type="checkbox"
                    onChange={e =>
                      toggleTheme(e.target.checked ? "dark" : "light")
                    }
                    checked={theme === "dark"}
                  />
                  {theme === "dark" ? (
                    <span className="slider round"></span>
                  ) : (
                    <span className="slider round"></span>
                  )}
                </label>
              )}
            </ThemeToggler>
          </div>
        </nav>
      </div>
    </header>
    <section className="hero">
      <div className="container">
        <h1 className="project-h1">Featured Projects</h1>
        <div className="grid">
          <div className="left-content">
            <a
              href="https://www.virtualchef.live"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={VirtualChef} className="project-img" alt=""></img>
            </a>
          </div>
          <div className="right-content">
            <a
              href="https://www.virtualchef.live"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Virtual Chef</h3>
            </a>

            <p className="project-p">
              Full-stack web application that suggests new foods using neural
              networks.
            </p>
          </div>
        </div>
        <div className="grid">
          <div className="left-content">
            <a
              href="https://shaniakiat.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Portfolio} className="project-img" alt=""></img>
            </a>
          </div>
          <div className="right-content">
            <a
              href="https://shaniakiat.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Personal Website V2 </h3>
            </a>
            <p className="project-p">
              Second iteration of my personal website built with Gatsby and
              hosted on Netlify.
            </p>
          </div>
        </div>
        <div className="grid">
          <div className="left-content">
            <a
              href="https://devpost.com/software/gratis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Gratis} className="project-img" alt=""></img>
            </a>
          </div>
          <div className="right-content">
            <a
              href="https://devpost.com/software/gratis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Gratis </h3>
            </a>
            <p className="project-p">
              Gratis helps connect local Philadelphia restaurants with surplus
              food to shelters in the area to provide food for those in need.
              <br />
              🏆 HackWCU 🏆
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Project

// < ul className = "nav-list active" >
//   <li className="nav-item">
//     <a href="/" className="nav-link current">
//       HOME
//             </a>
//   </li>
//   <li className="nav-item">
