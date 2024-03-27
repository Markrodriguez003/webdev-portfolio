import {
  WelcomeContainer,
  IntroductionContainer,
  NavContainer,
  ScrollToExplore,
} from "../Home/Home.design.js";

import AnimatedHeader from "../../ui/AnimatedHeader/index.jsx";
import PlanetHeroScene from "../../ui/PlanetHeroScene/index.jsx";
import githubIcon from "../../../assets/icons/github-icon-w.png";
import SoundMeter from "../../ui/HeaderAnimations/SoundMeter.jsx";
import { FaUserAstronaut } from "react-icons/fa6";
// import PaginationTag from "../../ui/PaginationTag";
function Home() {
  return (
    <>
      <PlanetHeroScene />

      <IntroductionContainer>
        <NavContainer>
          <ul>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">PROJECTS</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </NavContainer>
        <WelcomeContainer>
          <h1>
            <AnimatedHeader title={"WELCOME"} />
          </h1>

          <p>
            My name is Mark Rodriguez 👋 & I am a full stack developer. Take a
            look at my projects & please do not hesistate to contact me!
          </p>
        </WelcomeContainer>
      </IntroductionContainer>

      <br />
      <ScrollToExplore>
        <SoundMeter />
        <span>SCROLL TO EXPLORE</span>
      </ScrollToExplore>
    </>
  );
}

export default Home;
