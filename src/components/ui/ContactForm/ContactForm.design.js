import styled, { css, keyframes } from "styled-components";
import satellite from "../../../assets/images/satellite-1.png";
import astronautContact from "../../../assets/images/astronaut-3.png";
import qrcode from "../../../assets/images/qr-example.png";

export const FormContainer = styled.form`
  display: inline-flex;
  position: relative;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  font-family: "body";
  gap: 12px;
  padding: 15px;
  color: white;
  padding-top: 10px;
  width: 100%;
  border: rgba(255, 255, 255, 0.1) 1px solid;
  height: 91vh;

  margin-right: 38px;

  @media screen and (max-width: 1115px) {
    justify-content: center;
    align-items: center;
  }

  & label {
  }

  & select {
    width: 30vw;
    height: 5.5vh;
    font-size: 25px;
    background-color: rgba(191, 191, 191, 0.12);
    color: white;
    font-family: "body";

    @media screen and (max-width: 1115px) {
      width: 45vw;
    }
    @media screen and (max-width: 675px) {
      width: 65vw;
    }

    * {
      background-color: black;
      color: white;
    }
  }

  & input {
    width: 30vw;
    height: 4vh;
    font-size: 25px;
    background-color: rgba(191, 191, 191, 0.12);
    color: white;
    font-family: "body";
    @media screen and (max-width: 1115px) {
      width: 45vw;
    }
    @media screen and (max-width: 675px) {
      width: 65vw;
    }
  }
  & textarea {
    width: 30vw;
    height: 16vh;
    font-size: 25px;
    background-color: rgba(191, 191, 191, 0.12);
    color: white;
    resize: none;
    @media screen and (max-width: 1115px) {
      width: 35vw;
    }

    @media screen and (min-width: 1540px) {
      height: 20vh;
    }

    @media screen and (max-width: 675px) {
      width: 55vw;
    }
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
  z-index: 1;
  @media screen and (max-width: 1115px) {
    display: none;
  }
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
