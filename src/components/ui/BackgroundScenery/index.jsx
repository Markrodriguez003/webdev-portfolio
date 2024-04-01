import { SpaceBackground } from "./BackgroundScenery.design";

import MeteorShower from "../MeteorShower";

import nebulaVideo from "../../../assets/video/nebula-1.mp4";
// import nebulaVideo from "../../../assets/video/nebula-2.mp4";

import "./BackgroundScene.design.css";

import { useContext, useEffect, useRef } from "react";
function BackgroundScenery() {
  return (
    <>
      <SpaceBackground>
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
