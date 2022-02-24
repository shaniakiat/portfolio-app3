import React from "react"

import "../styles/footer.css"

const Footer = () => (
  <div className="footer">
    © {new Date().getFullYear()}, Designed by
    {` `}
    <a href="https://www.shaniakiat.dev">
      Shania Kiat <span role="img" aria-label="emoji" aria-labelledby="emoji">👩🏻‍💻☕</span>
    </a>
  </div>
)

export default Footer
