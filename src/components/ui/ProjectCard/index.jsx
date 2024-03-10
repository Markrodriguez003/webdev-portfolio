/* eslint-disable react/prop-types */
// NOTES
{/* // ! https://stackoverflow.com/questions/73653819/pause-other-videos-when-slide-is-changed-swiper-js-react-player */}

// STYLED COMPONENTS
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ProjectBlurb,
  ProjectSwiper,
  ProjectSwiperSlide,
  ProjectVideo,
} from "./ProjectCard.design";

// REACT
import { useState } from "react";

// NPM LIBRARIES
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import ReactPlayer from "react-player";

// CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//COMPONENTS
import Accordion from "../Accordion";
import SiteButton from "../SiteButton";
import TechnologiesPanel from "../TechnologiesPanel";
import TechniquesPanel from "../TechniquesPanel";
// ICONS
import { IoLogoYoutube } from "react-icons/io5";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { FaUserAstronaut } from "react-icons/fa";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

// IMAGES
import saseoA from "../../../assets/images/site-screenshots/Saseo-1.png";
import saseoB from "../../../assets/images/site-screenshots/Saseo-2.png";
import saseoC from "../../../assets/images/site-screenshots/Saseo-3.png";
function ProjectCard({ props }) {
  const {
    title,
    subHeader,
    content,
    youtube,
    github,
    website,
    technologies,
    techniques,
    images,
    video,
  } = props;

  const [technologyToggle, setTechnologyToggle] = useState(false);
  const [techniqueToggle, setTechniqueToggle] = useState(false);

  function TechnologiesInfoClick(event) {
    setTechnologyToggle((prev) => !technologyToggle);
    setTechniqueToggle((prev) => false);
  }

  function TechniquesInfoClick(event) {
    setTechniqueToggle((prev) => !techniqueToggle);
    setTechnologyToggle((prev) => false);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Card>
          <CardHeader>
            <h2>{title}</h2>
            <small> {subHeader}</small>
          </CardHeader>
          <CardBody>
            <TechnologiesPanel togglePanel={technologyToggle} />
            <TechniquesPanel togglePanel={techniqueToggle} />
            <ProjectSwiper
              slidesPerView={1}
              simulateTouch={true}
              speed={"385"}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              rewind={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
            >
              {images.map((item, count) => {
                return (
                  <ProjectSwiperSlide key={title + "-image-" + count}>
                    <img src={item} class={"project-card-site-image"} alt={"image-" + count} />
                  </ProjectSwiperSlide>
                );
              })}



              <ProjectSwiperSlide>
                <ProjectVideo>
                  <ReactPlayer
                    url={video}
                    controls={true}
                    width="100%"
                    height="470px"
                  />
                </ProjectVideo>
              </ProjectSwiperSlide>
            </ProjectSwiper>

            <ProjectBlurb>
              <section>
                <p>{content}</p>
              </section>
              <br />
            </ProjectBlurb>
            <CardFooter>
              <span onClick={(event) => TechnologiesInfoClick(event)}>
                <SiteButton
                  type="button"
                  title="Technologies"
                  icon={<FaUserAstronaut />}
                />
              </span>
              <span onClick={(event) => TechniquesInfoClick(event)}>
                <SiteButton
                  type="button"
                  title="Techniques"
                  icon={<HiOutlineWrenchScrewdriver />}
                />
              </span>
              <span style={{ fontSize: "30px", padding: "0px 8px" }}>|</span>
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
            </CardFooter>
          </CardBody>

          {/* <Accordion props={props} /> */}
        </Card>
      </div>
    </>
  );
}

export default ProjectCard;
