import styled, { css, keyframes } from "styled-components";
import satellite from "../../../assets/images/satellite-1.png";
import astronautContact from "../../../assets/images/astronaut-3.png";
import qrcode from "../../../assets/images/qr-example.png";

// ANIMATIONS
const floatA = keyframes`
  0% {
    transform: translate(0, 0px) rotate(0deg) scaleX(-1);
  }
  25% {
    transform: translate(0, 28px) rotate(-3deg) scaleX(-1);
  }
  50% {
    transform: translate(0, -7px) rotate(0deg) scaleX(-1);
  }
  75% {
    transform: translate(0, 28px) rotate(4deg) scaleX(-1);
  }
  100% {
    transform: translate(0, -0px) scaleX(-1);
    }
`;
const floatsBubble = keyframes`
  0% {
    transform: translate(0, 0px) rotate(0deg);
  }
  25% {
    transform: translate(0, 28px) rotate(-3deg);
  }
  50% {
    transform: translate(0, -7px) rotate(0deg) ;
  }
  75% {
    transform: translate(0, 28px) rotate(4deg);
  }
  100% {
    transform: translate(0, -0px) ;
    }
`;

const floatB = keyframes`
  0% {
    transform: translate(0, 0px) rotate(0deg);
  }
  25% {
    transform: translate(0, 31px) rotate(-8deg);
  }
  50% {
    transform: translate(0, -7px) rotate(0deg);
  }
  75% {
    transform: translate(0, 38px) rotate(6deg);
  }
  100% {
    transform: translate(0, -0px) ;
    }
`;

const WifiFloat = keyframes`
  0% {
    transform: translate(0, 0px) rotate(5deg) scale(0.2) ;
  }
  25% {
    transform: translate(0, 25px) rotate(5deg) scale(0.2);
  }
  50% {
    transform: translate(0, -7px) rotate(5deg) scale(0.2);
  }
  75% {
    transform: translate(0, 28px) rotate(5deg) scale(0.2);
  }
  100% {
    transform: translate(0, -0px) rotate(5deg) scale(0.2);
    }
`;

const wifiSignal = keyframes`
  0% { opacity: 0.4 }
  5% { opacity: 1 }
  6% { opacity: 0.1 }
  100% { opacity: 0.1; }
`;

export const ContactUsOuterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: rgba(255, 255, 255, 0.1) 1px solid;
  width: 100%;
  background-color: transparent;
`;

export const ModalOuterContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);
  filter: blur(50%);
  z-index: 9999;

  * {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ModalExitBtn = styled.button`
  color: white;
  background-color: black;
  text-decoration: none;
  font-family: "header";
  font-size: 1.5rem;
  padding: 0px 20px;
  transition: 0.3s;
  font-weight: bold;

  &:hover {
    background-color: aliceblue;
    color: black;
  }
`;

export const SatellightContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 40vw;
  height: 92vh;
  margin-left: auto;
  margin-right: 5%;
  padding-right: 18%;
  z-index: 1;
  /* overflow:hidden; */

  @media screen and (max-width: 1115px) {
    display: none;
  }

  & .contact-astronaut {
    position: absolute;
    display: block;
    bottom: 70px;
    right: 30px;
    /* animation: ${floatsBubble} 10s ease-in-out infinite; */
  }
  & .contact-satellite {
    position: absolute;
    top: 0;
    left: 0;
    /* width:1000px; */
    /* height:auto; */
  }
`;

export const Satellite = styled.div`
  filter: brightness(0.95);
  background-image: url(${satellite});
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  transform: scaleX(-1) rotate(-7deg);
  width: 255px;
  height: 255px;
  margin-top: 10px;
  margin-left: auto;
  animation: ${floatB} 18s ease-in-out infinite;
  z-index: 1;
`;

export const AstronautContact = styled.div`
  background-blend-mode: darken;
  background-image: url(${astronautContact});
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  overflow: hidden;
  width: 425px;
  height: 325px;
  margin-top: 100px;
  margin-left: 100px;
  z-index: 1;
  animation: ${floatA} 10s ease-in-out infinite;
  /* background-color: purple; */
`;

export const SpeechAstronautBubble = styled.div`
  position: absolute;
  top: 80px;
  right: 70px;
  transform: scaleX(-1);
  display: inline-block;
`;

export const FullContactView = styled.div`
  display: relative;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
export const MidContactView = styled.div`
  display: none;

  @media (max-width: 1200px) and (min-width: 801px) {
    display: block;
  }
`;
export const MiniContactView = styled.div`
  display: none;

  @media (max-width: 1200px) {
    display: block;
    /* background-color:pink; */
  }
`;

export const QRCode = styled.div`
  background-blend-mode: darken;

  background-image: url(${qrcode});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;

  left: -405px;
  top: 590px;
  width: 185px;
  height: 185px;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
`;

export const WifiSignalContainer = styled.div`
  position: absolute;
  bottom: 140px;
  left: 138px;
  display: inline-block;
  width: 150px;
  height: 150px;
  margin-top: -187.5px;
  /* transform: scale(0.1); */
  -ms-transform: rotate(45deg) translate(-100px) scale(0.2);
  -moz-transform: rotate(45deg) translate(-100px) scale(0.2);
  -o-transform: rotate(45deg) translate(-100px) scale(0.2);
  -webkit-transform: rotate(45deg) translate(-100px) scale(0.2);
  transform: rotate(45deg) translate(-100px) scale(0.2);
  animation: ${WifiFloat} 18s ease-in-out infinite;
`;

export const SpeechContactBubble = styled.div`
  position: absolute;
  /* background-color: pink; */
  bottom: 140px;
  left: 280px;
  display: inline-block;
`;

export const WifiSignalSymbol = styled.div`
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;
  font-size: 21.4285714286px;
  position: absolute;
  bottom: 0;
  left: 0;
  border-color: #ffffcc;
  border-style: solid;
  border-width: 1em 1em 0 0;
  -webkit-border-radius: 0 100% 0 0;
  border-radius: 0 100% 0 0;
  opacity: 0;
  -o-animation: ${wifiSignal} 3s infinite;
  -moz-animation: ${wifiSignal} 3s infinite;
  -webkit-animation: ${wifiSignal} 3s infinite;
  animation: ${wifiSignal} 3s infinite;

  &.first {
    -o-animation-delay: 800ms;
    -moz-animation-delay: 800ms;
    -webkit-animation-delay: 800ms;
    animation-delay: 800ms;
  }

  &.second {
    width: 5em;
    height: 5em;
    -o-animation-delay: 400ms;
    -moz-animation-delay: 400ms;
    -webkit-animation-delay: 400ms;
    animation-delay: 400ms;
  }

  &.third {
    width: 3em;
    height: 3em;
  }

  &.fourth {
    width: 1em;
    height: 1em;
    opacity: 1;
    background-color: #ffffcc;
    -o-animation: none;
    -moz-animation: none;
    -webkit-animation: none;
    animation: none;
  }
`;
