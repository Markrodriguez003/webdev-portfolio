import styled, { keyframes } from "styled-components";

// ***************************************
// * ANIMATIONS
// ***************************************
const waveMovement = keyframes`
0%,
100% {
      transform: translateZ(-25px);
    }
    50% {
      transform: translateZ(25px);
    }
 
`;

const rotation = keyframes`  
    100% {
      transform: rotateX(270deg) rotateY(270deg);
    }
 `;

const pulsing = keyframes`  
       0%,
100% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.8);
;
    }
 `;

const planetOrbit = keyframes`  
   to {
    transform: rotate(360deg);
   }
 `;
const fadeIn = keyframes`  
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
 `;
const rotateLine = keyframes`  
 0% {
    transform: rotateX(0deg);
  }
  60% {
    transform: rotateX(60deg);
  }
  90% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
 `;

// ***************************************
// * WAVES
// ***************************************
export const WavesContainer = styled.div`
  transform: translate(0px, -15px);

  @media (max-width: 1200px) {
    transform: translate(35px, -18px);
  }
`;
export const WavesAnimation = styled.div`
  height: 175px;
  width: 175px;
  /* margin-left: 10px; */

  /* transform: translate(0px, -125px); */
  transform-style: preserve-3d;
  transform: perspective(500px) rotateX(60deg);

  & span {
    position: absolute;
    display: block;
    border: 3px solid #dcdcdc;
    border-radius: 50%;
    box-shadow: 0 5px 0 #747474;
    animation: ${waveMovement} 3s ease-in-out infinite;
  }

  & span:nth-child(1) {
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    animation-delay: 1.6s;
  }
  & span:nth-child(2) {
    right: 10px;
    left: 10px;
    top: 10px;
    bottom: 10px;
    animation-delay: 1.5s;
  }
  & span:nth-child(3) {
    right: 20px;
    left: 20px;
    top: 20px;
    bottom: 20px;
    animation-delay: 1.4s;
  }
  & span:nth-child(4) {
    right: 30px;
    left: 30px;
    top: 30px;
    bottom: 30px;
    animation-delay: 1.3s;
  }
  & span:nth-child(5) {
    right: 40px;
    left: 40px;
    top: 40px;
    bottom: 40px;
    animation-delay: 1.2s;
  }
  & span:nth-child(6) {
    right: 50px;
    left: 50px;
    top: 50px;
    bottom: 50px;
    animation-delay: 1.1s;
  }
  & span:nth-child(7) {
    right: 60px;
    left: 60px;
    top: 60px;
    bottom: 60px;
    animation-delay: 1s;
  }
  & span:nth-child(8) {
    right: 70px;
    left: 70px;
    top: 70px;
    bottom: 70px;
    animation-delay: 0.9s;
  }
  & span:nth-child(9) {
    right: 80px;
    left: 80px;
    top: 80px;
    bottom: 80px;
    animation-delay: 0.8s;
  }
`;

// ***************************************
// * CUBES
// ***************************************
export const BoxContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  transform: scale(1.25) translate(-5px, 70px);
  @media (max-width: 1200px) {
    transform: translate(-40px, 40px);
  }
`;
export const BoxFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;

  margin: 0 -80px 0 0;
  transform: scale(0.6) translate(0px, -70px);
  & .cube:nth-of-type(4) .wall:nth-of-type(1) {
    animation: ${rotation} 3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s infinite;
  }

  & .cube:nth-of-type(4) .wall:nth-of-type(1) {
    animation: ${rotation} 3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.6s infinite;
  }
  &.cube:nth-of-type(4) .wall:nth-of-type(2) {
    animation: ${rotation} 3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.6s infinite;
  }
  &.cube:nth-of-type(4) .wall:nth-of-type(1) {
    animation: ${rotation} 3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.7s infinite;
  }
  &.cube:nth-of-type(4) .wall:nth-of-type(2) {
    animation: ${rotation} 3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.7s infinite;
  }
  &.cube:nth-of-type(4) .wall:nth-of-type(3) {
    animation: ${rotation} 3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.8s infinite;
  }
  &.cube:nth-of-type(4) .wall:nth-of-type(1) {
    animation: ${rotation} 3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.8s infinite;
  }
  &.cube:nth-of-type(4) .wall:nth-of-type(2) {
    animation: ${rotation} 3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.8s infinite;
  }
  &.cube:nth-of-type(4) .wall:nth-of-type(3) {
    animation: ${rotation} 3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.8s infinite;
  }
  &.cube:nth-of-type(4) .wall:nth-of-type(4) {
    animation: ${rotation} 3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.8s infinite;
  }
  &.cube:nth-of-type(4) .wall:nth-of-type(2) {
    animation: ${rotation} 3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.9s infinite;
  }
  &.cube:nth-of-type(4) .wall:nth-of-type(3) {
    animation: rotation 3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.9s infinite;
  }
  &.cube:nth-of-type(4) .wall:nth-of-type(4) {
    animation: ${rotation} 3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.9s infinite;
  }
  &.cube:nth-of-type(4) .wall:nth-of-type(3) {
    animation: ${rotation} 3s cubic-bezier(0.215, 0.61, 0.355, 1) 1s infinite;
  }
  &.cube:nth-of-type(4) .wall:nth-of-type(4) {
    animation: ${rotation} 3s cubic-bezier(0.215, 0.61, 0.355, 1) 1s infinite;
  }
  &.cube:nth-of-type(4) .wall:nth-of-type(4) {
    animation: ${rotation} 3s cubic-bezier(0.215, 0.61, 0.355, 1) 1.1s infinite;
  }
`;

