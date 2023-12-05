import styled, { css, keyframes } from "styled-components";

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: start;
  /* background: rgb(2, 120, 36); */
  border: rgba(255, 255, 255, 0.1) 1px solid;
  /* width: 50vw; */
  height: 800px;
`;

export const CardHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 15px;
  letter-spacing: 1.2px;
  font-family: "body";
  border-bottom: grey 1px solid;

  & h2 {
    text-align: start;
    color: white;
    font-size: 2.5em;
  }

  & small {
    color: grey;
    font-size: 15px;
  }
`;

export const CardBody = styled.section`
  font-family: "body";
  letter-spacing: 0.5px;
  color: white;
  padding: 10px 15px;
`;

export const CardFooter = styled.section`
  display: block;
  position: absolute;
  width: 100%;
  bottom: 0;
  font-family: "body";
  letter-spacing: 0.5px;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;

  & button {
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 24px;
    font-weight: bold;
    margin: 4px;
    padding: 6px 15px;
    cursor: pointer;
    background-color: transparent;
    transition: 0.4s ease-in-out;
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
    &:hover{
      background-color: red;
    }
  }
  & button.github {
    border: green 2px solid;
    &:hover{
      background-color: green;
    }
  }
  & button.website {
    border: blue 2px solid;
    &:hover{
      background-color: blue;
    }
  }
`;
