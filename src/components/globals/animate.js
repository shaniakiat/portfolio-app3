import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
export const StaggerLandingPage = (elem1, elem2, elem3, elem4) => {
  gsap.from(
    [elem1, elem2, elem3, elem4],
    {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power4.easeOut",
      stagger: {
        amount: 0.4,
      },
    },
    "-=1.5"
  )
}

export const ArrowYoyo = elem => {
  gsap.from(
    elem,
    {
      y: 15,
      repeat: -1,
      yoyo: true,
    },
    "-=1.2"
  )
}
