import React from "react"
import "../styles/experience.css"
import Fade from "react-reveal/Fade"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { StaticQuery, graphql } from "gatsby"

const Experience = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        allExperienceJson {
          edges {
            node {
              title
              company
              location
              startDate
              endDate
              description
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <section className="experience" id="experience">
          <Fade top>
            <Tabs>
              <TabList>
                <Tab>Vanguard</Tab>
                <Tab>Tegra</Tab>
                <Tab>La Salle</Tab>
                <Tab>Permias</Tab>
              </TabList>
              {getExperience(data)}
            </Tabs>
          </Fade>
        </section>
      </>
    )}
  />
)

function getExperience(data) {
  const experienceArray = []
  data.allExperienceJson.edges.forEach((item, index) =>
    experienceArray.push(
      <TabPanel key={item.node.title + index}>
        <div className="panel-content">
          <p className="position">{item.node.title}</p>
          <p className="date">
            {item.node.startDate} – {item.node.endDate}
          </p>
          <p className="location">{item.node.location}</p>
          <ul>
            {item.node.description.map((value, i) => (
              <li key={item.node.title + i}>{item.node.description[i]}</li>
            ))}
          </ul>
        </div>
      </TabPanel>
    )
  )
  return experienceArray
}

export default Experience
