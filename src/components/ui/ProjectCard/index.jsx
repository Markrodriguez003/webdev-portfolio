/* eslint-disable react/prop-types */
// NOTES
{
  /* // ! https://stackoverflow.com/questions/73653819/pause-other-videos-when-slide-is-changed-swiper-js-react-player */
}

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
import { useState } from "react";

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
// ICONS
import { IoLogoYoutube } from "react-icons/io5";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { FaUserAstronaut } from "react-icons/fa";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

// IMAGES
import saseoA from "../../../assets/images/site-screenshots/Portfolio.png";
import saseoB from "../../../assets/images/site-screenshots/Saseo-2.png";
import saseoC from "../../../assets/images/site-screenshots/Saseo-3.png";

function FullProjectCard({ props }) {
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

  // HANDLES TOGGLE DATA OF ADDITIONAL PROJECT SITE PANELS
  const [technologyToggle, setTechnologyToggle] = useState(false);
  const [techniqueToggle, setTechniqueToggle] = useState(false);

  // HANDLES IMAGE LIGHTBOX
  const [open, setOpen] = useState(false);

  //

  const [width, setWidth] = useState(120);
  const [height, setHeight] = useState(80);
  const [border, setBorder] = useState(1);
  const [borderRadius, setBorderRadius] = useState(4);
  const [padding, setPadding] = useState(4);
  const [gap, setGap] = useState(16);
  const [preload, setPreload] = useState(2);
  const [showToggle, setShowToggle] = useState(false);

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

  function check(){
    console.log('you clicked on image!')
  }

  return (
    <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: { saseoA } }, { src: { saseoB } }, { src: { saseoC } }]}
        plugins={[Thumbnails]}
        thumbnails={{
          position: "bottom",
          width,
          height,
          border,
          borderRadius,
          padding,
          gap,
          showToggle,
        }}
      />
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

            <CarouselContainer
              showThumbs={false}
              showIndicators={true}
              showArrows={true}
              swipeable={true}
              dynamicHeight={true}
            >
              {images.map((item, count) => {
                return (
                  <img
                    src={item}
                    key={title + "-image-" + count}
                    // className={"project-card-site-image"}
                    alt={"image-" + count}
                    // onClick={() => setOpen(true)}
                    onClick={() => console.log('fhuc')}
                  />
                );
              })}

              <ProjectVideo>
                <ReactPlayer url={video} controls={true} />
              </ProjectVideo>
            </CarouselContainer>

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

export default FullProjectCard;
