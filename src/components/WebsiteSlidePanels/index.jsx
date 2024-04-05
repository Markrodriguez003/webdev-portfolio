/* eslint-disable react-refresh/only-export-components */
// NOTES:
// https://alvarotrigo.com/blog/animated-backgrounds-css/
// https://devsnap.me/css-animation-examples
// https://codepen.io/hisamikurita/pen/LYEWXEW
// https://codepad.co/snippet/retro-wave-animation
// https://codepen.io/WilliamStaudenmeier/pen/eYQyRXz
// https://www.youtube.com/watch?v=5f5wwQb22tE&ab_channel=RedStapler

// ? NOTES
// ! loading page animation
// ? https://stackoverflow.com/questions/60847095/how-to-load-all-images-before-showing-the-page-in-react

// STYLES / STYLED COMPONENTS
import {
  StyledSwiper,
  FullView,
  MiniView,
  MiniNavContainer,
} from "./WebsiteSlidePanels.design.js";
import "./style.css";
import "swiper/css";
import "swiper/css/pagination";

// COMPONENTS
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import BackgroundScenery from "../ui/BackgroundScenery/index.jsx";
import { AboutSection } from "../Sections/AboutSection/index.jsx";
import { ProjectsSection } from "../Sections/ProjectsSection/index.jsx";
import { ContactSection } from "../Sections/ContactSection/index.jsx";
import Home from "../Sections/Home/index.jsx";
import PaginationTag from "../ui/PaginationTag/index.jsx";
import { sections } from "../../../data/sectionNames.js";
import LoadingScreen from "../ui/LoadingScreen/index.jsx";

//REACT
import { useState, createContext, useEffect, useContext, useRef } from "react";
export const navContext = createContext();

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
  const [siteSlide, setSiteSlide] = useState(0);

  const [swiper, setSwiper] = useState(null);
  function goToSlide(slide) {
    swiper.slideTo(slide);
  }

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [siteNavRef, setSiteNavRef] = useState(null);

  useEffect(() => {
    function handleMiniNavigationClick() {
      siteNavRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    if (siteNavRef !== null) {
      handleMiniNavigationClick();
      console.log(`This is the ref:`, siteNavRef);
    }
  }, [siteNavRef]);

  return (
    <>

      <BackgroundScenery >

        <navContext.Provider value={{ goToSlide }}>
          {/* <PaginationTag>{sectionType}</PaginationTag> */}
          {/* <LoadingScreen /> */}
          {/* <button onClick={goToSecondPage}>PRESS ME</button> */}
          <FullView>
            <StyledSwiper
              direction={"vertical"}
              slidesPerView={1}
              mousewheel={true}
              simulateTouch={true}
              speed={"985"}
              pagination={{
                clickable: true,
              }}
              modules={[Mousewheel, Pagination]}
              onActiveIndexChange={(event) => onScrollBehavior(event)}
              windowheight={windowHeightSize}
              onSwiper={setSwiper}
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
            <Home>
              <>
                <MiniNavContainer>
                  <ul>
                    <li>
                      {/* <a href="#about"  onClick={() => document.getElementById('first')?.scrollIntoView()}> */}
                      <a href="#about" onClick={() => setSiteNavRef(aboutRef)}>
                        ABOUT
                      </a>
                    </li>
                    <li ref={projectsRef}>
                      <a
                        href="#projects"
                        onClick={() => setSiteNavRef(projectsRef)}
                      >
                        PROJECTS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        onClick={() => setSiteNavRef(contactRef)}
                      >
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </MiniNavContainer>
              </>
            </Home>
            <AboutSection ref={aboutRef} id="about" />
            <ProjectsSection ref={projectsRef} id="projects" />
            <ContactSection ref={contactRef} id="contact" />
          </MiniView>
        </navContext.Provider>
      </BackgroundScenery >

    </>
  );
}

export default WebsiteSlidePanels;
