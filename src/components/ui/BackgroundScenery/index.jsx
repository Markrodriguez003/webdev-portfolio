import { SpaceBackground } from "./BackgroundScenery.design";
import { scrollContext } from "../../WelcomeNavBlock";

import { useContext, useEffect } from "react";
function BackgroundScenery() {
  const starDirection = useContext(scrollContext);
  useEffect(() => {
    console.log(
      `Direction changed inside background scenery!: `,
      starDirection
    );
  }, [starDirection]);
  return (
    <>
      <SpaceBackground $starChange={starDirection}>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="stars4"></div>
      </SpaceBackground>
    </>
  );
}

export default BackgroundScenery;
