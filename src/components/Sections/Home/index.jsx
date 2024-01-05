import {
  WelcomeContainer,
  IntroductionContainer,
  NavContainer,
} from "../Home/Home.design.js";
import PlanetHeroScene from "../../ui/PlanetHeroScene/index.jsx";
import githubIcon from "../../../assets/icons/github-icon-w.png";
import SoundMeter from "../../ui/HeaderAnimations/SoundMeter.jsx";
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
          <h1>WELCOME</h1>

          <p>
            My name is Mark Rodriguez 👋 & I am a full stack developer. Take a
            look at my projects & please do not hesistate to contact me!
          </p>
          <p>
            <img
              src={githubIcon}
              width={"20px"}
              height={"20px"}
              style={{ paddingRight: "10px" }}
            />
            Github: <a> Github.com/markrodriguez003</a>
          </p>
          <p>
            <img
              src={githubIcon}
              width={"20px"}
              height={"20px"}
              style={{ paddingRight: "10px" }}
            />
            Resume: <a href="#"> View</a> | <a href="#"> Download</a>
          </p>
        </WelcomeContainer>
      </IntroductionContainer>

      <SoundMeter />

      <span style={{ color: "grey", fontFamily: "body" }}>
        SCROLL TO EXPLORE
      </span>
    </>
  );
}

export default Home;
