import styled, { css, keyframes } from "styled-components";
const meteorColor = [
  "yellow",
  "green",
  "blue",
  "orange",
  "red",
  "purple",
  "pink",
  "brown",
  "white",
  "aqua",
];
function changeupMeteor(id) {
  const meteorColor = [
    "yellow",
    "green",
    "blue",
    "orange",
    "red",
    "purple",
    "pink",
    "brown",
  ];
  let randomColor = Math.floor(Math.random() * 8);
  let chosenMeteorColor = meteorColor[randomColor];

  return chosenMeteorColor;
}

// ANIMATIONS
const showerAnimate = keyframes`
0% {
    transform: rotate(315deg) translateX(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotate(315deg) translateX(-1200px);
    opacity: 0;
  }
`;

export const MeteorContainer = styled.section`
  .meteor-section {
    z-index: -1;
    position: absolute;
    top: -250px;
    left: 0;
    width: 100%;
    overflow:  hidden;
    height: 120vh;
    background-color: transparent;
    background-position-x: center;
    background-size: cover;
    background-color: purple;
  }

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 4px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
      0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1);
    /* animation: animate 3s linear infinite; */
    animation: ${showerAnimate} 3s linear forwards;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 300px;
      height: 1px;
      /* background: linear-gradient(90deg, yellow, transparent); */
      /* background: linear-gradient(90deg, ${changeupMeteor()}, transparent); */
      background: ${(props) =>
    props.meteorTrigger
      ? `linear-gradient(90deg, 
            ${meteorColor[props.meteorTrigger]}
        , transparent)`
      : `linear-gradient(90deg, 
          ${meteorColor[props.meteorTrigger]}
        , transparent)`};
    }

    &:nth-child(1) {
      /* display: none; */
      display: ${(props) => (props.meteortrigger === 1 ? `inline` : "none")};
      top: -10px;
      right: 80px;
      left: initial;
      animation-delay: 0.1s;
      animation-duration: 2s;
    }

    &:nth-child(2) {
      display: ${(props) => (props.meteorTrigger === 2 ? `inline` : "none")};
      top: -10px;
      right: 80px;
      left: initial;
      animation-delay: 0.2s;
      animation-duration: 3s;
    }

    &:nth-child(3) {
      display: ${(props) => (props.meteorTrigger === 3 ? `inline` : "none")};
      top: 80px;
      right: -15px;
      left: initial;
      animation-delay: 0.4s;
      animation-duration: 2s;
    }

    &:nth-child(4) {
      display: ${(props) => (props.meteorTrigger === 4 ? `inline` : "none")};
      top: 0;
      right: 180px;
      left: initial;
      animation-delay: 0.6s;
      animation-duration: 1.5s;
    }

    &:nth-child(5) {
      display: ${(props) => (props.meteorTrigger === 5 ? `inline` : "none")};
      top: -10px;
      right: 400px;
      left: initial;
      animation-delay: 0.8s;
      animation-duration: 2.5s;
    }

    &:nth-child(6) {
      display: ${(props) => (props.meteorTrigger === 6 ? `inline` : "none")};
      top: -10px;
      right: 600px;
      left: initial;
      animation-delay: 1s;
      animation-duration: 3s;
    }
    &:nth-child(7) {
      display: ${(props) => (props.meteorTrigger === 7 ? `inline` : "none")};
      top: 300px;
      right: -15px;
      left: initial;
      animation-delay: 1s;
      animation-duration: 1.75s;
    }

    &:nth-child(8) {
      display: ${(props) => (props.meteorTrigger === 8 ? `inline` : "none")};
      top: -10px;
      right: 700px;
      left: initial;
      animation-delay: 1.4s;
      animation-duration: 1.25s;
    }

    &:nth-child(9) {
      display: ${(props) => (props.meteorTrigger === 9 ? `inline` : "none")};
      top: -10px;
      right: 700px;
      left: initial;
      animation-delay: 0.75s;
      animation-duration: 2.25s;
    }

    &:nth-child(10) {
      display: ${(props) => (props.meteorTrigger === 10 ? `inline` : "none")};
      top: -10px;
      right: 1000px;
      left: initial;

      animation-delay: 2.75s;
      animation-duration: 2.25s;
    }
  }
`;
