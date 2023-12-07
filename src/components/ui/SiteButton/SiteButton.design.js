import styled, { css, keyframes } from "styled-components";

export const CustomButton = styled.a`
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;

  & button {
    background-color: transparent;
    border: ${(props) =>
      props.styling !== undefined ? "white 2px solid" : "white 2px solid"};
    border-radius: 6px;
    font-size: 24px;
    font-weight: bold;
    margin: 4px;
    padding: 6px 15px;
    color: white;
    transition: 0.25s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: black;
    }
  }

  & button:active {
    background-color: yellow;
  }
  & span * {
    vertical-align: auto;
    padding-right: 4px;
  }

  & button.youtube {
    border: red 2px solid;
    &:hover {
      background-color: red;
      color: white;
    }
  }
  & button.github {
    border: green 2px solid;
    &:hover {
      background-color: green;
      color: white;
    }
  }
  & button.website {
    border: blue 2px solid;
    &:hover {
      background-color: blue;
      color: white;
    }
  }
`;
