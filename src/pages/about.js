import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/styles/about.css"
import Fade from "react-reveal/Fade"

const About = () => (
  <Layout>
    <SEO title="Resume" />
    <section className="about" id="about">
      <Fade left>
        <h1 className="title">About Me</h1>
        <p>
          I recently graduated with my computer science degree from{" "}
          <a href="https://lasalle.edu" className="link-p">
            La Salle University
          </a>{" "}
          after completing two internships and one undergraduate research. I'm
          currently working as a Software Engineer at{" "}
          <a href="https://vanguard.com" className="link-p">
            Vanguard.
          </a>
          <br />
          <br />
          I’m passionate about delivering high-performance and intuitive design
          of web applications to the users while positively impacting the world
          through my work and interactions with others.
          <br />
          <br />
          During my time at La Salle, I was the Vice President of La Salle ACM.
          I was also involved in La Salle Math Club and Programming Team. In
          Spring 2019, I attended my first hackathon,{" "}
          <a href="https://hackwcu.org/" className="link-p">
            HackWCU
          </a>
          , where our team won first place🏆.
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
          Aside from technology, I enjoy design, photography, and baking.
        </p>
      </Fade>
    </section>
  </Layout>
)

export default About
