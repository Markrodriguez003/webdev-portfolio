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
  CardProjectImage,
} from "./FullProjectCard.design";

// REACT
import { useState, useEffect, useRef } from "react";

// NPM LIBRARIES

import ReactPlayer from "react-player";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { Swiper, SwiperSlide } from "swiper/react";

// CSS
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProjectCard.styles.css";

//COMPONENTS
import Accordion from "../Accordion";
import SiteButton from "../SiteButton";
import AnimatedHeader from "../AnimatedHeader";
import { Pagination, Navigation } from "swiper/modules";

// ICONS
import { IoLogoYoutube } from "react-icons/io5";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { FaUserAstronaut } from "react-icons/fa";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

// CSS
import "./ProjectCard.styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// UTILS
import { getImageURL, getImageURLArray } from "../../../ultils/images-util";

export function FullProjectCard({ props }) {
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

  return (
    <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={getImageURLArray(images)}
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
                url={github}
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
            <Swiper
              slidesPerView={1}
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
              style={{
                width: "62.5vw",
                height: "auto",
              }}
            >
              {images.map((item, count) => {
                return (
                  <SwiperSlide key={("swiper-slide+", count)}>
                    <CardProjectImage
                      src={getImageURL(item)}
                      key={title + "-image-" + count}
                      alt={"image-" + count}
                      onClick={(props) => {
                        setOpen(true);
                      }}
                    />{" "}
                  </SwiperSlide>
                );
              })}
              {/*<SwiperSlide>
                 <ProjectVideo>
                  <ReactPlayer
                    key={`youtube-video:` + title + video}
                    url={video}
                    controls={true}
                    playing={playVideo}
                    onPlay={() => setPlayVideo(true)}
                    onPause={() => setPlayVideo(false)}
                    ref={videoRef}
                    height="425px"
                    width="675px"
                  />
                </ProjectVideo>{" "}  
              </SwiperSlide>*/}
            </Swiper>
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

export function MiniProjectCard({ props }) {
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

  return (
    <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={getImageURLArray(images)}
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
            <CardProjectImage
              src={getImageURL(images[0])}
              key={title + "-image-" + images[0]}
              alt={"image-" + images[0]}
              onClick={(props) => {
                setOpen(true);
              }}
            />

            {/* <ProjectVideo>
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
                </ProjectVideo>{" "} */}
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

// export default FullProjectCard;
