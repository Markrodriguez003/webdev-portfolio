// REACT
import { useState, forwardRef } from "react";

// STYLING / STYLED COMPONENTS
import {
  SectionContainer,
  LeftHeaderColumn,
  RightColumnPanel,
  HeaderDetailsPanel,
} from "../Sections.design";
import { AboutDetailsPanel, MiniAboutInfoPanel } from "./AboutSection.design";

// ICONS
import { FaRegEnvelope, FaSatellite } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";
import { BiSolidInvader } from "react-icons/bi";
import { PiKeyReturnBold } from "react-icons/pi";

// COMPONENTS
import PaginationTag from "../../ui/PaginationTag";
import { TechnologiesSkillsBar, FutureTechSkillsBar } from "../../ui/SkillBars";
import HeaderBorderBox from "../../ui/HeaderBorderBox";
import AnimatedHeader from "../../ui/AnimatedHeader";
import {
  ModalOuterContainer,
  ModalExitBtn,
} from "../ContactSection/ContactSection.Design";

// ASSETS
import githubIcon from "../../../assets/icons/github-icon-w.png";
import resume from "../../../../public/download/Mark Rodriguez - Resume.pdf";

// ? NOTES
// ? https://www.youtube.com/watch?v=h4227nm08G8
// ? https://codepen.io/yomateo/pen/ypbNrJ

function PDFViewer() {
  return (
    <div
      style={{
        backgroundColor: "darkgrey",
        marginTop: "50px",
        width: "90%",
        height: "100%",
        padding: 0,
      }}
    >
      <iframe src={resume} width="100%" height="100%" />
    </div>
  );
}

function AboutSectionComp({ props }, ref) {
  const [pdfModal, setPdfModal] = useState(false);

  function pdfModalClick(event) {
    // event.preventDefault();
    setPdfModal(!pdfModal);
  }

  return (
    <div ref={ref}>
      <SectionContainer>
        {pdfModal === true ? (
          <div style={{ height: "95vh" }}>
            <ModalOuterContainer id="#contact">
              <PDFViewer />
              <ModalExitBtn onClick={(event) => pdfModalClick(event)}>
                <PiKeyReturnBold style={{ verticalAlign: "middle" }} /> Return
              </ModalExitBtn>
            </ModalOuterContainer>
          </div>
        ) : (
          <></>
        )}
        {/* // todo: move this to another component */}
        <LeftHeaderColumn>
          <HeaderBorderBox props={{ type: "waves", title: "ABOUT" }} />
          <HeaderDetailsPanel>
            <p>
              Here is some information about me. I hope you find it interesting!
            </p>
            <br />
            {/* <p id="resume-about">
              <LuMenuSquare
                style={{ verticalAlign: "center", paddingRight: "5px" }}
              />
              Resume: <a href="#">View</a> | <a href="#">Download</a>
            </p> */}
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
            <br />
            <p id="resume-about">
              <LuMenuSquare
                style={{ verticalAlign: "center", paddingRight: "5px" }}
              />
              Resume: <a onClick={(event) => pdfModalClick(event)}>View</a> |{" "}
              <a href={resume} download={resume}>
                Download
              </a>
            </p>
          </HeaderDetailsPanel>
        </LeftHeaderColumn>
        <RightColumnPanel>
          <AboutDetailsPanel>
            <h1 id="inverted-header">
              <AnimatedHeader title={"Coding and beyond.."} />
            </h1>
            <p id="main-about">
              {" "}
              I am a growth-oriented full-stack web developer with 4 years of
              experience building websites and web apps that include designing,
              testing, maintaining, and implementing backend-to-frontend
              integration. Web development is a complex field in which I strive
              to deliver quality solutions to any technical problem and aim to
              be a team-oriented asset that can be depended on in any situation.
              I would love to have the opportunity to help and grow with a team
              that cares deeply about their work.
              <FaSatellite size={"1.2em"} style={{ verticalAlign: "bottom" }} />
            </p>{" "}
            <br />
            <h2 id="normal-header">Technological skills I have acquired:</h2>
            <TechnologiesSkillsBar />
            <br />
            <h2 id="normal-header">Technologies currently being unpacked:</h2>
            <FutureTechSkillsBar />
            <br />
            <h2 id="inverted-header">Besides coding...</h2>
            <p id="about-secondary">
              While I am passionate about web development, I love all things
              art! I am a musician who likes to spend his time writing and
              performing music of various genres. In addition to music I also
              moonlight as an writer of sci-fi and fantasy novels. One of my
              dream goals would be to code my own game and release it!{" "}
              <BiSolidInvader
                size={"1.2em"}
                style={{ verticalAlign: "bottom" }}
              />
            </p>
            {/* // ! RESUME & GITHUB HERE */}
            <MiniAboutInfoPanel>
              <br />
              <hr /> <br />
              <p id="resume-about">
                <LuMenuSquare
                  style={{ verticalAlign: "center", paddingRight: "5px" }}
                />
                Resume:{" "}
                <a href={resume} download={resume}>
                  Download
                </a>
              </p>
              <br />
              <p id="github-about">
                <img
                  src={githubIcon}
                  width={"20px"}
                  height={"20px"}
                  style={{ paddingRight: "10px" }}
                />
                <a
                  href="https://www.github.com/MarkRodriguez003"
                  target="_blank"
                >
                  <span style={{ fontSize: "16px" }}>
                    {" "}
                    Github: github.com/MarkRodriguez003
                  </span>
                </a>
              </p>
              <br />
            </MiniAboutInfoPanel>
          </AboutDetailsPanel>
        </RightColumnPanel>
      </SectionContainer>
    </div>
  );
}

export const AboutSection = forwardRef(AboutSectionComp);