/* animation */

export const Cube = styled.div`
  position: relative;
  /* width: 100px; */
  height: 20px;
  margin: 0 65px 0 0;
  transform-style: preserve-3d;
`;

export const CubeBox = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  left: calc(-40px / 2);
  top: calc(-4px / 2);
  text-align: center;
  line-height: 50px;
  border: solid 1px #fff;
  animation: color 2s linear 1.5s infinite;

  &.wall .front {
    transform: translateZ(calc(40px / 2));
  }
  &.wall .back {
    transform: translateZ(calc(-40px / 2)) rotateY(180deg);
  }
  &.wall .right {
    transform: translateX(calc(40px / 2)) rotateY(90deg);
  }
  &.wall .left {
    transform: translateX(calc(-40px / 2)) rotateY(-90deg);
  }
  &.wall .top {
    transform: translateY(calc(-40px / 2)) rotateX(90deg);
  }
  &.wall .bottom {
    transform: translateY(calc(40px / 2)) rotateX(-90deg);
  }
`;

// ***************************************
// * PLANETS
// ***************************************

export const PlanetContainer = styled.div`
  padding-left: 20px;
  transform: translate(0px, -15px);
`;
export const PlanetFlex = styled.div`
  display: flex;
  justify-content: center;
  /* padding-bottom: 10px; */
  transform: scale(0.28);

  & div.orbit {
    width: 300px;
    height: 300px;
    border: 4px solid white;
    position: absolute;
    border-radius: 100%;
    margin: -50px auto;
    animation: ${planetOrbit} 12.81216s linear infinite;
  }

  & div.planet {
    background: white;
    box-shadow: inset -30px -30px 0px white;
    width: 200px;
    height: 200px;
    border-radius: 100%;
  }

  & div.moon {
    background: white;
    box-shadow: inset -7px -7px 0 white;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 20px;
  }

  & div.orbit2 {
    width: 400px;
    height: 400px;
    border: 4px solid white;
    position: absolute;
    border-radius: 100%;
    margin: -100px auto;
    animation: ${planetOrbit} 25.81216s linear infinite;
  }
  & div.moon2 {
    background: white;
    box-shadow: inset -7px -7px 0 white;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin: 40px;
  }

  & div.orbit3 {
    width: 500px;
    height: 500px;
    border: 4px solid white;
    position: absolute;
    border-radius: 100%;
    margin: -150px auto;
    animation: ${planetOrbit} 65.81216s linear infinite;
  }
  & div.moon3 {
    background: white;
    box-shadow: inset -7px -7px 0 white;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    margin: 60px;
  }
`;

// ***************************************
// * SOLAR PANEL
// ***************************************

export const SolarPanelContainer = styled.div`
  position: relative;
  /* left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
  width: 16vh;
  height: 16vh;
  border-radius: 50%;
  /* background-color: red; */
  transform: translate(-2px, 10px) scale(0.9);

  @media screen and (max-width: 1200px) {
    transform: translate(46px, -12px) scale(0.85);
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 50%;
    filter: blur(40px);
    animation: ${fadeIn} 0.5s easeIn;
    opacity: 1;
    transform: scale(1.6);
  }
