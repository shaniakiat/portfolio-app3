import React from "react"
import "../styles/experience.css"
import Fade from "react-reveal/Fade"

const Experience = () => (
  <section className="experience">
    <Fade left>
      <h1>Experience</h1>
      <div className="content">
        <div className="exp-item">
          <div className="job">
            <a
              className="company"
              href="https://investor.vanguard.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vanguard
            </a>
            <div className="duration">May 2020 &mdash; July 2020</div>
          </div>
          <div className="position-title">Application Development Intern</div>
          <ul className="description">
            <li>
              Developed a web application for the financial advisors to test the
              client-tailored portfolio rebalance engine using Angular 8,
              Vanguard UI Library, and Vanguard API.
            </li>
            <li>
              Worked closely with the product owner and the methodology team to
              refine business requirements and maintain overall project status.
            </li>
            <li>
              Ensured quality assurance by creating unit and end-to-end tests
              utilizing Jasmine.
            </li>
            <li>
              Collaborated with a team of interns to develop a full-stack
              application of Vanguard internal e-commerce using MongoDB,
              Express.js, Angular 8, Node.js.
            </li>
          </ul>
        </div>
        <div className="exp-item">
          <div className="job">
            <a
              className="company"
              href="https://www.tegraanalytics.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tegra Analytics, LLC.
            </a>
            <div className="duration">May 2019 &mdash; Aug 2019</div>
          </div>
          <div className="position-title">Data Science Intern</div>
          <ul className="description">
            <li>
              Performed exploratory data analysis for 10,000+ doctors and
              Parkinson disease products to prepare for predictive modeling.
            </li>
            <li>
              Implemented machine learning algorithms such as Time Series and
              K-Means clustering in Python to target new customer groups for new
              Parkinson disease product.
            </li>
          </ul>
        </div>
        <div className="exp-item">
          <div className="job">
            <a
              className="company"
              href="https://www.lasalle.edu/math-computer-science/"
              target="_blank"
              rel="noopener noreferrer"
            >
              La Salle Mathematics and Computer Science Department
            </a>
            <div className="duration">May 2019 &mdash; Aug 2019</div>
          </div>
          <div className="position-title">Undergraduate Student Researcher</div>
          <ul className="description">
            <li>
              Conducted research with Dr. Timothy Highley based on his previous
              research: Tropical Vertex-Disjoint Cycles of a Vertex-Colored
              Digraph: Barter Exchange with Multiple Items Per Agent
            </li>
            <li>
              Applied reduction techniques based on other NP-Complete related
              problems to determine the hardness of the tropical exchange
              problem.
            </li>
          </ul>
        </div>
        <div className="exp-item">
          <div className="job">
            <a
              className="company"
              href="https://www.lasalle.edu/math-computer-science/"
              target="_blank"
              rel="noopener noreferrer"
            >
              La Salle Mathematics and Computer Science Department
            </a>
            <div className="duration">Aug 2018 &mdash; Jun 2019</div>
          </div>
          <div className="position-title">Mathematics Tutor</div>
          <ul className="description">
            <li>
              Tutored La Salle’s undergraduate students in college algebra,
              pre-calculus, and calculus I.
            </li>
            <li>
              Assisted students individually or in small groups to enhance their
              math skills.
            </li>
          </ul>
        </div>
        <div className="exp-item">
          <div className="job">
            <a
              className="company"
              href="https://www.lasalle.edu/english/"
              target="_blank"
              rel="noopener noreferrer"
            >
              La Salle English Department
            </a>
            <div className="duration">Aug 2017 &mdash; PRESENT</div>
          </div>
          <div className="position-title">Student Worker</div>
          <ul className="description">
            <li>Assist professors of English Department with various tasks.</li>
            <li>Organize documents as needed.</li>
            <li>
              Pick up, drop off, and distribute mail and other shipments between
              offices.
            </li>
          </ul>
        </div>
      </div>
    </Fade>
  </section>
)

export default Experience
