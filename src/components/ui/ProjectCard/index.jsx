/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardSiteImage,
  ProjectBlurb,
  ProjectSwiper,
  ProjectSwiperSlide,
  ProjectVideo,
} from "./ProjectCard.design";

// NPM LIBRARIES
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ReactPlayer from "react-player";
// CSS
import "swiper/css";
import "swiper/css/pagination";

//COMPONENTS
import Accordion from "../Accordion";
import SiteButton from "../SiteButton";

// ICONS
import { IoLogoYoutube } from "react-icons/io5";
import { BsGithub, BsGlobe } from "react-icons/bs";

// IMAGES
import saseoA from "../../../assets/images/site-screenshots/Saseo-1.png";
import saseoB from "../../../assets/images/site-screenshots/Saseo-2.png";
import saseoC from "../../../assets/images/site-screenshots/Saseo-3.png";
function ProjectCard({ props }) {
  //   function buttonClick(e) {
  //     e.preventDefault();
  //     return {};
  //   }

  const {
    title,
    subHeader,
    content,
    youtube,
    github,
    website,
    technologies,
    techniques,
  } = props;

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
            <ProjectSwiper
              slidesPerView={1}
              simulateTouch={true}
              speed={"385"}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              {/* <SwiperSlide>
                <img src={saseo} alt="site-screenshot" />
              </SwiperSlide> */}
              <ProjectSwiperSlide>
                <img src={saseoA} alt="site-screenshot" />
              </ProjectSwiperSlide>
              <ProjectSwiperSlide>
                <img src={saseoB} alt="site-screenshot" />
              </ProjectSwiperSlide>
              <ProjectSwiperSlide>
                <img src={saseoC} alt="site-screenshot" />
              </ProjectSwiperSlide>
              <ProjectSwiperSlide>
                {/* // ! https://stackoverflow.com/questions/73653819/pause-other-videos-when-slide-is-changed-swiper-js-react-player */}
                <ProjectVideo
                  url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </ProjectSwiperSlide>
            </ProjectSwiper>

            {/* <ProjectBlurb>
              <section>
                <p>{content}</p>
              </section>
              <br />
            </ProjectBlurb> */}
          </CardBody>

          {/* <Accordion props={props} /> */}
          <br />
          <br />
          <CardFooter>
            <SiteButton
              url="https://www.youtube.com"
              styling="youtube"
              title="Youtube"
              icon={<IoLogoYoutube />}
            />
            <SiteButton
              url="https://www.github.com"
              styling="github"
              title="Github"
              icon={<BsGithub />}
            />
            <SiteButton
              url="https://www.nhl.com"
              styling="website"
              title="Website"
              icon={<BsGlobe />}
            />
            <SiteButton
              url="https://www.nhl.com"
              title="Website"
              icon={<BsGlobe />}
            />
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default ProjectCard;
