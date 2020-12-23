import { Link } from "gatsby"
import React, { Component } from "react"
import { FiX } from "react-icons/fi"
import { FiMenu } from "react-icons/fi"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import "../styles/header.css"

export default class Header extends Component {
  state = {
    navbarOpen: false,
    css: "nav-list",
  }
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "nav-list" })
      : this.setState({
          navbarOpen: true,
          css: "nav-list active",
        })
  }
  render() {
    return (
      <header>
        <div className="header">
          <nav>
            <div className="logo">
              <a href="/">Shania Kiat</a>
            </div>

            <div className="open" onClick={this.navbarHandler}>
              <i>
                <FiMenu className="FiMenu" />
              </i>
            </div>

            <ul className={this.state.css}>
              <li className="nav-item">
                <div className="close" onClick={this.navbarHandler}>
                  <i>
                    <FiX className="FiX" />
                  </i>
                </div>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link current">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <Link to="/#project" className="nav-link">
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <a href="/#contact" className="nav-link">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <Link to="/resume" className="nav-link">
                  Resume
                </Link>
              </li>

              <li className="nav-item">
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
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
