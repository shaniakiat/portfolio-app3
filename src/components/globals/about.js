import React from "react"
import "../styles/about.css"

const About = () => (
  <section class="hero">
    <div id="about" className="container">
      <h1>About Me</h1>

      <p>
        I'm a senior at{" "}
        <a href="https://lasalle.edu" className="link-p">
          La Salle University
        </a>{" "}
        in Philadelphia, studying computer science and mathematics.
        <br />
        <br />
        I'm currently doing my internship at{" "}
        <a
          href="https://investor.vanguard.com/corporate-portal/"
          className="link-p"
        >
          Vanguard
        </a>{" "}
        as a Application Development Intern. Previously, I had internship as a
        Predictive Analytics Intern at Tegra Analytics and Summer Undergraduate
        Research at La Salle.
        <br />
        <br />
        My career goals include becoming a software engineer and working for a
        product or tool I believe in while giving a positive impact on the world
        through my work and interactions with others.
        <br />
        <br />
        On campus, I am the secretary and public relations for La Salle’s
        Mathematical Assoc. of America. I am also involved in La Salle’s
        Association for Computing Machinery and Programming Team. In Spring
        2019, I attended my first hackathon,{" "}
        <a href="https://hackwcu.org/" className="link-p">
          HackWCU
        </a>
        , where my team won first place🏆.
        <br />
        <br />
        My past involvement outside La Salle includes my role as the Creative
        Director of{" "}
        <a
          href="https://www.linkedin.com/company/permias-philadelphia"
          className="link-p"
        >
          PERMIAS
        </a>{" "}
        (Persatuan Mahasiswa Indonesia di Amerika Serikat) or the Indonesian
        Students' Association in America.
        <br />
        <br />
        Aside from computer science, technology, and mathematics, I enjoy
        design, photography, and baking.
      </p>
    </div>
  </section>
)

export default About
