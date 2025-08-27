/* eslint-disable react/prop-types */
import {
  BorderFrame,
  BorderCenter,
  HeaderContainer,
} from "./HeaderBorderBox.design";
import Waves from "../HeaderAnimations/Waves.jsx";
import RotatingBoxes from "../HeaderAnimations/RotatingBoxes.jsx";
import RotatingPlanets from "../HeaderAnimations/RotatingPlanets";
import SolarPanel from "../HeaderAnimations/SolarPanel";
import EndlessLandscape from "../HeaderAnimations/EndlessLandscape";

import MorphShape from "../HeaderAnimations/MorphShape.jsx";
import Ocean from "../HeaderAnimations/Ocean.jsx";
import TennisBall from "../HeaderAnimations/TennisBall.jsx";
import { useRef, useEffect, useState } from "react";
function HeaderBorderBox({ props }) {
  const { type, title } = props;
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (node) {
      observer.observe(node);
    }
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  let animationType = null;
  if (inView) {
    switch (type) {
      case "planets":
        animationType = <RotatingPlanets />;
        break;
      case "boxes":
        animationType = <RotatingBoxes />;
        break;
      case "waves":
        animationType = <Waves />;
        break;
      case "solar":
        animationType = <SolarPanel />;
        break;
      case "endlessLandscape":
        animationType = <EndlessLandscape />;
        break;
      case "morph":
        animationType = <MorphShape />;
        break;
      case "ocean":
        animationType = <Ocean />;
        break;
      case "tennisBall":
        animationType = <TennisBall />;
        break;
      default:
        animationType = <Waves />;
    }
  }

  return (
    <>
      <HeaderContainer ref={containerRef}>
        <BorderCenter>
          {animationType}
          <BorderFrame>
            <h2>{title}</h2>
          </BorderFrame>
        </BorderCenter>
      </HeaderContainer>
    </>
  );
}

export default HeaderBorderBox;
