// COMPONENTS
import RotatingPlanets from "../HeaderAnimations/RotatingPlanets";
import AnimatedHeader from "../AnimatedHeader";

// STYLED COMPONENTS
import { LoadingScreenContainer, LoadingText } from "./LoadingScreen.design";

function LoadingScreen() {
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
