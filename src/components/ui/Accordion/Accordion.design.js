import styled, { css, keyframes } from "styled-components";

export const AccordionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: start;
  width: 100%;

  height: auto;

  & * {
  }
`;

export const AccordionPanel = styled.div`
  font-family: "body";
  color: white;
  margin-bottom: 40px;

  & h4 {
    cursor: pointer;
    padding: 0px;
  }
  & section {
    transition: 0.4s ease-in-out;
    position: relative;
    background-color: transparent;
    padding-left: 25px;
    word-wrap: break-word;
    /* height: 0px; */
    max-height: ${(props) => (props.$toggle ? "1000px" : "0px")};
    overflow: hidden;
  }
`;
