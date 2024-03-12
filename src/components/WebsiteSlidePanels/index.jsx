/* eslint-disable react-refresh/only-export-components */
// NOTES:
// https://alvarotrigo.com/blog/animated-backgrounds-css/
// https://devsnap.me/css-animation-examples
// https://codepen.io/hisamikurita/pen/LYEWXEW
// https://codepad.co/snippet/retro-wave-animation
// https://codepen.io/WilliamStaudenmeier/pen/eYQyRXz
// https://www.youtube.com/watch?v=5f5wwQb22tE&ab_channel=RedStapler
import {
  StyledSwiper,
  FullView,
  MiniView,
} from "./WebsiteSlidePanels.design.js";
import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import BackgroundScenery from "../ui/BackgroundScenery/index.jsx";
import AboutSection from "../Sections/AboutSection/index.jsx";
import ProjectsSection from "../Sections/ProjectsSection/index.jsx";
import SiteInfo from "../Sections/SiteInfo/index.jsx";
import MeteorShower from "../ui/MeteorShower/index.jsx";
import ContactSection from "../Sections/ContactSection/index.jsx";
import Home from "../Sections/Home";
import PaginationTag from "../ui/PaginationTag/index.jsx";
import { sections } from "../../../data/sectionNames";
import { useState, createContext, useEffect, useContext, useRef } from "react";

export const scrollContext = createContext();

function WebsiteSlidePanels() {
  const [windowHeightSize, setWindowHeightSize] = useState("auto");
  const [scrollDirection, setScrollDirection] = useState({
    currentIndex: 0,
    previousIndex: 0,
  });
  const [sectionType, setSectionType] = useState(
    sections[scrollDirection.currentIndex]
  );

  function settingHeight(h) {
    // console.log("This is the height grabbed from use effect ", h);
    setWindowHeightSize((prev) => h);
    setSectionType(sections[scrollDirection.currentIndex]);
    // console.log("setting window height: ", windowHeightSize);
  }

  useEffect(() => {
    function detectHeight() {
      settingHeight(window.innerHeight);
    }

    window.addEventListener("onLoad", detectHeight());
    return () => window.removeEventListener("loadedmetadata", detectHeight());
  });

  useEffect(() => {
    // console.log(`Scroll Direction: `, scrollDirection);
  }, [scrollDirection]);

  function onScrollBehavior(event) {
    setScrollDirection({
      currentIndex: event.activeIndex,
      previousIndex: event.previousIndex,
    });
  }

  return (
    <>
      <scrollContext.Provider value={scrollDirection}>
        {/* <PaginationTag>{sectionType}</PaginationTag> */}
        <BackgroundScenery />
{/* 
        <FullView>
          <StyledSwiper
            direction={"vertical"}
            slidesPerView={1}
            // spaceBetween={30}
            mousewheel={true}
            simulateTouch={true}
            speed={"985"}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            // className="mySwiper"
            onActiveIndexChange={(event) => onScrollBehavior(event)}
            windowheight={windowHeightSize}
          >
            <SwiperSlide>
              <Home />
            </SwiperSlide>
            <SwiperSlide>
              <AboutSection />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectsSection />
            </SwiperSlide>
            <SwiperSlide>
              <ContactSection />
            </SwiperSlide>
          </StyledSwiper>
        </FullView>

        <MiniView>
          <Home />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </MiniView> */}
      </scrollContext.Provider>
    </>
  );
}

export default WebsiteSlidePanels;
