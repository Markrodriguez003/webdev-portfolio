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
import { useContext, useEffect, useRef, useState, lazy, Suspense } from "react";
const PlanetHeroScene = lazy(() => import("../../ui/PlanetHeroScene/index.jsx"));
import SoundMeter from "../../ui/HeaderAnimations/SoundMeter.jsx";
import { navContext } from "../../WebsiteSlidePanels/index.jsx";
import SpeechBubble from "../../ui/SpeechBubble/index.jsx";
// import PaginationTag from "../../ui/PaginationTag";

// ASSETS
import githubIcon from "../../../assets/icons/github-icon-w.png";
import astronautH from "../../../assets/images/astronaut-2.png";

// ICONS
import { FaUserAstronaut } from "react-icons/fa6";

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
      {/* lazy-loaded scene so initial bundle doesn't block */}
      <Suspense fallback={null}>
        <PlanetHeroScene />
      </Suspense>
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

          {/* Only render the full astronaut image once it is in view.
              Add loading/decoding/fetchPriority hints for faster, non-blocking loading.
              A small placeholder div keeps layout from collapsing until the image loads. */}
          {inView ? (
            <img
              src={astronautH}
              alt="astronaut"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          ) : (
            <div aria-hidden="true" style={{ width: 48, height: 48 }} />
          )}
        </AstronautMini>
      </ScrollToExplore>
    </div >
  );
}

export default Home;
