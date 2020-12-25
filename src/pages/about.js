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
          I'm a senior at{" "}
          <a href="https://lasalle.edu" className="link-p">
            La Salle University
          </a>{" "}
          in Philadelphia, studying computer science and mathematics.
          <br />
          <br />
          My career goals include becoming a software engineer and working for a
          product or tool I believe in while giving a positive impact on the
          world through my work and interactions with others.
          <br />
          <br />
          On campus, I am the Vice President of La Salle’s Association for
          Computing Machinery. I am also involved in La Salle’s Mathematical
          Assoc. of America and Programming Team. In Spring 2019, I attended my
          first hackathon,{" "}
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
          Aside from computer science, technology, and mathematics, I enjoy
          design, photography, and baking.
        </p>
      </Fade>
    </section>
  </Layout>
)

export default About
