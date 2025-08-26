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
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// ICONS
import {
  FaRegEnvelope,
  FaYoutube,
  FaSatellite,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
} from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { BiSolidInvader } from "react-icons/bi";
import { PiKeyReturnBold } from "react-icons/pi";

// COMPONENTS
import PaginationTag from "../../ui/PaginationTag";
import {
  TechnologiesSkillsBar,
  FutureTechSkillsBar,
  TechnologiesBar,
} from "../../ui/SkillBars";
import HeaderBorderBox from "../../ui/HeaderBorderBox";
import AnimatedHeader from "../../ui/AnimatedHeader";
import SiteButton from "../../ui/SiteButton";
import {
  ModalOuterContainer,
  ModalExitBtn,
} from "../ContactSection/ContactSection.Design";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation, EffectCube } from "swiper/modules";

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
            <p id="github-about">
              <a
                href="https://github.com/Markrodriguez003"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={githubIcon}
                  width={"20px"}
                  height={"20px"}
                  style={{ paddingRight: "10px" }}
                />
                Github
              </a>
            </p>
            <br />
            <p id="resume-about">
              <CgFileDocument
                style={{ verticalAlign: "center", paddingRight: "5px" }}
              />
              Resume: <a onClick={(event) => pdfModalClick(event)}>View</a> |{" "}
              <a href={resume} download={resume}>
                Download
              </a>
            </p>
            <br />
            <p id="resume-about">
              <a
                href={"https://www.youtube.com/@modulatorstudios"}
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube
                  style={{ verticalAlign: "center", paddingRight: "5px" }}
                />
                Youtube{" "}
              </a>
            </p>
          </HeaderDetailsPanel>
        </LeftHeaderColumn>
        <RightColumnPanel>
          <Swiper
            direction="horizontal"
            effect={"cube"}
            slidesPerView={1}
            // navigation={true}
            // loop={true}
            grabCursor={true}
            allowTouchMove={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 0,
              shadowScale: 0.02,
            }}
            speed={900}
            pagination={false}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
            style={{
              backgroundColor: "transparent",
              width: "62.5vw",
              height: "84vh",
              marginTop: "0px",
            }}
          >
            {/* //todo: INJECT THIS INTO A DATA JSON AND MAP IT OUT */}
            <SwiperSlide>
              <AboutDetailsPanel>
                <h1 id="inverted-header">
                  <AnimatedHeader title={"Coding and beyond.."} />
                </h1>
                <p id="main-about">
                  {" "}
                  I am a growth-oriented full stack web developer with
                  comprehensive experience building websites and web apps that
                  include designing, testing, maintaining, and implementing
                  backend-to-frontend integration. Web development is a complex
                  field in which I strive to deliver quality solutions to any
                  technical problem and aim to be a team-oriented asset that can
                  be depended on in any situation. Proven ability to learn and
                  adapt quickly to new technologies and strive to stay updated
                  with industry trends. I would love to have the opportunity to
                  help and grow with a team that cares deeply about their work.
                  <FaSatellite
                    size={"1.2em"}
                    style={{ verticalAlign: "bottom" }}
                  />
                </p>{" "}
                <br />
                <h2 id="normal-header">
                  Technological skills I have acquired:
                </h2>
                <TechnologiesSkillsBar />
                <br />
                <h2 id="normal-header">
                  Technologies currently being unpacked:
                </h2>
                <FutureTechSkillsBar />
                <br />
                <br />
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>1/3</span>
                  <SiteButton
                    type=""
                    // url="https://www.youtube.com"
                    styling="inverted"
                    title="More"
                    icon={<FaArrowAltCircleRight />}
                  />
                </div>
              </AboutDetailsPanel>
            </SwiperSlide>
            <SwiperSlide>
              <AboutDetailsPanel>
                <h1 id="inverted-header">
                  <AnimatedHeader title={"Tools & More.."} />
                </h1>
                <p id="about-secondary">
                  Developers need tools to build their projects, and I love all
                  things related to software development. I enjoy exploring new
                  libraries, frameworks, and technologies that can enhance my
                  workflow and improve the quality of my code. Whether it's a
                  new JavaScript library or a powerful design tool, I'm always
                  eager to learn and integrate new tools into my development
                  process. 
                </p>
                <br />
                <p id="about-secondary">
                  I am interested in game development and exploring new
                  technologies such as AI. I hope to incorporate more AI
                  elements into my projects in the future.
                </p>
                <br />

                <h2 id="inverted-header">
                  Technological tools I have utilized to build my projects:
                </h2>
                <TechnologiesBar />
                <br />
                <br />
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <SiteButton
                    type=""
                    // url="https://www.youtube.com"
                    styling="inverted"
                    title="Back"
                    icon={<FaArrowAltCircleLeft />}
                  />
                  <span>2/3</span>
                  <SiteButton
                    type=""
                    // url="https://www.youtube.com"
                    styling="inverted"
                    title="More"
                    icon={<FaArrowAltCircleRight />}
                  />
                </div>
              </AboutDetailsPanel>
            </SwiperSlide>
            <SwiperSlide>
              <AboutDetailsPanel>
                <h1 id="inverted-header">
                  <AnimatedHeader title={"Besides coding.."} />
                </h1>
                <p id="about-secondary">
                  While I am passionate about web development, I love all things
                  art! I am a musician who likes to spend his time writing and
                  performing music of various genres. In addition to music I
                  also moonlight as an writer of sci-fi and fantasy novels. My parents are of Spanish descent and trying to learn Spanish when I have the time. 
                  I am currently dabbling with Godot engine. One of my dream goals
                  would be to code my own game and release it!{" "}
                  <BiSolidInvader
                    size={"1.2em"}
                    style={{ verticalAlign: "bottom" }}
                  />
                </p>
                <br />

                <h2 id="normal-header">Some of my music:</h2>
                {/* <TechnologiesSkillsBar /> */}
                <br />
                <br />
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <SiteButton
                    type=""
                    // url="https://www.youtube.com"
                    styling="inverted"
                    title="Back"
                    icon={<FaArrowAltCircleLeft />}
                  />
                  <span>3/3</span>
                </div>
              </AboutDetailsPanel>
            </SwiperSlide>
          </Swiper>
          {/* // ! RESUME & GITHUB HERE */}
          <MiniAboutInfoPanel>
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
                rel="noreferrer"
              >
                <span style={{ fontSize: "16px" }}>
                  {" "}
                  Github: github.com/MarkRodriguez003
                </span>
              </a>
            </p>
            <br />
            <p id="resume-about">
              <CgFileDocument
                style={{ verticalAlign: "center", paddingRight: "5px" }}
              />
              Resume:
              <a href={resume} download={resume}>
                Download
              </a>
            </p>
            <br />
          </MiniAboutInfoPanel>
        </RightColumnPanel>
      </SectionContainer>
    </div>
  );
}

export const AboutSection = forwardRef(AboutSectionComp);
