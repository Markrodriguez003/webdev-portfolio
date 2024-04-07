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
  padding: 10px 5px;
  letter-spacing: 1.2px;
  margin-bottom: 10px;
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
    font-size: 1.35em;
    padding: 1.2px;
    margin-bottom: 10px;
    justify-self: start;
  }

  & small {
    color: grey;
    font-size: 12px;
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
  width: 100%;
  height: 80vh;
  z-index: 1;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  /* padding-bottom: 20px; */
`;

export const CardProjectImage = styled.img`
  width: 75%;
  /* height: 100%; */
  height: 420px;

  object-fit: cover;

  /* @media screen and (max-width: 1000px) {
    width: 85%;
    height: 525px;
  } */
  @media screen and (max-width: 875px) {
    width: 90%;
    height: 40vh;
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
  padding: 5px 0px;
  width: 72%;
  text-align: left;

  @media screen and (max-width: 875px) {
    width: 88%;
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
  }
`;
