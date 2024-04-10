import styled, { css, keyframes } from "styled-components";

const dialoguePop = keyframes`
    20%, 80% {transform: scale(1.2);}
    100% {transform: scale(0); display:"none"}
    /* 20%  {transform: scale(1.2);} */
    /* 100%  {transform: scale(0);} */

`;

export const SpeechBubbleContainer = styled.div`
  position: relative;
  width: 80px;
  background: transparent;
  border: ${(props) =>
    props.solidBorder ? "2px solid aliceblue" : "2px dotted aliceblue;"};
  font-style: ${(props) => (props.italics ? "italic" : "normal")};
  /* font-family: 'arial, Courier New', Courier, monospace; */
  font-family: arial;
  padding: 15px;
  text-align: center;
  transform: scale(0);
  /* font-weight: ; */
  color: #fff;
  position: relative;
  animation: ${dialoguePop} 3s both;
  /* border-radius:50%; */

  & * {
    font-size: 12px;
  }

  &.none:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border: none;
    /* right: -21px; */
    /* top: 6px; */
  }
  // SPEECH BUBBLE DIRECTION
  &.top-right:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid aliceblue;
    border-right: 10px solid transparent;
    border-top: 10px solid aliceblue;
    border-bottom: 10px solid transparent;
    right: -21px;
    top: 6px;
  }

  &.top-left:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid aliceblue;
    border-top: 10px solid aliceblue;
    border-bottom: 10px solid transparent;
    left: -19px;
    top: 6px;
  }

  &.bottom-left:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 5px solid aliceblue;
    border-right: 5px solid transparent;
    border-top: 5px solid aliceblue;
    border-bottom: 5px solid transparent;
    left: 19px;
    bottom: -10px;
  }

  &.bottom-right:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid aliceblue;
    border-top: 10px solid aliceblue;
    border-bottom: 10px solid transparent;
    right: 19px;
    bottom: -19px;
  }
`;
