import styled, { css, keyframes } from "styled-components";

import planet from "../../../assets/images/planet-2.png";

const moveMap = keyframes`
  0% {
    background-position: -849px 0; }

  100% {
    background-position: 0 0; } `;

export const ProjectPlanet = styled.div`
  position: absolute;
  filter: hue-rotate(180deg);
  background-image: url(${planet});
  background-size: contain;
  background-repeat: no-repeat;
  width: 420px;
  height: auto;
  bottom: -60vh;
  left: -100px;
  /* background-color: pink; */
  flex-direction: row;
  overflow: hidden;
  height: 100%;
  transition: none;
  /* animation: ${moveMap} 10s infinite linear; */
`;
