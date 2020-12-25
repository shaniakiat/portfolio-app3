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
            <a href="mailto:kiat.shania@gmail.com" className="link-p">
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
      <span>
        <a
          href={item.node.link}
          target="_blank"
          rel="noopener noreferrer"
          className="link-p networks"
          key={item.node.website + index}
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

// const Contact = () => (
{
  /* <Fade right>
    <section className="contact" id="contact">
      <h1 className="title">Get In Touch</h1>
      <p>Please feel free to contact me at</p>
      <a href="mailto:kiat.shania@gmail.com" className="link-p">
        kiat.shania@gmail.com
      </a>
      <br />
      <br />
      <a
        href="https://www.linkedin.com/in/shania-kiat"
        target="_blank"
        rel="noopener noreferrer"
        className="link-p networks"
      >
        LinkedIn
      </a>
      <br /> */
}
//       <a
//         href="https://github.com/shaniakiat"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="link-p networks"
//       >
//         GitHub
//       </a>
//       <br />
//       <a
//         href="https://dribbble.com/shaniakiat"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="link-p networks"
//       >
//         Dribbble
//       </a>
//       <br />
//       <a
//         href="https://www.behance.net/shaniakiat"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="link-p networks"
//       >
//         Behance
//       </a>
//       <br />
//       <a
//         href="https://codepen.io/shaniakiat/"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="link-p networks"
//       >
//         Codepen
//       </a>
//       <br />
//       <a
//         href="https://www.instagram.com/shania.took.this/"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="link-p networks"
//       >
//         Instagram
//       </a>
//       <br />
//     </section>
//   </Fade>
// )

// export default Contact
