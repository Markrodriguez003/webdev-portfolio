// COMPONENTS
import RotatingPlanets from "../HeaderAnimations/RotatingPlanets";
import AnimatedHeader from "../AnimatedHeader";

// REACT
import { useState, useEffect } from "react"

// STYLED COMPONENTS
import { LoadingScreenContainer, LoadingText } from "./LoadingScreen.design";

function LoadingScreen() {

  // Delays loading function for 4.5 seconds in fast/slow network downloads
  useEffect(() => {
    const myTimeout = setTimeout(() => { console.log("WHOA!") }, 45000);
    return () => {
      myTimeout;
      clearTimeout(myTimeout);

    };
  }, [])

  return (
    <>
      <LoadingScreenContainer>
        <RotatingPlanets />
        <LoadingText>
          <AnimatedHeader title={`Receiving Transmission...`} />
          <AnimatedHeader title={`Loading Site`} />
        </LoadingText>
      </LoadingScreenContainer>
    </>
  );
}

export default LoadingScreen;
