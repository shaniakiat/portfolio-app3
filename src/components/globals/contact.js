import React from "react"
import "../styles/contact.css"
import Fade from "react-reveal/Fade"
import { StaticQuery, graphql } from "gatsby"

const Contact = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        allContactJson {
          edges {
            node {
              website
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Fade right>
          <section className="contact" id="contact">
            <h1 className="title">Get In Touch</h1>
            <p>Please feel free to contact me at</p>
            <a href="mailto:kiat.shania@gmail.com" className="networks">
              kiat.shania@gmail.com
            </a>
            <br />
            <br />
            {getContact(data)}
          </section>
        </Fade>
      </>
    )}
  />
)

function getContact(data) {
  const contactArray = []
  data.allContactJson.edges.forEach((item, index) =>
    contactArray.push(
      <span key={item.node.website + index}>
        <a
          href={item.node.link}
          target="_blank"
          rel="noopener noreferrer"
          className="link-p networks"
        >
          {item.node.website}
        </a>
        <br />
      </span>
    )
  )
  return contactArray
}

export default Contact
