// REACT
import { forwardRef } from "react";

// STYLING / STYLED COMPONENTS
import {
  SectionContainer,
  LeftHeaderColumn,
  RightColumnPanel,
  HeaderDetailsPanel,
} from "../Sections.design";
import { AboutDetailsPanel } from "./AboutSection.design";

// ICONS
import { FaRegEnvelope } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";
import { BiSolidInvader } from "react-icons/bi";

// COMPONENTS
import PaginationTag from "../../ui/PaginationTag";
import { TechnologiesSkillsBar, FutureTechSkillsBar } from "../../ui/SkillBars";
import HeaderBorderBox from "../../ui/HeaderBorderBox";
import AnimatedHeader from "../../ui/AnimatedHeader";

// ASSETS
import githubIcon from "../../../assets/icons/github-icon-w.png";

// ? NOTES
// ? https://www.youtube.com/watch?v=h4227nm08G8
// ? https://codepen.io/yomateo/pen/ypbNrJ

function AboutSectionComp({ props }, ref) {
  return (
    <div ref={ref}>
      <SectionContainer>
        {/* // todo: move this to another component */}
        <LeftHeaderColumn>
          <HeaderBorderBox props={{ type: "waves", title: "ABOUT" }} />
          <HeaderDetailsPanel>
            <p>
              Here is some information about me. I hope you find it interesting!
            </p>
            <br />
            <p id="resume-about">
              <LuMenuSquare
                style={{ verticalAlign: "center", paddingRight: "5px" }}
              />
              Resume: <a href="#">View</a> | <a href="#">Download</a>
            </p>
            <br />
            <p id="github-about">
              <img
                src={githubIcon}
                width={"20px"}
                height={"20px"}
                style={{ paddingRight: "10px" }}
              />
              Github: github.com/MarkRodriguez003
            </p>
          </HeaderDetailsPanel>
        </LeftHeaderColumn>
        <RightColumnPanel>
          <AboutDetailsPanel>
            <h1 id="inverted-header">
              <AnimatedHeader title={"Coding and beyond.."} />
            </h1>
            <p>
              I have been studying web development coding for 3 years and my
              interest has only grown in the field! I want to continue to expand
              on my knowledge by learning more about AI, back end development
              and managing databases. I love to research and continue to learn
              new concepts. One of my dream goals would be to code my own game
              and release it!{" "}
              <BiSolidInvader
                size={"1.2em"}
                style={{ verticalAlign: "bottom" }}
              />
            </p>{" "}
            <br />
            <h2 id="normal-header">Technological skills I have acquired:</h2>
            <TechnologiesSkillsBar />
            <br />
            <h2 id="normal-header">Technologies currently being unpacked:</h2>
            <FutureTechSkillsBar />
            <br />
            <h2 id="inverted-header">Besides coding...</h2>
            <p>
              I love all things art! I am a musician who likes to spend his time
              writing and producing music of various genres. In addition to
              music I also moonlight as an writer of sci-fi and fantasy novels.
            </p>
          </AboutDetailsPanel>
        </RightColumnPanel>
      </SectionContainer>
    </div>
  );
}

export const AboutSection = forwardRef(AboutSectionComp);
