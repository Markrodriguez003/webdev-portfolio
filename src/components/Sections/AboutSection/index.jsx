import HeaderBorderBox from "../../ui/HeaderBorderBox";
import { TechnologiesSkillsBar, FutureTechSkillsBar } from "../../ui/SkillBars";
// ? Notes:
// ? https://www.youtube.com/watch?v=h4227nm08G8
// ? https://codepen.io/yomateo/pen/ypbNrJ
// STYLES
import {
  SectionContainer,
  LeftHeaderColumn,
  RightColumnPanel,
} from "../Sections.design";

import { BiSolidInvader } from "react-icons/bi";
function AboutSection() {
  return (
    <>
      <SectionContainer>
        {/* // todo: move this to another component */}
        <LeftHeaderColumn>
          <HeaderBorderBox props={{ type: "planets", title: "ABOUT" }} />
          <p>Here is some information about me.</p>
        </LeftHeaderColumn>
        <RightColumnPanel>
          <h1 id="inverted-header">Coding and beyond..</h1>
          <p>
            I have been studying web development coding for 3 years and my
            interest has only grown in the field! I want to continue to expand
            on my knowledge by learning more about AI, back end development and
            managing databases. One of my dream goals would be to code my own
            game and release it!{" "}
            <BiSolidInvader
              size={"1.2em"}
              style={{ verticalAlign: "bottom" }}
            />
          </p>{" "}
          <br />
          <h2 id="normal-header">
            Some of the technologies & skills I have acquired:{" "}
          </h2>
          <TechnologiesSkillsBar />
          <br />
          <h2 id="normal-header">
            Current technologies currently being unpacked:{" "}
          </h2>
          <FutureTechSkillsBar />
          <br />
          <h2 id="inverted-header">Besides coding...</h2>
          <p>
            I am also a musician who likes to spend his time writing music. I am
            into many different styles. I also like to write and currently
            working on a sci-fi novel.
          </p>
        </RightColumnPanel>
      </SectionContainer>
    </>
  );
}

export default AboutSection;
