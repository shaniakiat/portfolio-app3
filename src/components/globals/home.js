import React from "react"
import "../styles/home.css"

const Home = () => (
  <section className="hero">
    <div className="main-message">
      <p>
        Hello!<span role="img">👋</span>
        <br />
        <br />
        I'm <strong>Shania Kiat</strong>, an undergraduate student at La Salle
        University majoring in computer science & minoring in mathematics
        <span role="img">👩🏻‍💻</span>
        <br />
        <br />
      </p>
      <a
        className="resume-home"
        href="https://shaniakiat.dev/resume.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        shania.resume.pdf();
      </a>
    </div>
  </section>
)

export default Home
