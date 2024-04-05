import styled, { css, keyframes } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import customCursor from "../../assets/icons/mouseIcon.png";

// function heightSetter(h) {
//   console.log(`Styled component height: `, h);

//   return "795px";
// }

export const FullView = styled.div`
  display: block;
  width: 100%;
  height:100%;

  cursor: url(${customCursor}) -52 -52, auto;
  @media (max-width: 1200px) {
    display: none;
  }

  overflow: hidden;
`;
export const MiniView = styled.div`
  display: none;
  width: 100%;
  @media (max-width: 1200px) {
    display: block;
  }
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  /* height: 100%; */

  height: ${(props) =>
    props.windowheight !== undefined ? `${props.windowheight}px` : "10px"};
  margin-top: 0px;

  text-align: center;
`;


export const MiniNavContainer = styled.nav`
  display: inline-flex;
  position: relative;
  flex-direction: column;
  justify-content: start;
  align-content: start;
  padding-right: 12px;
  padding-top: 12px;

  @media (max-width: 1200px) {
    order: 1;
    flex-direction: row;
    padding-right: 0px;
    margin-bottom: 60px;
  }

  & ul {
    @media (max-width: 1200px) {
      order: 1;
      flex-direction: row;
      padding: 0px;
    }
  }

  & ul li {
    text-decoration: none;
    list-style-type: none;
    padding-bottom: 8px;
    text-align: right;
    @media (max-width: 1200px) {
      text-align: center;
    }

    @media (max-width: 340px) {
      font-size: 0.9em;
    }
  }
  & ul li a {
    color: white;
    font-size: 3em;
    font-weight: 300;
    letter-spacing: 1.5px;
    font-family: "body";
    text-decoration: none;
    /* padding: 2px; */
    transition: linear 0.2s;
  }
  & ul li a:link {
  }
  & ul li a:visited {
  }
  & ul li a:hover {
    font-size: 3.4em;
    padding: 10px;
    cursor: pointer;
    /* background<div>
      <small style={{color:"white"}}>{data[0]}</small>
    </div>-color: rgba(232, 236, 241, 0.2); */
  }
  & ul li a:active {
  }
`;