import React from "react"
import "../styles/resume.css"
import { AiFillHome } from "react-icons/ai"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const Resume = () => (
  <>
    <header>
      <div className="container">
        <nav className="project-nav">
          <div className="logo-svg">
            <a href="/">
              <AiFillHome />
            </a>
          </div>

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
      <div id="resume" className="container">
        <div className="center">
          <div className="center-inner">
            <div className="center-inner-inner">
              <div className="introduction">
                <h4>Shania Kiat</h4>
              </div>
              <div className="education">
                <h4>Education</h4>
                <div className="content">
                  <div className="university">
                    <a
                      href="https://www.lasalle.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      La Salle University
                    </a>
                  </div>
                  <div className="college">
                    <a
                      href="https://www.lasalle.edu/computer-science/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      School of Arts and Sciences / Computer Science
                    </a>
                  </div>
                  <div className="major">
                    <strong>Major:</strong> Computer Science <br />
                    <strong>Minor:</strong> Mathematics{" "}
                  </div>
                  <div className="degree">
                    <strong>Degree:</strong> Bachelor of Science
                  </div>
                  <div className="grad-date">Expected Graduation: May 2021</div>
                </div>
              </div>
              <div className="courses">
                <h4>Relevant Coursework</h4>
                <div className="content">
                  <ul className="description">
                    <li>Object Programming</li>
                    <li>Introduction to Data Structures and Algorithms</li>
                    <li>Software Engineering</li>
                    <li>Project Implementation</li>
                    <li>Theory of Algorithms</li>
                    <li>Language Theory and Design</li>
                    <li>Computer Electronics</li>
                    <li>Data Communication Networks</li>
                    <li>Computer Architecture</li>
                    <li>Database Management Systems</li>
                    <li>Multivariable Calculus</li>
                    <li>Linear Algebra and Applications</li>
                    <li>Foundations of Mathematics</li>
                    <li>Probablilty and Statistics I</li>
                    <li>Complex Variables</li>
                    <li>General Physics I</li>
                    <li>General Physics II</li>
                  </ul>
                </div>
              </div>
              <div className="experience">
                <h4>Experience</h4>
                <div className="content">
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
                    <div className="title">Predictive Analytics Intern</div>
                    <ul className="description">
                      <li>
                        Performed exploratory data analysis for 10,000+ doctors
                        and Parkinson disease products to prepare for predictive
                        modeling.
                      </li>
                      <li>
                        Implemented machine learning algorithms such as Time
                        Series and K-Means clustering in Python to target new
                        customer groups for new Parkinson disease product.
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
                    <div className="title">
                      Undergraduate Student Researcher
                    </div>
                    <ul className="description">
                      <li>
                        Conducted research with Dr. Timothy Highley based on his
                        previous research: Tropical Vertex-Disjoint Cycles of a
                        Vertex-Colored Digraph: Barter Exchange with Multiple
                        Items Per Agent
                      </li>
                      <li>
                        Applied reduction techniques based on other NP-Complete
                        related problems to determine the hardness of the
                        tropical exchange problem.
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
                    <div className="title">Mathematics Tutor</div>
                    <ul className="description">
                      <li>
                        Tutored La Salle’s undergraduate students in college
                        algebra, pre-calculus, and calculus I.
                      </li>
                      <li>
                        Assisted students individually or in small groups to
                        enhance their math skills.
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
                    <div className="title">Student Worker</div>
                    <ul className="description">
                      <li>
                        Assist professors of English Department with various
                        tasks.
                      </li>
                      <li>Organize documents as needed.</li>
                      <li>
                        Pick up, drop off, and distribute mail and other
                        shipments between offices.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="awards">
                <h4>Awards</h4>
                <div className="content">
                  <div className="achivement">
                    <span>
                      Placed 2nd in the ACM-ICPC Mid-Atlantic Regional 2019
                      Programming Competition at Washington College &nbsp;
                    </span>
                    <strong>(Fall 2019)</strong>
                  </div>
                  <div className="achivement">
                    <span>
                      IT Leadership Award from La Salle University Computer
                      Science Advisory Board &nbsp;
                    </span>
                    <strong>(Fall 2019)</strong>
                  </div>
                  <div className="achivement">
                    <span>
                      Member of Upsilon Pi Epsilon Computer Science Honors
                      Society &nbsp;
                    </span>
                    <strong>(Spring 2019)</strong>
                  </div>
                  <div className="achivement">
                    <span>
                      🏆 1st Place Winner of Major League Hacking's Hack WCU
                      Hackathon 2019 &nbsp;
                    </span>

                    <strong>(Spring 2019)&nbsp;&nbsp;</strong>
                    <a
                      className="page"
                      href="https://devpost.com/software/gratis"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More&nbsp;
                    </a>
                  </div>
                  <div className="achivement">
                    <span>National Science Foundation Scholarship &nbsp;</span>
                    <strong>(Spring 2018)</strong>
                  </div>
                  <div className="achivement">
                    <span>Founder's Scholarship &nbsp;</span>
                    <strong>(Fall 2017)</strong>
                  </div>
                </div>
              </div>
              <div className="skills">
                <h4>Skills</h4>
                <div className="content">
                  <div className="skill-category">
                    <strong>Languages: &nbsp;</strong>
                    <span>
                      Java, JavaScript (React, Gatsby, and Angular), Python
                    </span>
                  </div>
                  <div className="skill-category">
                    <strong>Libraries &amp; Frameworks: &nbsp;</strong>
                    <span>Node, React</span>
                  </div>
                  <div className="skill-category">
                    <strong>Development Tools: &nbsp;</strong>
                    <span>
                      Git &amp; Github, Command Line, Visual Studio Code,
                      IntelliJ IDEA CE, Android Studio, NetBeans, Adobe
                      Photoshop, Illustrator, inDesign, PyCharm
                    </span>
                  </div>
                  <div className="skill-category">
                    <strong>Databse and Other Tools: &nbsp;</strong>
                    <span>MongoDB, mySQL</span>
                  </div>
                </div>
              </div>
              <div className="projects">
                <h4>Projects</h4>
                <div className="content">
                  <div className="project-item">
                    <a
                      className="project-title"
                      href="http://www.virtualchef.live/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Virtual Chef
                    </a>
                    <p className="project-desc">
                      Developed a full-stack application that generates food
                      predictions based on the user’s preferences. The
                      predictions are made by using neural networks, word2vec.
                    </p>
                    <div className="project-built">
                      MongoDB, Express.js, React, Node.js, Redux, Python, Flask,
                      and Heroku
                    </div>
                  </div>

                  <div className="content">
                    <div className="project-item">
                      <a
                        className="project-title"
                        href="https://devpost.com/software/gratis"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Gratis (Major League Hacking’s Hack WCU Hackathon)
                      </a>
                      <p className="project-desc">
                        Developed a web application that aims to provide a
                        platform that connects businesses
                        (restaurants/cafeterias) that have surplus food and
                        shelters to provide a solution to the hunger problem in
                        Philadelphia.
                      </p>
                      <div className="project-built">
                        MongoDB, Express.js, React, Node.js
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Resume
