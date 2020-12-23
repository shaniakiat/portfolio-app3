import React, { useEffect, useRef } from "react"
import "../styles/home.css"
import { StaggerLandingPage } from "./Animate"
import { ArrowYoyo } from "./Animate"

function Home() {
  let stagger1 = useRef(null)
  let stagger2 = useRef(null)
  let stagger3 = useRef(null)
  let stagger4 = useRef(null)
  let yoyo = useRef(null)

  useEffect(() => {
    StaggerLandingPage(stagger1, stagger2, stagger3, stagger4)
    ArrowYoyo(yoyo)
  }, [])
  return (
    <section className="hero">
      <div className="content">
        <h1 className="full-name" ref={el => (stagger1 = el)}>
          Shania Kiat
        </h1>
        <h2 className="my-title" ref={el => (stagger2 = el)}>
          Web Developer & UI/UX Enthusiast
        </h2>
        <p className="my-desc" ref={el => (stagger3 = el)}>
          I'm a student at La Salle University majoring in computer science &
          minoring in mathematics
        </p>
        <span ref={el => (stagger4 = el)}>
          <svg
            class="scroll"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-down"
            role="img"
            viewBox="0 0 448 512"
            ref={el => (yoyo = el)}
          >
            <path
              class="arrow"
              fill="currentColor"
              d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"
            ></path>
          </svg>
        </span>
      </div>
      <svg
        className="hero-design"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 784.09 558.59"
      >
        <title>Asset 2</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <g id="Group_1" data-name="Group 1">
              <g id="Group_2" data-name="Group 2">
                <g id="Group_4" data-name="Group 4">
                  <g>
                    <path
                      d="M234.9,387.46l-50.1-27.3c13.1,7.2,21.2,17.4,21.2,33.8a16.2,16.2,0,0,1-.1,2.2,3.75,3.75,0,0,1-.1,1.1,3.4,3.4,0,0,1-.1,1,10,10,0,0,1-.2,1.6.9.9,0,0,1-.1.5c-.1.6-.2,1.3-.3,1.9h0a60.35,60.35,0,0,1-2.1,8.1,49.42,49.42,0,0,1-2.6,5.7,39.92,39.92,0,0,1-2.7,4.4c-1,1.3-2,2.7-3.1,3.9h.1a45.42,45.42,0,0,1-3.8,3.8h-.1a38.11,38.11,0,0,1-5,4h0a55.64,55.64,0,0,1-7.9,4.5h0a69.26,69.26,0,0,1-9.9,3.7,83.14,83.14,0,0,1-10.4,2.2l-2.2.3a6.6,6.6,0,0,1-1.4.1c-.5,0-1.1.1-1.6.1h-.3a55.06,55.06,0,0,1-15.7-1.4l.2.1h-.2l-.1-.1A45.51,45.51,0,0,1,129,439l.8.4c-.7-.3-1.4-.7-2.1-1l4.2,2.3,47.2,25.7a14.8,14.8,0,0,0-1.3-.8c.1.1.2.1.3.2l1,.5a33.91,33.91,0,0,0,7.3,2.7h-.1a49.33,49.33,0,0,0,13,1.5,55.54,55.54,0,0,0,8.2-.6c14.9-2.1,27-7.8,35.4-16.4l1.7-1.7h-.1a44,44,0,0,0,9-15.9c0-.1,0-.1.1-.2.2-.6.3-1.1.5-1.7,0-.1.1-.2.1-.4.1-.5.3-1.1.4-1.6,0-.2.1-.3.1-.5.1-.5.2-1,.3-1.6,0-.2.1-.4.1-.6a7.72,7.72,0,0,0,.2-1.5c0-.3.1-.5.1-.8s.1-.9.1-1.3.1-.7.1-1.1a3.4,3.4,0,0,1,.1-1c0-.7.1-1.5.1-2.2h0C256.1,404.76,248,394.56,234.9,387.46Z"
                      style={{ fill: "var(--textNormal)" }}
                    />
                    <path
                      d="M197.6,201.36l50.1,27.3h0c-1-17-8.2-28.9-19.6-35.1L178,166.26h0C189.4,172.46,196.6,184.46,197.6,201.36Z"
                      style={{ fill: "var(--textNormal)" }}
                    />
                    <path
                      d="M311.3,308.56l-50.1-27.3c-1.7-.9-3.4-1.8-5.2-2.7h0c-12.9-6.3-27.1-10.8-41.4-14.5-19.1-4.9-38.4-8.3-55.3-12.6h.1c-.3-.1-.6-.1-.8-.2-.9-.2-1.8-.5-2.7-.7-.5-.1-1-.3-1.6-.4l-2.1-.6L150,249c-.5-.1-.9-.3-1.4-.4-.9-.3-1.7-.5-2.6-.8l-1-.3c-.8-.3-1.6-.5-2.4-.8-.4-.1-.8-.3-1.2-.4s-.8-.3-1.2-.4c-2.9-1.1-5.7-2.3-8.3-3.5a5.94,5.94,0,0,1-.8-.4l-2.4-1.2,50.1,27.3a86.71,86.71,0,0,0,11.5,5.1c.4.1.8.3,1.2.4s.8.3,1.2.4c.8.3,1.5.5,2.3.8l1,.3c.9.3,1.7.5,2.6.8.5.1.9.3,1.4.4l2.2.6,2.1.6c.5.1,1,.3,1.5.4.9.2,1.8.5,2.7.7a6.37,6.37,0,0,0,.7.2h0c31.3,7.9,71,12.9,102.1,29.8l-2.1-1.1A21.16,21.16,0,0,1,311.3,308.56Z"
                      style={{ fill: "var(--textNormal)" }}
                    />
                    <path
                      d="M50.1,441.46,0,414.16c1.5,49,22.9,82.5,56.5,100.7l50.1,27.3C73,523.86,51.6,490.36,50.1,441.46Z"
                      style={{ fill: "var(--textNormal)" }}
                    />
                  </g>
                  <g>
                    <polygon
                      points="0 414.16 50.1 441.46 156.9 426.46 106.8 399.16 0 414.16"
                      style={{ fill: "var(--textNormal)" }}
                    />
                    <path
                      d="M301.3,115.16l-50.1-27.3c-1.4-.7-2.7-1.4-4.1-2.1l1.9,1h0l-1.9-1a116.38,116.38,0,0,0-22.9-8.4l.2.1c-19.6-5.1-42.1-6.3-67-3.3a1.27,1.27,0,0,0-.6.1l-4.5.6h-.1l-.1-.1c-4.1.6-8.2,1.3-12.2,2.1-5.8,1.1-11.6,2.5-17.3,4.1a208.65,208.65,0,0,0-31.4,11.4c-.4.2-.8.3-1.2.5a176.09,176.09,0,0,0-25.3,14.5l-1,.7c-1,.7-2,1.4-2.9,2.1-.2.2-.4.3-.6.5-1.1.8-2.3,1.7-3.4,2.6-.1.1-.3.2-.4.3-1.1.9-2.3,1.8-3.4,2.7a2.18,2.18,0,0,0-.5.4c-.1.1-.2.1-.2.2-1.1,1-2.3,1.9-3.4,2.9h-.1A154.7,154.7,0,0,0,36.7,132l.1.1-.1.1h0a130.16,130.16,0,0,0-9.8,12.4,137.9,137.9,0,0,0-8.5,13.8,135.9,135.9,0,0,0-8,17.9h0a147.06,147.06,0,0,0-6,21.7c-.1.4-.1.7-.2,1.1s-.2,1.1-.3,1.6a155.13,155.13,0,0,0-2.3,26.4c-.5,51.1,20.8,78,49.8,93.8l50.1,27.3c-29.1-15.8-50.3-42.6-49.8-93.8,0-2.6.1-5.1.2-7.7v-.4c.1-1,.1-2.1.2-3.1a3.4,3.4,0,0,1,.1-1c.1-.7.1-1.3.2-2s.1-1.3.2-2h0a152.32,152.32,0,0,1,7.9-34.6h0a140.13,140.13,0,0,1,38.8-56.7c2.4-2.1,4.8-4.2,7.3-6.1h0c1.2-1,2.4-1.9,3.6-2.8.2-.1.3-.3.5-.4,1.3-1,2.7-1.9,4-2.9a176.09,176.09,0,0,1,25.3-14.5,214.17,214.17,0,0,1,62-18l-.1-.1h0l.1.1c.3,0,.6-.1.8-.1,1-.1,2.1-.3,3.1-.4s2.3-.3,3.4-.4h0c36.4-4,67.7.9,91.8,14l-3.3-1.8A19,19,0,0,1,301.3,115.16Z"
                      style={{ fill: "var(--textNormal)" }}
                    />
                  </g>
                  <path
                    d="M157.9,235.56c0-27.3,17.4-43,40.7-46.3.5-.1,1.1-.1,1.6-.2,27.1-3.1,45.8,11.3,47.5,39.6l108.5-15.3c-3.9-84.3-64.3-123.9-154.1-111.3-86.2,12.1-150.3,68-150.5,152.2-1.5,157.9,204.7,84.6,204.5,167,0,26-18.8,44.5-48.2,48.6-28.2,4-48.1-9.7-51-43.5l-106.8,15c2.8,89.6,72,127.4,160.6,114.9,96.2-13.5,150.4-83.2,150.5-158C361.5,249.36,157.8,312.86,157.9,235.56Z"
                    style={{ fill: "var(--bg)" }}
                  />
                </g>
                <g id="Group_3" data-name="Group 3">
                  <g>
                    <polygon
                      points="523.29 311.6 473.19 284.3 611.39 461.2 661.49 488.5 523.29 311.6"
                      style={{ fill: "var(--textNormal)" }}
                    />
                    <polygon
                      points="661.09 43.9 610.99 16.6 473.29 231 523.39 258.3 661.09 43.9"
                      style={{ fill: "var(--textNormal)" }}
                    />
                    <polygon
                      points="372.49 494.8 422.59 522.1 423.39 77.4 373.29 50.1 372.49 494.8"
                      style={{ fill: "var(--textNormal)" }}
                    />
                  </g>
                  <polygon
                    points="618.99 267.7 779.09 27.3 661.09 43.9 523.39 258.3 523.79 63.2 423.39 77.3 422.59 522 522.89 507.9 523.29 311.5 661.39 488.4 784.09 471.2 618.99 267.7"
                    style={{ fill: "var(--bg)" }}
                  />
                  <g>
                    <polygon
                      points="729.09 0 611.09 16.6 661.19 43.9 779.19 27.3 729.09 0"
                      style={{ fill: "var(--textNormal)" }}
                    />
                    <polygon
                      points="373.29 50 423.39 77.3 523.79 63.2 473.69 35.9 373.29 50"
                      style={{ fill: "var(--textNormal)" }}
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </section>
  )
}

export default Home
