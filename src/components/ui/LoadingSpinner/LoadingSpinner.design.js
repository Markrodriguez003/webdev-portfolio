import styled, { keyframes } from "styled-components";

const spinnerAnimation = keyframes`
     100% {transform:rotate(calc(var(--s,1)*1turn))}
`;

const shapesAnimations = keyframes`
  0%,55%,100%  {border-radius:0  }
  20%,30%      {border-radius:50%}

`;

export const SpinnerShapes = styled.div`
  &,
  &::before,
  &::after {
    width: 35px;
    aspect-ratio: 1;
    box-shadow: 0 0 0 3px inset #fff;
    position: relative;
    animation: ${shapesAnimations} 1.5s infinite 0.5s;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: calc(100% + 5px);
    animation-delay: 1s;
  }

  &::after {
    left: -40px;
    animation-delay: 0s;
  }
`;

// SPINNING ATOM ANIMATION
export const SpinnerAtom = styled.div`
  width: 60px;
  height: 25px;
  border: 2px solid;
  box-sizing: border-box;
  border-radius: 50%;
  display: grid;
  animation: ${spinnerAnimation} 2s infinite linear;
  color: white;
  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    border: inherit;
    border-radius: 50%;
    animation: inherit;
    animation-duration: 3s;
  }

  &::after {
    --s: -1;
  }
`;

// CONTAINER TO HOLD LOADING SPINNER ANIMATION
export const LoadingSpinnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: transparent;
  z-index: 9999;
  color: white;

  & h1 {
    /* width: 35%; */
    text-align: center;
    padding: 8px 10px 10px 8px;
    border-radius: 30px;
  }
`;
