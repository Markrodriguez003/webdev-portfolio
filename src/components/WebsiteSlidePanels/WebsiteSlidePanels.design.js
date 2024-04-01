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
