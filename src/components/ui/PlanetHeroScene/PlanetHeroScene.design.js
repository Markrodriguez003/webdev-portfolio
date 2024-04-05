import styled, { css, keyframes } from "styled-components";

// ASSETS / IMAGES
import astronautH from "../../../assets/images/astronaut-2.png";
import satellite from "../../../assets/images/satellite-2.png";
import homePlanet from "../../../assets/images/planet-3.png";
// ANIMATIONS
const spin = keyframes`
 100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;
const floatA = keyframes`
  0% {
    transform: translate(0, 0px) rotate(0deg);
  }
  25% {
    transform: translate(0, 28px) rotate(-3deg);
  }
  50% {
    transform: translate(0, -7px) rotate(0deg);
  }
  75% {
    transform: translate(0, 28px) rotate(4deg);
  }
  100% {
    transform: translate(0, -0px);
    }
`;

const satelliteFloat = keyframes`
49% {
    z-index: 1;
  }

  50% {
    bottom: 22.3em;
    left: -23em;
    z-index: -1;
  }

  100% {
    z-index: -1;
  }
`;

const pulse = keyframes`

0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(149, 255, 96, 0.884);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;

// *****************************************************************************
// CSS
// *****************************************************************************
export const PlanetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 325px;
  overflow: hidden;
  z-index: -2;
`;

export const PlanetBackground = styled.div`
  background: radial-gradient(circle at 100px 100px, #5cabff, #000);
  background-blend-mode: darken;
  filter: grayscale(5%);

  background-image: url(${homePlanet});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: -325px;
  padding: 0;
  /* top: 100px; */
  width: 585px;
  height: 585px;
  overflow: hidden;
  border-radius: 50%;
  /* margin-left: auto;
  margin-right: auto; */
  animation: ${spin} 115s linear infinite;
  box-shadow: inset 0 0 60px #131312;
  z-index: 1;
  @media screen and (max-width: 480px) {
    top: -175px;
    width: 355px;
    height: 355px;
  }
  // TABLET
  @media screen and (max-width: 800px) {
    top: -175px;
    width: 375px;
    height: 375px;
  }

  // 2K/4K MONITORS
  @media screen and (min-width: 1740px) {
    width: 685px;
    height: 685px;
  }
`;

export const Satellite = styled.div`
  background: radial-gradient(circle at 100px 100px, #006c31, #000);
  background-blend-mode: darken;
  background-image: url(${satellite});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  filter: brightness(1.5);
  height: 4.5em;
  width: 4.5em;
  border-radius: 50%;
  position: relative;
  bottom: -15em;
  left: 18.5em;
  z-index: 2;
  animation: ${satelliteFloat} 153s infinite linear, spin 35s linear infinite;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const ShinyLight = styled.div`
  background: rgba(32, 157, 122, 0.5);
  border-radius: 100%;
  margin: 7px;
  height: 8px;
  width: 8px;
  border: black 1px solid;

  box-shadow: 0 0 0 0 rgba(138, 255, 0, 0.2);
  transform: scale(1);
  animation: ${pulse} 2s infinite;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const AstronautHome = styled.div`
  background: radial-gradient(circle at 100px 100px, #5cabff, #000);
  filter: brightness(1.5) saturate(100%);
  background-image: url(${astronautH});

  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  position: absolute;
  bottom: 38px;
  left: 25px;
  width: 285px;
  height: 285px;
  margin-left: auto;
  margin-right: auto;
  animation: ${floatA} 10s ease-in-out infinite;

  z-index: 1;

  @media screen and (max-width: 800px) {
    width: 185px;
    height: 185px;
    bottom: 98px;
  }

  @media screen and (max-width: 800px) {
    width: 185px;
    height: 185px;
    bottom: 98px;
  }

  @media screen and (max-width: 950px) and (max-height: 700px) {
    width: 185px;
    height: 185px;
    bottom: -258px;
    left: 48px;
  }

  @media screen and (max-width: 950px) and (max-height: 1338px) {
    width: 185px;
    height: 185px;
    bottom: 520px;
    left: 48px;
  }

  @media screen and (max-width: 912px) and (max-height: 1368px) {
    width: 185px;
    height: 185px;
    bottom: 520px;
    left: 48px;
  }

  @media screen and (max-width: 540px) and (max-height: 720px) {
    width: 145px;
    height: 145px;
    bottom: 120px;
    left: 8px;
  }

  @media screen and (max-width: 510px) {
    display: none;
  }
`;
