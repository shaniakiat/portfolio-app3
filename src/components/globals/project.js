import { Link } from "gatsby"
import React from "react"
import "../styles/project.css"
import VirtualChef from "../../../static/images/virtualchef2.png"
import Gratis from "../../../static/images/gratis2.png"
import { FaHome } from "react-icons/fa"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const Project = () => (
  <>
    <header>
      <div className="container">
        <nav className="project-nav">
          <div className="logo">
            <a href="/">SK.</a>
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
                    <span class="slider round"></span>
                  ) : (
                    <span class="slider round"></span>
                  )}
                </label>
              )}
            </ThemeToggler>
          </div>
        </nav>
      </div>
    </header>
    <section class="hero">
      <div className="container">
        <h1 className="project-h1">Featured Projects</h1>
        <div className="grid">
          <div className="left-content">
            <a href="https://www.virtualchef.live" target="_blank">
              <img src={VirtualChef} className="project-img"></img>
            </a>
          </div>
          <div className="right-content">
            <a href="https://www.virtualchef.live" target="_blank">
              <h3>Virtual Chef</h3>
            </a>

            <p className="project-p">
              Full-stack web application that suggests new foods using neural
              networks
            </p>
          </div>
        </div>
        <div className="grid">
          <div className="left-content">
            <a href="https://devpost.com/software/gratis" target="_blank">
              <img src={Gratis} className="project-img"></img>
            </a>
          </div>
          <div className="right-content">
            <a href="https://devpost.com/software/gratis" target="_blank">
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