`;

export const LineContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 50%;
  overflow: hidden;
  opacity: 0.9;

  & div.line {
    width: 100%;
    position: relative;
    height: 1.4%;
    margin-bottom: 0.6%;
    background: #fff;
  }

  & div.line:nth-child(1) {
    animation: ${rotateLine} 4s 0.2s infinite;
  }
  & div.line:nth-child(2) {
    animation: ${rotateLine} 4s 0.4s infinite;
  }
  & div.line:nth-child(3) {
    animation: ${rotateLine} 4s 0.6s infinite;
  }
  & div.line:nth-child(4) {
    animation: ${rotateLine} 4s 0.8s infinite;
  }
  & div.line:nth-child(5) {
    animation: ${rotateLine} 4s 1s infinite;
  }
  & div.line:nth-child(6) {
    animation: ${rotateLine} 4s 1.2s infinite;
  }
  & div.line:nth-child(7) {
    animation: ${rotateLine} 4s 1.4s infinite;
  }
  & div.line:nth-child(8) {
    animation: ${rotateLine} 4s 1.6s infinite;
  }
  & div.line:nth-child(9) {
    animation: ${rotateLine} 4s 1.8s infinite;
  }
  & div.line:nth-child(10) {
    animation: ${rotateLine} 4s 2s infinite;
  }
  & div.line:nth-child(11) {
    animation: ${rotateLine} 4s 2.2s infinite;
  }
  & div.line:nth-child(12) {
    animation: ${rotateLine} 4s 2.4s infinite;
  }
  & div.line:nth-child(13) {
    animation: ${rotateLine} 4s 2.6s infinite;
  }
  & div.line:nth-child(14) {
    animation: ${rotateLine} 4s 2.8s infinite;
  }
  & div.line:nth-child(15) {
    animation: ${rotateLine} 4s 3s infinite;
  }
  & div.line:nth-child(16) {
    animation: ${rotateLine} 4s 3.2s infinite;
  }
  & div.line:nth-child(17) {
    animation: ${rotateLine} 4s 3.4s infinite;
  }
  & div.line:nth-child(18) {
    animation: ${rotateLine} 4s 3.6s infinite;
  }
  & div.line:nth-child(19) {
    animation: ${rotateLine} 4s 3.8s infinite;
  }
  & div.line:nth-child(20) {
    animation: ${rotateLine} 4s 4s infinite;
  }
  & div.line:nth-child(21) {
    animation: ${rotateLine} 4s 4.2s infinite;
  }
  & div.line:nth-child(22) {
    animation: ${rotateLine} 4s 4.4s infinite;
  }
  & div.line:nth-child(23) {
    animation: ${rotateLine} 4s 4.6s infinite;
  }
  & div.line:nth-child(24) {
    animation: ${rotateLine} 4s 4.8s infinite;
  }
  & div.line:nth-child(25) {
    animation: ${rotateLine} 4s 5s infinite;
  }
  & div.line:nth-child(26) {
    animation: ${rotateLine} 4s 5.2s infinite;
  }
  & div.line:nth-child(27) {
    animation: ${rotateLine} 4s 5.4s infinite;
  }
  & div.line:nth-child(28) {
    animation: ${rotateLine} 4s 5.6s infinite;
  }
  & div.line:nth-child(29) {
    animation: ${rotateLine} 4s 5.8s infinite;
  }
  & div.line:nth-child(30) {
    animation: ${rotateLine} 4s 6s infinite;
  }
  & div.line:nth-child(31) {
    animation: ${rotateLine} 4s 6.2s infinite;
  }
  & div.line:nth-child(32) {
    animation: ${rotateLine} 4s 6.4s infinite;
  }
  & div.line:nth-child(33) {
    animation: ${rotateLine} 4s 6.6s infinite;
  }
  & div.line:nth-child(34) {
    animation: ${rotateLine} 4s 6.8s infinite;
  }
  & div.line:nth-child(35) {
    animation: ${rotateLine} 4s 7s infinite;
  }
  & div.line:nth-child(36) {
    animation: ${rotateLine} 4s 7.2s infinite;
  }
  & div.line:nth-child(37) {
    animation: ${rotateLine} 4s 7.4s infinite;
  }
  & div.line:nth-child(38) {
    animation: ${rotateLine} 4s 7.6s infinite;
  }
  & div.line:nth-child(39) {
    animation: ${rotateLine} 4s 7.8s infinite;
  }
  & div.line:nth-child(40) {
    animation: ${rotateLine} 4s 8s infinite;
  }
  & div.line:nth-child(41) {
    animation: ${rotateLine} 4s 8.2s infinite;
  }
  & div.line:nth-child(42) {
    animation: ${rotateLine} 4s 8.4s infinite;
  }
  & div.line:nth-child(43) {
    animation: ${rotateLine} 4s 8.6s infinite;
  }
  & div.line:nth-child(44) {
    animation: ${rotateLine} 4s 8.8s infinite;
  }
  & div.line:nth-child(45) {
    animation: ${rotateLine} 4s 9s infinite;
  }
  & div.line:nth-child(46) {
    animation: ${rotateLine} 4s 9.2s infinite;
  }
  & div.line:nth-child(47) {
    animation: ${rotateLine} 4s 9.4s infinite;
  }
  & div.line:nth-child(48) {
    animation: ${rotateLine} 4s 9.6s infinite;
  }
  & div.line:nth-child(49) {
    animation: ${rotateLine} 4s 9.8s infinite;
  }
  & div.line:nth-child(50) {
    animation: ${rotateLine} 4s 10s infinite;
  }
`;
