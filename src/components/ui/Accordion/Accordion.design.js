import styled, { css, keyframes } from "styled-components";

export const AccordionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: start;
  width: 100%;
  height: auto;
`;

export const AccordionPanel = styled.div`
  font-family: "body";
  color: white;

  & h4 {
    cursor: pointer;
    padding: 10px;
  }
  & section {
    transition: 0.3s ease-in-out;
    position: relative;
    background-color: darkgrey;
    padding-left: 25px;
    word-wrap: break-word;
    /* height: 0px; */
    height: ${(props) => (props.$toggle ? "100px" : "0px")};
    overflow: hidden;
  }
`;
