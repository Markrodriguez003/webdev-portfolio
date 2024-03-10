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
  height: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0;
  /* background-color: pink; */
  text-align: center;
`;

export const ProjectSiteImage = styled.div`
 
`

export const ProjectSwiperSlide = styled(SwiperSlide)`

  /* background-color: lime; */
  width: 100%;
  height:100%;
  & img  {
    position:relative ;
    display:block ;
    object-fit: contain;
    margin-left:auto;
    margin-right:auto;
 
    height: 600px;
    @media screen and (max-width: 1000px) {
      width: 80%;
      height:80%;  
      object-fit: none;
      /* height: 50vh; 
  }
    @media screen and (max-width: 1400px) {
      /* height: 60vh;  */
  }
    @media screen and (max-width: 1200px) {
      /* width: 100%;
      height: 100%; */
  }
  }
`;

// VIDEO
// export const ProjectVideo = styled(ReactPlayer)`
// width:280px;
// background-color:red;
// `;
export const ProjectVideo = styled.div`
display:block ;
width:85%;
height:600px;
 
margin-left:auto;
margin-right:auto;

& * {
  display:block;
  width: 100%;
  height: 600px;
  
}
`;

// PROJECT CARD
export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: center;
 
  border: rgba(255, 255, 255, 0.1) 1px solid;
  height: 92vh;
  width: 100%;
  z-index: 1;
  margin-left: 0px 0px 12px 0px;
  padding-left: 0px 0px 12px 0px;
  animation: ${(props) =>
    props.toggle
      ? css`
          ${fadeIn} 0.3s ease-in-out
        `
      : css`
          ${fadeInUpdate} 0.3s ease-in-out
        `};

    /* background-color:coral ; */

  @media screen and (max-width: 1200px) {
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
  /* position: flex;
  flex-direction: column;
  justify-content:center ;
  justify-items:center ;
  align-items:center ;
  align-content:center ;
  align-items: center ; */
  /* padding: 10px 15px; */
  /* margin-bottom: 10px; */
  
  width: 100%;
  height: 650px;
  z-index: 1;
  text-align:center ;
  margin-left: auto;
  margin-right: auto;
  /* background-color: tomato; */
`;

export const ProjectBlurb = styled.section`
position: relative;
display: block ;
  font-family: "body";
  letter-spacing: 0.5px;
  font-size: 1rem;
  color: white;
  margin-left:auto;
  margin-right:auto;
  padding: 5px 0px;
  width: 80%;
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
  margin:0;


  @media screen and (max-width: 1200px) {
    text-align: center;
    justify-content: center;
    align-content: center;
  }
`;
