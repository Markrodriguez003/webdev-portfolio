import styled, { css, keyframes } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";

// ANIMATIONS
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1;}
`;

const fadeInUpdate = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

// SWIPER
export const ProjectSwiper = styled(Swiper)`
  width: 100%;
  height: 650px;
  padding: 0;
  margin: 0;
  background-color: pink;
  text-align: center;
`;

export const ProjectSwiperSlide = styled(SwiperSlide)`
  background-color: lime;
  width: 750px;

  &img {
    width: 600px;
    height: auto;
  }
`;

// VIDEO
export const ProjectVideo = styled(ReactPlayer)`
/* width:100vw; */
 
background-color:red;

`;
// PROJECT CARD
export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: start;
  border: rgba(255, 255, 255, 0.1) 1px solid;
  height: 100%;
  width: 100%;

  margin-left: 12px;
  animation: ${(props) =>
    props.toggle
      ? css`
          ${fadeIn} 0.3s ease-in-out
        `
      : css`
          ${fadeInUpdate} 0.3s ease-in-out
        `};

  @media screen and (max-width: 1115px) {
    margin: 0px;
    /* height: 125vh; */
    /* justify-content: center; */
    align-content: center;
  }
`;

export const CardHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 15px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-family: "body";
  border-bottom: grey 1px solid;

  & h2 {
    text-align: start;
    color: white;
    font-size: 2.5em;
    padding: 2px;
    margin-bottom: 10px;
  }

  & small {
    color: grey;
    font-size: 15px;
    text-align: left;
  }
`;

export const CardSiteImage = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  & img {
    width: 350px;
    height: auto;
  }
`;

export const CardBody = styled.section`
  display: flex;
  flex-direction: column;
  /* padding: 10px 15px; */
  margin-bottom: 10px;
  width: 80%;
  background-color: yellow;
`;

export const ProjectBlurb = styled.section`
  font-family: "body";
  letter-spacing: 0.5px;
  color: white;
  padding: 10px 15px;
  margin-bottom: 10px;
`;

export const CardFooter = styled.section`
  display: block;
  position: absolute;
  width: 100%;
  bottom: 0;
  font-family: "body";
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgba(255, 25, 255, 0.02);

  @media screen and (max-width: 1115px) {
    text-align: center;

    justify-content: center;
    align-content: center;
  }
`;
