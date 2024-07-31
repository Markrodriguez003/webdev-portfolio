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



export const MiniAboutInfoPanel = styled.div`
display:none ;
color:white;
@media (max-width: 1200px) {
  display:block ;
 
  }
`

export const AboutDetailsPanel = styled.div`
  /* background-color: green; */
  margin-right: 120px;
  margin-bottom: 30px;




  // 2K/4K MONITORS
  @media screen and (min-width: 2025px) {
    margin-right: 120px;
    font-size: 1.5rem;
  }
/* 1326 */
  @media (max-width: 1200px) {
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
    font-size:  1.2rem;
  }
`;
