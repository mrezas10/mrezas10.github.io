import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SteppedEase, Power0 } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import LabSection from "./components/LabSection";
import { Coin } from "./components/styledComponents";
import Features from "./components/Features";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerEase(SteppedEase);
  gsap.registerEase(Power0);
  const ref = useRef(null);
  useLayoutEffect(() => {
    const element = ref.current;
    gsap.to(element.querySelector("#Coin"), {
      scrollTrigger: {
        trigger: element.querySelector("#Lab"),
        start: "200",
        end: "+=1100",
        scrub: 2,
      },
      y: 1100,
      ease: Power0.easeNone,
    });
  });
  useLayoutEffect(() => {
    const element = ref.current;
    gsap.to(element.querySelector("#Coin"), {
      scrollTrigger: {
        trigger: element.querySelector("#Features"),
        start: "-=350",
        end: "top top",
        scrub: 2,
      },
      backgroundPosition: "0px -8800px",
      ease: SteppedEase.config(22),
    });
  });
  return (
    <div className="App" ref={ref}>
      <LabSection id="Lab">
        <Coin id="Coin"></Coin>
      </LabSection>
      <Features />
      <div className="Box"></div>
      <div className="LabPeople"></div>
    </div>
  );
}

export default App;
