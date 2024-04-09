// STYLING / STYLED COMPONENTS
import {
  SpaceBackground,
  VideoContainer,
  OuterBackgroundContainer,
} from "./BackgroundScenery.design";

// COMPONENTS
import MeteorShower from "../MeteorShower";

// VIDEO
import nebulaVideo from "../../../assets/video/nebula-1.mp4";
// import nebulaVideo from "../../../assets/video/nebula-2.mp4";

function BackgroundScenery({ children }) {
  return (
    <>
      <OuterBackgroundContainer>
        <SpaceBackground>
          <VideoContainer>
            <video autoPlay loop muted>
              <source src={nebulaVideo}/>
            </video>
          </VideoContainer>
          <MeteorShower />

          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
          <div className="stars4"></div>
        </SpaceBackground>
        {children}
      </OuterBackgroundContainer>
    </>
  );
}

export default BackgroundScenery;
