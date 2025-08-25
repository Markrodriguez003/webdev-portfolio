// STYLING // STYLED COMPONENTS
import {
  WelcomeContainer,
  IntroductionContainer,
  NavContainer,
  ScrollToExplore,
  AstronautMini,
} from "../Home/Home.design.js";

// LIBRARIES
import { useInView } from "react-intersection-observer";


// COMPONENTS
import AnimatedHeader from "../../ui/AnimatedHeader/index.jsx";
import PlanetHeroScene from "../../ui/PlanetHeroScene/index.jsx";
import SoundMeter from "../../ui/HeaderAnimations/SoundMeter.jsx";
import { navContext } from "../../WebsiteSlidePanels/index.jsx";
import SpeechBubble from "../../ui/SpeechBubble/index.jsx";
// import PaginationTag from "../../ui/PaginationTag";

// ASSETS
import githubIcon from "../../../assets/icons/github-icon-w.png";
import astronautH from "../../../assets/images/astronaut-2.png";

// ICONS
import { FaUserAstronaut } from "react-icons/fa6";

// REACT
import { useContext, useEffect, useRef, useState } from "react";

function Home({ children }) {
  const siteNav = useContext(navContext);

  // Astronaut dialogue options
  const dialogues = [
    "...",
    "..Uh.. Houston... we have a visitor..",
    "..well...uh..this is new for me..",
    "..first contact..gotta follow protocols..",
    "GREETINGS INTERSTELLAR VISITOR!",
    "..No, that doesn't sound right...",
    "so...what now?",
    "uhh.. *Clears throat*",
  ];

  // Intersection Observer for astronaut
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });


  // Ref for individual page sections

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  function ScrollSectionHandler(section) {
    // window.scrollTo({
    //   top: section.current.offsetTop,
    //   behavior: "smooth"
    // })
  }

  return (
    <div>
      <PlanetHeroScene />
      {/* //! https://codesandbox.io/p/sandbox/scroll-component-forked-6rzrq2?file=%2Fsrc%2FForm.js%3A4%2C40&fontsize=14&hidenavigation=1&theme=dark */}
      {/* //! https://www.linkedin.com/pulse/useeffect-mastery-tips-tricks-avoiding-common-mistakes-novin-noori */}

      <br />
      <br />
      <IntroductionContainer>
        {children ? <>{children}</> : <></>}
        <NavContainer>
          <ul>
            <li onClick={(e) => {
              // console.log(`site nav context: ${JSON.stringify(siteNav)}`)
              e.preventDefault();
              siteNav.goToSlide(1);
              // window.location.href = '#home';
              // window.scrollTo({
              //   top: "#home",
              //   behavior: "smooth"
              // })
            }}>

              ABOUT

            </li>
            <li
              // href="#projects"

              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                siteNav.goToSlide(2);
                // window.location.href = '#project';
              }}
            >
              PROJECTS

            </li>
            <li
              // href="#projects"

              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                siteNav.goToSlide(3);
                // window.location.href = '#project';
              }}
            >
             COMMERCIAL

            </li>
            <li
              // href="#contact"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                siteNav.goToSlide(4);
                // window.location.href = '#contact';
              }}
            >
              CONTACT

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
        <span>SCROLL TO EXPLORE</span>
        <AstronautMini key={inView} ref={ref} >
          <div className="speech-bubble" key={"astro-mini-bubble-home"}>
            <SpeechBubble
              direction="bottom-left"
              speech={dialogues}
              loop={true}
              solidBorder={true}
              msTime={5000}
              italics={false}
              visible={inView}
            />{" "}
          </div>
          <img src={astronautH}></img>
        </AstronautMini>
      </ScrollToExplore>
    </div >
  );
}

export default Home;
