// STYLING // STYLED COMPONENTS
import {
  WelcomeContainer,
  IntroductionContainer,
  NavContainer,
  ScrollToExplore,
  AstronautMini,
} from "../Home/Home.design.js";

// COMPONENTS
import AnimatedHeader from "../../ui/AnimatedHeader/index.jsx";
import PlanetHeroScene from "../../ui/PlanetHeroScene/index.jsx";
import SoundMeter from "../../ui/HeaderAnimations/SoundMeter.jsx";
import { navContext } from "../../WebsiteSlidePanels/index.jsx";

// ASSETS
import githubIcon from "../../../assets/icons/github-icon-w.png";

// ICONS
import { FaUserAstronaut } from "react-icons/fa6";

// REACT
import { useContext, useRef } from "react";

// import PaginationTag from "../../ui/PaginationTag";
function Home({ children }) {
  const siteNav = useContext(navContext);

  return (
    <div>
      <PlanetHeroScene />
      {/* //! https://codesandbox.io/p/sandbox/scroll-component-forked-6rzrq2?file=%2Fsrc%2FForm.js%3A4%2C40&fontsize=14&hidenavigation=1&theme=dark */}

      <br />
      <br />
      <IntroductionContainer>
        {children ? <>{children}</> : <></>}
        <NavContainer>
          <ul>
            <li>
              {/* <a href="#about"  onClick={() => document.getElementById('first')?.scrollIntoView()}> */}
              <a onClick={() => siteNav.goToSlide(1)}>ABOUT</a>
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

      <ScrollToExplore>
        <SoundMeter />
        <AstronautMini />
        <span>SCROLL TO EXPLORE</span>
      </ScrollToExplore>
    </div>
  );
}

export default Home;
