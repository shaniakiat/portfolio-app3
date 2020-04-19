import React from "react"
import "../styles/home.css"
import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

const Home = () => (
  <section class="hero">
    <div className="container">
      <div className="main-message">
        <p>
          Hello!👋
          <br />
          <br />
          I'm <strong>Shania Kiat</strong>, an undergraduate student at La Salle
          University majoring in computer science & minoring in mathematics👩🏻‍💻
          <br />
          <br />
        </p>
        <a
          className="resume-home"
          href="https://shaniakiat.dev/resume.pdf"
          target="_blank"
        >
          shania.resume.pdf();
        </a>
      </div>
      {/* <div className="icons">
        

        <a href="https://www.linkedin.com/in/shania-kiat" target="_blank">
          <FaLinkedinIn className="icon" />
        </a>
        <a href="https://github.com/shaniakiat" target="_blank">
          <FaGithub className="icon" />
        </a>
      </div> */}
    </div>
  </section>
)

export default Home
