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
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// CSS
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProjectCard.styles.css";

//COMPONENTS
import Accordion from "../Accordion";
import SiteButton from "../SiteButton";
import AnimatedHeader from "../AnimatedHeader";
import { Pagination, Navigation, EffectCube } from "swiper/modules";

// ICONS
import { IoLogoYoutube } from "react-icons/io5";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { BiSolidInvader, BiSolidPlanet } from "react-icons/bi";
import { TbAlienFilled, TbGalaxy, TbUfo } from "react-icons/tb";
import { PiMoonStarsFill } from "react-icons/pi";
import { SiMoonrepo } from "react-icons/si"
import { FaUserAstronaut, FaSatellite, FaSatelliteDish, FaRocket, FaCube, FaTools, FaStar, FaCog, FaScrewdriver, FaKeyboard } from "react-icons/fa";
import { GiMoonOrbit } from "react-icons/gi";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { MdSatelliteAlt } from "react-icons/md";
// CSS
import "./ProjectCard.styles.css";
import "swiper/css";
import 'swiper/css/effect-cube';
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
    site,
    technologies,
    youtube,
    techniques,
    images,
    video,
  } = props;


  // VIDEO REF
  const videoRef = useRef();
  const cubeRef = useRef(null);


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


  // INNER TECHNIQUES SWIPER CONTROL
  function ChangeSlide() {
    cubeRef.current?.slideNext();
  }




  // TECHNIQUE STYLING
  let techIconStyling = {
    verticalAlign: "bottom",
    marginRight: "5px",
    fontWeight: "bold"
  }

  // ARRAY OF ICONS FOR TECHNIQUES
  const techIcons = [
    <BiSolidInvader key="invader" style={techIconStyling} />,
    <FaUserAstronaut key="astronaut" style={techIconStyling} />,
    <HiOutlineWrenchScrewdriver key="screwdriver" style={techIconStyling} />,
    <FaSatellite key="satellite" style={techIconStyling} />,
    <FaSatelliteDish key="satellite2" style={techIconStyling} />,
    <FaRocket key="satellite2" style={techIconStyling} />,
    <FaTools key="satellite2" style={techIconStyling} />,
    <FaScrewdriver key="satellite2" style={techIconStyling} />,
    <FaStar key="satellite2" style={techIconStyling} />,
    <FaCog key="satellite2" style={techIconStyling} />,
    <FaCube key="satellite2" style={techIconStyling} />,
    <TbAlienFilled key="satellite2" style={techIconStyling} />,
    <TbUfo key="satellite2" style={techIconStyling} />,
    <TbGalaxy key="satellite2" style={techIconStyling} />,
    <PiMoonStarsFill key="satellite2" style={techIconStyling} />,
    <SiMoonrepo key="satellite2" style={techIconStyling} />,
    <GiMoonOrbit key="satellite2" style={techIconStyling} />,
    <BiSolidPlanet key="satellite2" style={techIconStyling} />,
    <MdSatelliteAlt key="satellite2" style={techIconStyling} />,
  ]


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
            <div id="project-button-container"  >
              {github !== "#" ? (
                <SiteButton
                  type="anchor"
                  url={github}
                  styling="github"
                  title="Github"
                  icon={<BsGithub />}
                />
              ) : (
                <></>
              )}

              {site !== "#" ? (
                <SiteButton
                  type="anchor"
                  url={site}
                  styling="website"
                  title="Website"
                  icon={<BsGlobe />}
                />
              ) : (
                <></>
              )}

              {youtube !== "#" ? (
                <SiteButton
                  type="anchor"
                  url={youtube}
                  styling="youtube"
                  title="Youtube"
                  icon={<IoLogoYoutube />}
                />
              ) : (
                <></>
              )}

              <span onClick={ChangeSlide}>

                <SiteButton
                  type=""
                  styling="youtube"
                  title="Techniques Used"

                  icon={<FaUserAstronaut />}
                />
              </span>
            </div>
          </CardHeader>
          <CardBody>


            <Swiper
              direction="vertical"
              effect={'cube'}
              loop={true}
              grabCursor={false}
              allowTouchMove={false}
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
              onBeforeInit={(swiper) => {
                cubeRef.current = swiper;
              }}



            >

              <SwiperSlide>
                <Swiper
                  slidesPerView={1}
                  navigation={true}
                  grabCursor={false}
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
                      </SwiperSlide>
                    );
                  })}


                  {/*  // ? YOUTUBE VIDEO  */}
                  {/*  // ! FIX  */}
                  {/* {youtube !== "#" ? (
                      <SwiperSlide>
                        <ProjectVideo>
                            <ReactPlayer
                              key={`youtube-video:` + title + video}
                              url={video}
                              controls={true}
                              playing={playVideo}
                              onPlay={() => setPlayVideo(true)}
                              onPause={() => setPlayVideo(false)}
                              ref={videoRef}
                              height="525px"
                              width="775px"
                         />
                         </ProjectVideo>{" "}
                         </SwiperSlide>
                         ) : (
                         <></>
                         )} */}
                </Swiper>
              </SwiperSlide>
              <SwiperSlide>
                <br />

                <h1 style={{ verticalAlign: "bottom", }}><FaKeyboard size={40} style={{ paddingRight: "10px", verticalAlign: "bottom" }} />Techniques used:</h1>
                <ul style={{ textAlign: "left", display: "flex", flexDirection: "column", listStylePosition: "outside", float: "left", listStyle: "none", gap: "10px", justifyContent: "start", alignContent: "start", alignItems: "start", padding: "50px" }}>
                  {techniques.map((tech) => {
                    return (
                      <li key={tech + "list-item"} style={{ listStylePosition: "outside", float: "left" }}>{techIcons[Math.floor(Math.random() * techIcons.length)]} {tech}</li>
                    );
                  })}
                </ul>
              </SwiperSlide>

            </Swiper>

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
              <SiteButton
                type=""
                styling="youtube"
                title="Techniques Used"
              // icon={<IoLogoYoutube />}
              />

            </div>
          </CardFooter>
        </Card>
      </div >
    </>
  );
}

