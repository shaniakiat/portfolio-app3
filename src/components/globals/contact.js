import React from "react"
import "../styles/contact.css"

const Contact = () => (
  <section class="hero">
    <div id="contact" className="container">
      <h1>Get In Touch</h1>
      <p>
        Please feel free to contact me at
        <br />
        <a href="mailto:kiat.shania@gmail.com" className="link-p">
          kiat.shania@gmail.com
        </a>
        <br />
        <br />
        <a
          href="https://www.linkedin.com/in/shania-kiat"
          target="_blank"
          className="link-p networks"
        >
          {/* <FaLinkedin className="linkedin-icon social" /> */}
          LinkedIn
        </a>
        <br />
        <a
          href="https://github.com/shaniakiat"
          target="_blank"
          className="link-p networks"
        >
          {/* <FaGithub className="github-icon social" /> */}
          GitHub
        </a>
        <br />
        <a
          href="https://dribbble.com/shaniakiat"
          target="_blank"
          className="link-p networks"
        >
          {/* <FaDribbbleSquare className="dribbble-icon social" /> */}
          Dribbble
        </a>
        <br />
        <a
          href="https://www.behance.net/kshania987f1f"
          target="_blank"
          className="link-p networks"
        >
          {/* <FaBehanceSquare className="behance-icon social" /> */}
          Behance
        </a>
        <br />
        <a
          href="https://codepen.io/shaniakiat/"
          target="_blank"
          className="link-p networks"
        >
          {/* <FaCodepen className="codepen-icon social" /> */}
          Codepen
        </a>
        <br />
        <a
          href="https://www.instagram.com/shania.took.this/"
          target="_blank"
          className="link-p networks"
        >
          {/* <FaInstagram className="insta-icon social" /> */}
          Instagram
        </a>
        <br />
      </p>
    </div>
  </section>
)

export default Contact
