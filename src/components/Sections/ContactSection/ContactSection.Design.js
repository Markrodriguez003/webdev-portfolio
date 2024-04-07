import styled, { css, keyframes } from "styled-components";

import satellite from "../../../assets/images/satellite-1.png";
import astronautContact from "../../../assets/images/astronaut-3.png";
import qrcode from "../../../assets/images/qr-example.png";

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
    transform: translate(0, 28px) rotate(4deg scaleX(-1));
  }
  100% {
    transform: translate(0, -0px) scaleX(-1);
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
    transform: translate(0, -0px);
    }
`;



export const ContactUsOuterContainer = styled.div`
position:relative ;
display:flex ;
flex-direction: row ;
 justify-content: center ;
 align-items: center ;
border: rgba(255, 255, 255, 0.1) 1px solid;
width: 100% ;
background-color:transparent;
`

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
background-repeat: no-repeat;
background-size: contain;
position: block;
/* background-color: red; */
width: auto;
margin-left: auto;
margin-right: 225px;
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
/* position: absolute; */
position: relative;
transform: scaleX(-1) rotate(-7deg);
/* right: -255px; */
/* top: 25px; */
width: 255px;
height: 255px;
margin-left: auto;
margin-right: auto;

 
animation: ${floatB} 18s ease-in-out infinite;
/* animation: spin 115s linear infinite; */
/* box-shadow: inset 0 0 60px #131312; */
z-index: 1;
`;

export const AstronautContact = styled.div`
background-blend-mode: darken;
background-image: url(${astronautContact});
background-repeat: no-repeat;
background-size: contain;
position: relative;
 
/* transform: scaleX(-1) rotate(-65deg); */
 
width: auto;
height: 325px;
margin-top: 100px;
/* margin-left: auto; */
/* margin-right: auto; */
z-index: 1;
animation: ${floatA} 10s ease-in-out infinite;
`;


export const FullContactView = styled.div`
display: relative ;

@media screen and (max-width: 1200px) {
  display: none;
}


`
export const MidContactView = styled.div`
 
 display: none;
 

@media (max-width: 1200px  ) and (min-width: 801px)  {
  display: block; 
 
}


`
export const MiniContactView = styled.div`
 
 display: none;
 

@media (max-width: 1200px) {
  display: block;
  /* background-color:pink; */
 
}


`

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