export function MiniProjectCard({ props }) {
  const {
    title,
    subHeader,
    content,
    github,
    site,
    technologies,
    youtube,
    techniques,
    images,
    video,
  } = props;

  // VIDEO REF
  const videoRef = useRef();

  // INNER PROJECT TECHNIQUES SWIPER REF
  const techniqueRef = useRef();

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
              <h2 style={{ fontWeight: "bold !important", letterSpacing: "0px !important" }}>
                <AnimatedHeader title={title} />
              </h2>
              <br />
              <small>
                {" "}
                <AnimatedHeader title={subHeader} />
              </small>
            </div>
            <div id="project-button-container">
              {github !== "#" ? (
                <SiteButton
                  type="anchor"
                  url={github}
                  styling="github"
                  title="Github"
                  icon={<BsGithub />}
                />
              ) : (
                <></>
              )}

              {site !== "#" ? (
                <SiteButton
                  type="anchor"
                  url={site}
                  styling="website"
                  title="Website"
                  icon={<BsGlobe />}
                />
              ) : (
                <></>
              )}
              {youtube !== "#" ? (
                <SiteButton
                  type="anchor"
                  url={youtube}
                  styling="youtube"
                  title="Youtube"
                  icon={<IoLogoYoutube />}
                />
              ) : (
                <></>
              )}
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
              {github !== "#" ? (
                <SiteButton
                  type="anchor"
                  url={github}
                  styling="github"
                  title="Github"
                  icon={<BsGithub />}
                />
              ) : (
                <></>
              )}

              {site !== "#" ? (
                <SiteButton
                  type="anchor"
                  url={site}
                  styling="website"
                  title="Website"
                  icon={<BsGlobe />}
                />
              ) : (
                <></>
              )}
              {youtube !== "#" ? (
                <SiteButton
                  type="anchor"
                  url={youtube}
                  styling="youtube"
                  title="Youtube"
                  icon={<IoLogoYoutube />}
                />
              ) : (
                <></>
              )}


            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

// export default FullProjectCard;
