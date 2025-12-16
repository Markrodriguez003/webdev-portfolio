// REACT
import { useState, useEffect, forwardRef } from "react";

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
import "./About.css";

// ICONS
import {
  FaRegEnvelope,
  FaYoutube,
  FaSatellite,
  FaLinkedin,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
} from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { BiSolidInvader } from "react-icons/bi";
import { PiKeyReturnBold } from "react-icons/pi";
import { FaPhotoFilm } from "react-icons/fa6";

// LIBRARY
import ReactPlayer from "react-player";

// COMPONENTS
import Accordion from "../../ui/Accordion";
import AudioPlayer from "../../ui/AudioPlayer";
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
import AlienScarface from "../../../assets/music/Alien Scarface.mp3";
import AstralMathematics from "../../../assets/music/Astral Mathematics.mp3";
import SpaceArbys from "../../../assets/music/Here at Space Arbys.mp3";
import Wormhole from "../../../assets/music/Into the Wormhole again.mp3";
import SpaceAdventure from "../../../assets/music/Space adventure 142F.mp3";
import TechnicalDifficulties from "../../../assets/music/Technical difficulties.mp3";
const videogameDemo = "https://youtu.be/NEC0p5t25r8";

// Playlist as objects so each track has a display title
const playlist = [
  { src: AstralMathematics, title: "Astral Mathematics" },
  { src: SpaceArbys, title: "Here at Space Arby's" },
  { src: AlienScarface, title: "Alien Scarface" },
  { src: Wormhole, title: "Into the Wormhole Again" },
  { src: SpaceAdventure, title: "Space Adventure 142F" },
  { src: TechnicalDifficulties, title: "Technical Difficulties" },
];

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
  const [currentTrack, setTrackIndex] = useState(0);
  const [pdfModal, setPdfModal] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const [showMobileAudioPlayer, setShowMobileAudioPlayer] = useState(false);
  const [isTinyMobile, setIsTinyMobile] = useState(window.innerWidth < 450);

  const handleClickNextTrack = () => {
    console.log("click next");
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleEnd = () => {
    console.log("end");
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };

  useEffect(() => {
    function handleResize() {
      setIsTinyMobile(window.innerWidth < 450);
      setIsMobile(window.innerWidth <= 1200);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function pdfModalClick(event) {
    setPdfModal(!pdfModal);
  }

  // Handlers for next/prev
  const handleNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };
  const handlePrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  // Panels content (to avoid duplication)
  const panels = [
    <AboutDetailsPanel key="panel-1-about">
      <h1
        id="inverted-header"
        style={{ textAlign: isMobile ? "center" : "center" }}
      >
        <AnimatedHeader title={"Coding and beyond.."} />
      </h1>
      <p id="main-about">
        {" "}
        I am a growth-oriented full stack web developer with comprehensive
        experience building websites and web apps that include designing,
        testing, maintaining, and implementing backend-to-frontend integration.
        Web development is a complex field in which I strive to deliver quality
        solutions to any technical problem and aim to be a team-oriented asset
        that can be depended on in any situation. Proven ability to learn and
        adapt quickly to new technologies and strive to stay updated with
        industry trends. I would love to have the opportunity to help and grow
        with a team that cares deeply about their work.{" "}
        <FaSatellite size={"1.2em"} style={{ verticalAlign: "bottom" }} />
      </p>{" "}
      <br />
      <h2
        id="normal-header"
        style={{ textAlign: isMobile ? "center" : "center" }}
      >
        Technological skills I have acquired:
      </h2>
      <TechnologiesSkillsBar />
      <br />
      <h2
        id="normal-header"
        style={{ textAlign: isMobile ? "center" : "center" }}
      >
        Technologies currently being unpacked:
      </h2>
      <FutureTechSkillsBar />
      {!isMobile && (
        <div
          style={{
            display: "flex",
            paddingTop: "15px",
            justifyContent: "center",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <span style={{ minWidth: 48, textAlign: "center" }}>1/3</span>
          <span
            className="shake-animation-horizontal"
          >
            <SiteButton
              type="button"
              styling="inverted"
              title="Next"
              icon={<FaArrowAltCircleRight />}
              onClick={handleNext}
            />
          </span>
        </div>
      )}
    </AboutDetailsPanel>,
    <AboutDetailsPanel key="panel-2">
      <h1
        id="inverted-header"
        style={{ textAlign: isMobile ? "center" : "center" }}
      >
        <AnimatedHeader title={"Tools & More.."} />
      </h1>
      <p id="about-secondary">
        Developers need tools to build their projects, and I love all things
        related to software development. I enjoy exploring new libraries,
        frameworks, and technologies that can enhance my workflow and improve
        the quality of my code. Whether it's a new JavaScript library or a
        powerful design tool, I'm always eager to learn and integrate new tools
        into my development process.
      </p>
      <br />
      <p id="about-secondary">
        I am interested in game development and exploring new technologies such
        as AI. I hope to incorporate more AI elements into my projects in the
        future.
      </p>
      <br />
      <h2
        id="inverted-header"
        style={{ textAlign: isMobile ? "center" : "center" }}
      >
        Technological tools I have utilized to build my projects:
      </h2>
      <TechnologiesBar />
      <br />
      <br />
      <br />
      {!isMobile && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <SiteButton
            type="button"
            styling="inverted"
            title="Previous"
            icon={<FaArrowAltCircleLeft />}
            onClick={handlePrev}
          />
          <span style={{ minWidth: 48, textAlign: "center" }}>2/3</span>
          <SiteButton
            type="button"
            styling="inverted"
            title="Next"
            icon={<FaArrowAltCircleRight />}
            onClick={handleNext}
          />
        </div>
      )}
    </AboutDetailsPanel>,
    <AboutDetailsPanel key="panel-3">
      <h1
        id="inverted-header"
        style={{ textAlign: isMobile ? "center" : "center" }}
      >
        <AnimatedHeader title={"Besides coding.."} />
      </h1>
      <p id="about-secondary">
        While I am passionate about web development, I love all things art! I am
        a musician who likes to spend his time writing and performing music of
        various genres. In addition to music I also moonlight as an writer of
        sci-fi and fantasy novels. My parents are of Spanish descent and i'm trying
        to properly learn Spanish when I have the time. I am currently dabbling with
        Godot game engine. One of my dream goals would be to code my own game and
        release it!{" "}
        <BiSolidInvader size={"1.2em"} style={{ verticalAlign: "bottom" }} />
      </p>
      <br />
      <h2 id="normal-header" style={{ padding: "0px", margin: "0px" }}>
        <FaPhotoFilm color="white" size={"24px"} /> Media:
      </h2>
      <hr style={{ marginBottom: "16px" }} />

      <Accordion header="Music" >
        {(!isMobile || !isTinyMobile) ? (
          <AudioPlayer playlist={playlist} compact={false} />
        ) : (
          isTinyMobile ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

              <button
                style={{
                  margin: "12px auto",
                  padding: "8px 18px",
                  borderRadius: 8,
                  border: "none",
                  background: "#222",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 16,
                  cursor: "pointer",
                }}
                onClick={() => setShowMobileAudioPlayer(true)}
              >
                Play Music
              </button>
              <small>
                ALl music was written for various projects using hardware & software synthesizers, Reaper & FL Studios. No AI was used in the creation of these tracks.
              </small>
            </div>

          ) : (
            <AudioPlayer playlist={playlist} compact={false} />
          )
        )}
      </Accordion>


      <Accordion header="Video Games">
        {/* Show anchor link when Swiper is active (desktop/full size), ReactPlayer when responsive/mobile */}
        {!isMobile ? (
          <div style={{ marginTop: "8px" }} id="anchor-link-video-games">
            <a href={videogameDemo} target="_blank" rel="noreferrer">
              Watch Demo on YouTube
            </a>
            <br />
            <small>
              Learning how to create simple 2d platformer using Godot game engine. All character art was drawn by me. No AI was used.
            </small>
          </div>
        ) : (
          <div className="videoPlayerWrapper" style={{ marginTop: "8px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <ReactPlayer
              key="video-game-demo"
              url={videogameDemo}
              controls={true}
              playing={false}
              width="100%"
              height="600px"
            />
            <br />
            <small style={{ textAlign: "center" }}>
              Learning how to create simple 2d platformer using Godot game engine. All character art was drawn by me. No AI was used.
            </small>
          </div>
        )}
      </Accordion>
      <br />
      <br />
      <br />
      {!isMobile && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <SiteButton
            type="button"
            styling="inverted"
            title="Previous"
            icon={<FaArrowAltCircleLeft />}
            onClick={handlePrev}
          />
          <span style={{ minWidth: 48, textAlign: "center" }}>3/3</span>
        </div>
      )}
    </AboutDetailsPanel>,
  ];

  return (
    <div ref={ref}>
      {/* Mobile audio player at bottom */}
      {isTinyMobile && showMobileAudioPlayer && (
        <AudioPlayer
          playlist={playlist}
          compact={true}
          onClose={() => setShowMobileAudioPlayer(false)}
        />
      )}
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
        ) : null}
        {/* // todo: move this to another component */}
        <LeftHeaderColumn>
          <HeaderBorderBox props={{ type: "waves", title: "ABOUT" }} />
          <HeaderDetailsPanel>
            <p>
              Here is some information about me. From web development, technology, AI to music & video games! I hope you find it interesting!
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
            <br />
            <p>
              <a href="https://www.linkedin.com/in/ModulatorStudios" target="_blank" rel="noreferrer">
                <FaLinkedin
                  style={{ verticalAlign: "center", paddingRight: "5px" }}
                />
                LinkedIn
              </a>
            </p>
          </HeaderDetailsPanel>
        </LeftHeaderColumn>
        <RightColumnPanel>
          {isMobile ? (
            <>{panels}</>
          ) : (
            <Swiper
              direction="horizontal"
              effect={"cube"}
              slidesPerView={1}
              grabCursor={false}
              allowTouchMove={false}
              cubeEffect={{
                shadow: true,
                slideShadows: false,
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
              onSwiper={setSwiperInstance}
            >
              {panels.map((panel, idx) => (
                <SwiperSlide key={idx}>{panel}</SwiperSlide>
              ))}
            </Swiper>
          )}
          {/* // ! RESUME & GITHUB HERE */}
        </RightColumnPanel>
      </SectionContainer>
    </div>
  );
}

export const AboutSection = forwardRef(AboutSectionComp);