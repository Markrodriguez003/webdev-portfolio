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
import { useContext } from "react";
import { navContext } from "../../WebsiteSlidePanels/index.jsx";

// import PaginationTag from "../../ui/PaginationTag";
function Home() {
  const siteNav = useContext(navContext);

  console.log("Navigation: ", siteNav);
  // console.log("Navigation: ", siteNav.setSiteSlide);
  return (
    <>
      <PlanetHeroScene />
      {/* //! https://codesandbox.io/p/sandbox/scroll-component-forked-6rzrq2?file=%2Fsrc%2FForm.js%3A4%2C40&fontsize=14&hidenavigation=1&theme=dark */}
      <IntroductionContainer>
        <NavContainer>
          <ul>
            <li>
              <a href="#about" onClick={() => siteNav.goToSlide(1)}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => siteNav.goToSlide(2)}>
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => siteNav.goToSlide(3)}>
                CONTACT
              </a>
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
