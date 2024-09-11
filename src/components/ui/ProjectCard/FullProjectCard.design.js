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
  /* background-color:yellow;  */
  /* margin-top:200px; */
  & * {
    margin-left: auto !important;
    margin-right: auto !important;
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
  height: 100%;
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
  @media screen and (max-width: 875px) {
    width: 100%;
  }
  @media screen and (max-width: 1200px) {
    margin: 0px;
    align-content: center;
    /* display: none; */
  }
`;

export const CardHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  /* padding: 5px 5px; */
  letter-spacing: 1.15px;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-family: "body";
  border-bottom: grey 1px solid;

  & #project-button-container * {
    display: inline;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
  & h2 {
    text-align: start;
    color: white;
    font-size: 1.55em;
    /* padding: 1.2px; */
    margin-bottom: 10px;
    justify-self: start;
  }

  & small {
    color: grey;
    font-size: 10px;
    text-align: left;
  }
`;

export const CardBody = styled.section`
  position: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-items: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  width: 94%;
  height: auto;
  z-index: 1;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  /* padding-bottom: 20px; */
`;

export const CardProjectImage = styled.img`
  width: 88%;
  height: auto;

  object-fit: cover;

  /* @media screen and (max-width: 1000px) {
    width: 85%;
    height: 525px;
  } */
  /* @media screen and (max-width: 875px) {
    width: 100%;
    min-height: 100%;
    object-fit: cover;
    object-position: top left;
  } */

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
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
  margin-top: 0px;
  padding: 0px 0px;
  width: 80%;
  text-align: left;

  @media screen and (max-width: 875px) {
    width: 95%;
  }
`;

export const CardFooter = styled.section`
  display: none;
  flex-wrap: wrap;
  /* position: absolute; */
  justify-content: center;
  width: 100%;
  bottom: 0;
  font-family: "body";
  color: white;
  background-color: transparent;
  padding-bottom: 15px;
  margin: 0;

  @media screen and (max-width: 1200px) {
    text-align: center;
    justify-content: center;
    align-content: center;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    /* background-color: purple; */
  }
`;

export const ProjectUL = styled.ul`
  text-align: left;
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 10px;
  justify-content: start;
  align-content: start;
  align-items: start;
  padding-top: 15px;
`;

export const ProjectULHeader = styled.h3`
  vertical-align: bottom;
  font-size: 30px;
  font-weight: bold;
  @media screen and (max-height: 725px) {
    font-size: 22px;
  }
`;

export const ProjectLI = styled.li`
  list-style-position: outside;
  float: left;
  @media screen and (max-height: 725px) {
    font-size: 14px;
  }
`;
