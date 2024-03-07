import { SpaceBackground } from "./BackgroundScenery.design";
import { scrollContext } from "../../WebsiteSlidePanels";
import MeteorShower from "../MeteorShower";
// import nebulaVideo from "../../../assets/video/nebula-7.mp4";
// import nebulaVideo from "../../../assets/video/nebula-11.mp4";
// import nebulaVideo from "../../../assets/video/nebula-12.mp4";
// import nebulaVideo from "../../../assets/video/nebula-13.mp4"; // but slowed
// import nebulaVideo from "../../../assets/video/nebula-16.mp4";
import nebulaVideo from "../../../assets/video/nebula-19.mp4";
// import nebulaVideo from "../../../assets/video/nebula-21.mp4";
import "./BackgroundScene.design.css";

import { useContext, useEffect, useRef } from "react";
function BackgroundScenery() {
  const starDirection = useContext(scrollContext);
  useEffect(() => {
    console.log(
      `Direction changed inside background scenery!: `,
      starDirection
    );
  }, [starDirection]);

  // SLOWS THE RATE OF VIDEO.
  // let videoPlaybackSpeed = useRef();
  // useEffect(() => {
  //   console.log(`VIDEO --> `, videoPlaybackSpeed.current.playbackRate);
  //   videoPlaybackSpeed.current.playbackRate = 0.15;
  // }, );

  // videoPlaybackSpeed.defaultPlaybackRate = 5.0;

  return (
    <>
      <SpaceBackground $starChange={starDirection}>
        <div id="background-video-container">
          <video
            autoPlay
            loop
            muted
            
            id="background-video"
            // ref={videoPlaybackSpeed}
          >
            <source src={nebulaVideo}></source>
          </video>
        </div>
        <MeteorShower />
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="stars4"></div>
      </SpaceBackground>
    </>
  );
}

export default BackgroundScenery;
