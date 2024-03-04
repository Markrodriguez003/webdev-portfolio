import styled, { css, keyframes } from "styled-components";
import planetB from "../../assets/textures/planet-2.png";
export const SectionContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  overflow: hidden;
  height: 100%;
  transition: none;
`;

export const SateliteContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  overflow: hidden;
  height: 100%;
  transition: none;
  border: pink 2px solid;
`;

export const RightColumnPanel = styled.div`
  display: block;
  position: relative;
  color: white;
  font-size: 1.15em;
  font-family: "body";
  text-align: left;
  word-wrap: break-word;
  padding-top: 25px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;

  & h1 {
    font-size: 2.5em;
    background-color: aliceblue;
    color: black;
    display: inline-block;
    margin-bottom: 20px;
    padding: 5px;
  }
  & h2 {
    font-size: 1.5em;
    display: inline-block;
    padding: 5px;

    & h2 #normal-header {
      text-align: left;
    }

    & h2 #inverted-header {
      background-color: aliceblue;
      color: black;
      padding-right: 50px;
      text-align: right;
    }

    &:nth-child(odd) {
      background-color: aliceblue;
      color: black;
      padding-right: 50px;
      text-align: right;
    }
  }

  & small {
    text-align: center;
  }
`;

export const ProjectItem = styled.li`
  cursor: pointer;
  text-transform: uppercase;
  font-size: 33px;
  margin-bottom: 10px;
  color: ${(props) => (props.selected === true ? "black" : "aliceblue")};
  background-color: ${(props) =>
    props.selected === true ? "aliceblue" : "transparent"};
  font-variation-settings: ${(props) =>
    props.selected === true ? "wght 582" : "wght 311"};
  letter-spacing: ${(props) => (props.selected === true ? "-3px" : "0.1px")};
  transition: 0.2s linear;
  /* &:not(:nth-child(5)){
    color:red;
  }; */

  /* &:hover {
    background-color: rgba(0, 0, 255, 0.05);
  } */
`;
export const ProjectsUL = styled.ul`
  text-decoration: none;
  list-style: none;
  font-family: "body";
  font-weight: bold;
  padding-top: 0px;
  text-align: start;
`;

export const LeftHeaderColumn = styled.div`
  display: flex;
  flex-direction: column;

  flex-wrap: wrap;

  & p {
    font-family: "body";
    color: white;
    font-size: 1.2em;
    padding-left: 28px;
    width: 280px;
    text-align: left;
  }
`;

// planet

export const PlanetLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 300px;
`;

const spin = keyframes`
 100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

// export const Planet = styled.div`
//   background: radial-gradient(circle at 100px 100px, #5cabff, #000);
//   background-blend-mode: darken;
//   background-image: url(${planetB});
//   background-repeat: no-repeat;
//   background-size: cover;
//   position: absolute;
//   background-color: #5cabff;
//   bottom: -325px;
//   left: -110px;
//   width: 550px;
//   height: 550px;
//   border-radius: 50%;
//   animation: ${spin} 115s linear infinite;
//   box-shadow: inset 0 0 60px #131312;
//   z-index: 1;
// `;

// other planet

export const PlanetContainer = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  left: -80px;
  bottom: -90px;
  margin: 20px;
  -webkit-perspective: 1200px;
  -moz-perspective: 1200px;
  -ms-perspective: 1200px;
  -o-perspective: 1200px;
  perspective: 1200px;
  overflow: hidden;
  perspective-origin: 50% 50%;
`;

const moveMap = keyframes`
  0% {
    background-position: -849px 0; }

  100% {
    background-position: 0 0; } `;

export const Planet = styled.div`
  display: inline-block;
  width: 485px;
  height: 485px;
  margin: 0;
  border-radius: 50%;

  transform-style: preserve-3d;
  background: url(${planetB}) repeat-x;
  background-size: auto 2360px;
  animation: ${moveMap} 140s infinite linear, ${spin} 205s linear infinite;

  &:before {
    content: "";
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: -40px 10px 70px 10px rgba(0, 0, 0, 0.5) inset;
    z-index: 2;
  }

  &:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    filter: blur(0);
    opacity: 0.3;
    background: radial-gradient(
      circle at 50% 80%,
      #81e8f6,
      #76deef 10%,
      #055194 66%,
      #062745 100%
    );
  }

  & span.shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.1) 40%,
      rgba(0, 0, 0, 0) 50%
    );

    transform: rotateX(90deg) translateZ(-150px);
    z-index: -1;
  }
`;
