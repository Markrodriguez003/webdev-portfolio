import styled, { keyframes } from "styled-components";

const fadeAnimation = keyframes`
 0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const LoadingScreenContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  /* background-color: rgba(0, 0, 0, 1); */
  background-color: transparent;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
`;

export const LoadingText = styled.h2`
  font-family: header;
  font-size: 2.5rem;
  font-weight: bold;
  color: white !important;
  text-align: center;
  letter-spacing: 0.1rem;
  /* transition: 0.5s linear;
  animation-direction: normal; */

  animation: ${fadeAnimation} 2s linear 2s infinite alternate;
`;
