import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const fadeInUpdate = keyframes`
  0% { opacity: 0; }
  100% { opacity: 0.2; }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: start;
  border: rgba(255, 255, 255, 0.1) 1px solid;
  height: 90vh;
  margin-left:12px;
  animation: ${(props) =>
    props.toggle
      ? css`
          ${fadeIn} 1s linear
        `
      : css`
          ${fadeInUpdate} 1s linear
        `};
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
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgba(255, 25, 255, 0.02);
  & * {
  }
`;
