import styled, { css, keyframes } from "styled-components";
import satellite from "../../assets/images/satellite-1.png";
import astronautContact from "../../assets/images/astronaut-3.png";
export const FormContainer = styled.form`
  display: inline-flex;
  position: relative;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  font-family: "body";
  gap: 15px;
  padding: 18px;
  color: white;
  /* background-color: rgba(215, 215, 215, 0.2); */
  /* border: rgba(255, 255, 255, 0.1) 0.5px solid; */
  /* border-radius: 5%;s */
  padding-top: 10px;
  width: 100%;
  padding-right: 25px;
  /* margin-top: 150px; */

  & label {
  }

  & input {
    width: 30vw;
    height: 4vh;
    font-size: 25px;
    background-color: rgba(191, 191, 191, 0.12);
    color: white;
    font-family: "body";
  }
  & textarea {
    width: 30vw;
    height: 25vh;
    font-size: 25px;
    background-color: rgba(191, 191, 191, 0.12);
    color: white;
    resize: none;
  }
`;

export const SatellightContainer = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  background-color: red;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  /* border: pink 2px solid; */
  z-index: 1;
`;

export const Satellite = styled.div`
  filter: brightness(0.95);
  background-image: url(${satellite});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  transform: scaleX(-1) rotate(-7deg);
  right: -255px;
  top: 25px;
  width: 255px;
  height: 255px;
  margin-left: auto;
  margin-right: auto;
  /* animation: spin 115s linear infinite; */
  /* box-shadow: inset 0 0 60px #131312; */
  z-index: 1;
`;

export const AstronautContact = styled.div`
  background-blend-mode: darken;
  filter: grayscale(5%);
  background-image: url(${astronautContact});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  transform: scaleX(-1) rotate(-15deg);
  right: -55px;
  top: 300px;
  width: 325px;
  height: 325px;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
`;
