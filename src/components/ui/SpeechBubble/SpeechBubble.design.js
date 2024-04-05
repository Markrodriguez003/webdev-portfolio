import styled, { css, keyframes } from "styled-components";

const dialoguePop = keyframes`
    20%, 80% {transform: scale(1.2);}
    100% {transform: scale(0);}
    /* 20%  {transform: scale(1.2);} */
    /* 100%  {transform: scale(0);} */

`;

export const SpeechBubbleContainer = styled.div`
  width: 150px;
  margin: 50px auto;
  background: transparent;
  border: 3px solid aliceblue;
  padding: 20px;
  text-align: center;
  transform: scale(0);
  /* font-weight: ; */
  color: #fff;
  font-family: arial;
  position: relative;
  animation: ${dialoguePop} 3s both;
  // SPEECH BUBBLE DIRECTION
  &.top-right:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid #00bfb6;
    border-right: 10px solid transparent;
    border-top: 10px solid #00bfb6;
    border-bottom: 10px solid transparent;
    right: -19px;
    top: 6px;
  }

  &.top-left:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid #00bfb6;
    border-top: 10px solid #00bfb6;
    border-bottom: 10px solid transparent;
    left: -19px;
    top: 6px;
  }

  &.bottom-left:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid aliceblue;
    border-right: 10px solid transparent;
    border-top: 10px solid aliceblue;
    border-bottom: 10px solid transparent;
    left: 19px;
    bottom: -20px;
  }

  &.bottom-right:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid #00bfb6;
    border-top: 10px solid #00bfb6;
    border-bottom: 10px solid transparent;
    right: 19px;
    bottom: -19px;
  }
`;
