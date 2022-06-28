// Style import
import "./App.css";

// ** GSAP Imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SteppedEase, Power0 } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

// ** User Componentss
import LabSection from "./components/LabSection";
import Features from "./components/Features";
import HatomHeader from "./components/HatomHeader";
import HatomTitle from "./components/HatomTitle";
import NewsLetter from "./components/NewsLetter";
import HatomFooter from "./components/HatomFooter";
// ** Styled Components
import { Coin } from "./components/styledComponents";

// ** React Width Hook
import { useWindowWidth } from "@react-hook/window-size";

// ** Main Page
function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerEase(SteppedEase);
  gsap.registerEase(Power0);
  const ref = useRef(null);
  const width = useWindowWidth();
  useLayoutEffect(() => {
    const element = ref.current;
    gsap.to(element.querySelector("#Coin"), {
      scrollTrigger: {
        trigger: element.querySelector("#Lab"),
        start: "200",
        end: width > 900 ? "+=1200" : "+=900",
        scrub: 2,
      },
      y: width > 900 ? 1200 : 900,
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
      <HatomHeader />
      <HatomTitle />
      <LabSection id="Lab">
        <Coin id="Coin"></Coin>
      </LabSection>
      <Features />
      <NewsLetter />
      <HatomFooter />
    </div>
  );
}

export default App;
