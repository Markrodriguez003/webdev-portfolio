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
import SpeechBubble from "../../ui/SpeechBubble/index.jsx";
// import PaginationTag from "../../ui/PaginationTag";

// ASSETS
import githubIcon from "../../../assets/icons/github-icon-w.png";

// ICONS
import { FaUserAstronaut } from "react-icons/fa6";

// REACT
import { useContext, useEffect, useRef, useState } from "react";

function Home({ children }) {
  const siteNav = useContext(navContext);


  // Astronaut dialogue options
  const dialogues = [
    "..Uh.. Houston... we have a visitor..",
    "..well...uh..this is new for me..",
    "..oh.. first contact..",
    "GREETINGS INTERSTELLAR VISITOR!",
    "...what now?",
    "uhh..",
  ]

  // Handles / cycles through home speech bubble dialogue
  const [dialogueStop, setDialogueStop] = useState(true);
  const [dialogueCount, setDialogueCount] = useState(0);
  // useEffect(() => {
  //   let count = 0;
  //   const dialogueTimer = setInterval(
  //     () => {
  //       if (dialogueCount !== 5) {
  //         setDialogueCount((prevCount) => prevCount + 1);
  //         console.log("dialogueCount is " + dialogueCount);
  //       } else {

  //         setDialogueCount(0);
  //       }

  //     }, 3000);


  //   if (!dialogueStop) {
  //     clearTimeout(dialogueTimer);
  //   } else {
  //     dialogueTimer;

  //   }
  //   // return (() => {
  //   //   clearTimeout(dialogueTimer);
  //   // })
  // }, [dialogueStop, setDialogueStop])

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
              <a onClick={() => { setDialogueStop(false), siteNav.goToSlide(1) }}>ABOUT</a>
            </li>
            <li>
              <a href="#projects" onClick={() => { setDialogueStop(false), siteNav.goToSlide(2) }}>
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => { setDialogueStop(false), siteNav.goToSlide(1) }}>
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
        <div style={{ position: "relative", display: "inline-block", width: "100%", height: "auto", background: "red" }}>
          <div style={{ position: "absolute", direction: "column", bottom: "195px", left: "135px", height: "100px", width: "200px" }}>
            <SpeechBubble direction="bottom-left">  {dialogues[dialogueCount]}</SpeechBubble>
          </div>

          <AstronautMini />
        </div>
        <AstronautMini />
        <span>SCROLL TO EXPLORE</span>
      </ScrollToExplore>
    </div>
  );
}

export default Home;
