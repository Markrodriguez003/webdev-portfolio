/* eslint-disable react/prop-types */
// NOTES
{
  /* // ! https://stackoverflow.com/questions/73653819/pause-other-videos-when-slide-is-changed-swiper-js-react-player */
}

// ? https://css-tricks.com/aspect-ratio-boxes/
// ? https://stackoverflow.com/questions/55642502/how-to-stop-react-player-from-playing-when-close-modal
// ? https://github.com/cookpete/react-player/issues/1152

// STYLED COMPONENTS
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ProjectBlurb,
  ProjectVideo,
  CarouselContainer,
} from "./FullProjectCard.design";

// REACT
import { useState, useEffect, useRef } from "react";

// NPM LIBRARIES

import ReactPlayer from "react-player";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { Carousel } from "react-responsive-carousel";

// CSS
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//COMPONENTS
import Accordion from "../Accordion";
import SiteButton from "../SiteButton";
import TechnologiesPanel from "../TechnologiesPanel";
import TechniquesPanel from "../TechniquesPanel";
import AnimatedHeader from "../AnimatedHeader";

// ICONS
import { IoLogoYoutube } from "react-icons/io5";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { FaUserAstronaut } from "react-icons/fa";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

// CSS
import "./ProjectCard.styles.css";

// IMAGES
import saseoA from "../../../assets/images/site-screenshots/Portfolio.png";
import saseoB from "../../../assets/images/site-screenshots/Saseo-2.png";
import saseoC from "../../../assets/images/site-screenshots/Saseo-3.png";

function FullProjectCard({ props }) {
  const {
    title,
    subHeader,
    content,
    github,
    website,
    technologies,
    techniques,
    images,
    video,
  } = props;

  // console.log(`RETRIEVED PROJECT!`, props);
  // VIDEO REF
  const videoRef = useRef();

  // HANDLES TOGGLE DATA OF ADDITIONAL PROJECT SITE PANELS
  const [technologyToggle, setTechnologyToggle] = useState(false);
  const [techniqueToggle, setTechniqueToggle] = useState(false);

  // HANDLES IMAGE LIGHTBOX
  const [open, setOpen] = useState(false);

  // LIGHTBOX SETTINGS
  const [showToggle, setShowToggle] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // HANDLES PLAY FUNCTIONALITY OF VIDEO PLAYER
  useEffect(() => {
    if (currentSlide != images.length) {
      setPlayVideo(() => false);
    }
  }, [currentSlide, setCurrentSlide, images, setPlayVideo, playVideo]);

  // TOGGLES TECNHOLOGY INFO PANEL FOR INDIVIDUAL PROJECT SITE
  function TechnologiesInfoClick(event) {
    setTechnologyToggle((prev) => !technologyToggle);
    setTechniqueToggle((prev) => false);
  }

  // TOGGLES TECHIQUES INFO PANEL FOR INDIVIDUAL PROJECT SITE
  function TechniquesInfoClick(event) {
    setTechniqueToggle((prev) => !techniqueToggle);
    setTechnologyToggle((prev) => false);
  }

  return (
    <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: saseoA }, { src: saseoB }, { src: saseoC }]}
        plugins={[Thumbnails]}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
          border: 1,
          borderRadius: 4,
          padding: 4,
          gap: 16,
          showToggle,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Card>
          <CardHeader>
            <div>
              <h2>
                <AnimatedHeader title={title} />
              </h2>
              <br />
              <small>
                {" "}
                <AnimatedHeader title={subHeader} />
              </small>
            </div>
            <div id="project-button-container">
              <SiteButton
                type="anchor"
                url="https://www.github.com"
                styling="github"
                title="Github"
                icon={<BsGithub />}
              />
              <SiteButton
                type="anchor"
                url="https://www.nhl.com"
                styling="website"
                title="Website"
                icon={<BsGlobe />}
              />
              <SiteButton
                type="anchor"
                url="https://www.youtube.com"
                styling="youtube"
                title="Youtube"
                icon={<IoLogoYoutube />}
              />
            </div>
          </CardHeader>
          <CardBody>
            {/* <TechnologiesPanel togglePanel={technologyToggle} />
            <TechniquesPanel togglePanel={techniqueToggle} /> */}

            <CarouselContainer
              showThumbs={false}
              showIndicators={true}
              showArrows={true}
              swipeable={true}
              emulateTouch={true}
              dynamicHeight={true}
              showStatus={false}
              onChange={(props) => {
                setCurrentSlide(parseInt(props));
              }}
              onClickItem={(props) => {
                setOpen(true);
              }}
            >
              {images.map((item, count) => {
                return (
                  <img
                    src={item}
                    key={title + "-image-" + count}
                    alt={"image-" + count}
                  />
                );
              })}

              <ProjectVideo>
                <ReactPlayer
                  key={`youtube-video:` + title + video}
                  url={video}
                  controls={true}
                  playing={playVideo}
                  onPlay={() => setPlayVideo(true)}
                  onPause={() => setPlayVideo(false)}
                  ref={videoRef}
                  width="100%"
                  height="100%"
                />
              </ProjectVideo>
            </CarouselContainer>

            <ProjectBlurb>
              <section>
                <p>{content}</p>
              </section>
              <br />
              <section>
                <p>
                  <strong>Technologies used:</strong>{" "}
                  {technologies.map((tech) => {
                    return `${tech} | `;
                  })}
                </p>
              </section>
              <br />
            </ProjectBlurb>
          </CardBody>
          <CardFooter>
            <div>
              <SiteButton
                type="anchor"
                url="https://www.github.com"
                styling="github"
                title="Github"
                icon={<BsGithub />}
              />
              <SiteButton
                type="anchor"
                url="https://www.nhl.com"
                styling="website"
                title="Website"
                icon={<BsGlobe />}
              />
              <SiteButton
                type="anchor"
                url="https://www.youtube.com"
                styling="youtube"
                title="Youtube"
                icon={<IoLogoYoutube />}
              />
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default FullProjectCard;
