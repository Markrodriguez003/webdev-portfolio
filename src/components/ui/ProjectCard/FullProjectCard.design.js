import styled, { css, keyframes } from "styled-components";
import { Carousel } from "react-responsive-carousel";
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

// VIDEO

export const ProjectVideo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  & * {
    /* width: 1000px !important; */
    /* height: 100% !important; */
    margin-left: auto !important;
    margin-right: auto !important;
  }
`;

export const CarouselContainer = styled(Carousel)`
  /* display: flex; */
  width: 72%;
  margin-left: auto;
  margin-right: auto;

  /* // 4K Monitors
  @media (min-width: 2200px) {
    width: 78%;
  } */

  /* // 1440 Monitors
  @media (min-width: 1440px) {
    width: 87%;

    & img {
      height: 500px;
    }
  } */

  & img {
    object-fit: fill;
    /* height: 68vh !important; */
    /* width: 100% !important; */
    margin-left: auto;
    margin-right: auto;
    /* background-color: red; */
  }

  /* @media screen and (max-width: 1200px) {
    width: 80%;
  }

  @media screen and (max-width: 1440px) {
    width: 92%;
  }

  @media screen and (min-width: 1600px) {
    width: 80%;
  } */

  & .control-arrow {
    /* background-color: grey !important; */
  }
`;
// PROJECT CARD
export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: center;
  /* background-color: pink; */
  border: rgba(255, 255, 255, 0.1) 1px solid;
  height: 92vh;
  width: 100%;
  margin-right: 40px;
  z-index: 1;

  animation: ${(props) =>
    props.toggle
      ? css`
          ${fadeIn} 0.3s ease-in-out
        `
      : css`
          ${fadeInUpdate} 0.3s ease-in-out
        `};

  @media screen and (max-width: 1200px) {
    margin: 0px;
    align-content: center;
    display: none;
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
    font-size: 2em;
    padding: 2px;
    margin-bottom: 10px;
  }

  & small {
    color: grey;
    font-size: 15px;
    text-align: left;
  }
`;

export const CardBody = styled.section`
  position: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  align-items: center;
  /* padding: 10px 15px; */
  /* margin-bottom: 10px; */

  width: 100%;
  height: 650px;
  z-index: 1;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  /* background-color: tomato; */
`;

export const ProjectBlurb = styled.section`
  position: relative;
  display: block;
  font-family: "body";
  letter-spacing: 0.5px;
  font-size: 1rem;
  color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  padding: 5px 0px;
  width: 72%;
  text-align: left;
  /* background-color:purple ; */
`;

export const CardFooter = styled.section`
  display: block;
  /* position: absolute; */
  width: 100%;
  bottom: 0;
  font-family: "body";
  color: white;
  background-color: rgba(255, 25, 255, 0.02);
  padding-bottom: 15px;
  margin: 0;

  @media screen and (max-width: 1200px) {
    text-align: center;
    justify-content: center;
    align-content: center;
  }
`;
