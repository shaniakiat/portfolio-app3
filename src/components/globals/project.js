import React from "react"
import "../styles/project.css"
import Fade from "react-reveal/Fade"
import { StaticQuery, graphql } from "gatsby"

const Project = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        allProjectsJson {
          edges {
            node {
              title
              description
              stack
              image {
                name
                src
              }
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <section className="project" id="project">
          <Fade bottom>
            <h1 className="title">Featured Projects</h1>
            {getProject(data)}
          </Fade>
        </section>
      </>
    )}
  />
)

function getProject(data) {
  const projectArray = []
  data.allProjectsJson.edges.forEach((item, index) =>
    projectArray.push(
      <div className="grid" key={item.node.title + index}>
        <div className="left-content">
          <a href={item.node.link} target="_blank" rel="noopener noreferrer">
            <img src={item.node.image.src} className="project-img" alt=""></img>
          </a>
        </div>
        <div className="right-content">
          <a href={item.node.link} target="_blank" rel="noopener noreferrer">
            <h3>{item.node.title}</h3>
          </a>
          <p className="project-p">{item.node.description}</p>
          <ul className="stack-list">
            {item.node.stack.map((value, i) => (
              <li key={item.node.title + i}>{item.node.stack[i]}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  )
  return projectArray
}

export default Project
