/* eslint-disable react-refresh/only-export-components */
// NOTES:
// https://alvarotrigo.com/blog/animated-backgrounds-css/
// https://devsnap.me/css-animation-examples
// https://codepen.io/hisamikurita/pen/LYEWXEW
// https://codepad.co/snippet/retro-wave-animation
// https://codepen.io/WilliamStaudenmeier/pen/eYQyRXz
// https://www.youtube.com/watch?v=5f5wwQb22tE&ab_channel=RedStapler
import {
  WelcomeContainer,
  IntroductionContainer,
  NavContainer,
  PaginationTag,
} from "./WelcomeNavBlock.design.js";
import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import PlanetHeroScene from "../ui/PlanetHeroScene";
import MeteorShower from "../ui/MeteorShower/index.jsx";
import githubIcon from "../../assets/icons/github-icon-w.png";
import BackgroundScenery from "../ui/BackgroundScenery/index.jsx";
import AboutSection from "../Sections/AboutSection/index.jsx";
import ProjectsSection from "../Sections/ProjectsSection/index.jsx";
import SoundMeter from "../ui/HeaderAnimations/SoundMeter.jsx";

import { useState, createContext, useEffect, useContext, useRef } from "react";
import ContactSection from "../Sections/ContactSection/index.jsx";

// Creating context space
export const scrollContext = createContext();

function WelcomeNavBlock() {
  const data = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];
  const [scrollDirection, setScrollDirection] = useState({
    currentIndex: 0,
    previousIndex: 0,
  });

  useEffect(() => {
    console.log(`Scroll Direction: `, scrollDirection);
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
        <BackgroundScenery />
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          // spaceBetween={30}
          mousewheel={true}
          simulateTouch={true}
          speed={"1050"}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
          onActiveIndexChange={(event) => onScrollBehavior(event)}
        >
          <SwiperSlide>
            {" "}
            <PlanetHeroScene />
            <div
              style={{
                marginTop: "10px",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            >
              <PaginationTag>{data[0]}</PaginationTag>
              <IntroductionContainer>
                <NavContainer>
                  <ul>
                    <li>
                      <a href="#">ABOUT</a>
                    </li>
                    <li>
                      <a href="#">PROJECTS</a>
                    </li>
                    <li>
                      <a href="#">CONTACT</a>
                    </li>
                  </ul>
                </NavContainer>
                <WelcomeContainer>
                  <h1>WELCOME</h1>
                  <p>
                    My name is Mark Rodriguez 👋 & I am a full stack developer.
                    Take a look at my projects & please do not hesistate to
                    contact me!
                  </p>
                  <p>
                    <img
                      src={githubIcon}
                      width={"20px"}
                      height={"20px"}
                      style={{ paddingRight: "10px" }}
                    />
                    Github: <a> Github.com/markrodriguez003</a>
                  </p>
                  <p>
                    <img
                      src={githubIcon}
                      width={"20px"}
                      height={"20px"}
                      style={{ paddingRight: "10px" }}
                    />
                    Resume: <a href="#"> View</a> | <a href="#"> Download</a>
                  </p>
                </WelcomeContainer>
              </IntroductionContainer>
            </div>
            <SoundMeter />
          </SwiperSlide>
          <SwiperSlide>
            <MeteorShower />
            <PaginationTag>{data[1]}</PaginationTag>
            <AboutSection />
          </SwiperSlide>
          <SwiperSlide>
            <PaginationTag>{data[2]}</PaginationTag>
            <ProjectsSection />
          </SwiperSlide>
          <SwiperSlide>
            <PaginationTag>{data[3]}</PaginationTag>
            <ContactSection />
          </SwiperSlide>
        </Swiper>
      </scrollContext.Provider>
    </>
  );
}

export default WelcomeNavBlock;
