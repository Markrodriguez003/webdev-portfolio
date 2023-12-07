import styled, { css, keyframes } from "styled-components";

export const PaginationText = styled.div`
  position: absolute;
  display: inline-block;
  right: 13px;
  bottom: 280px;
  background-color: purple;
  transform: rotate(-90deg);
  overflow: hidden;
  
  & p {
    display: block;
    color: rgba(235, 235, 235, 0.6);
    font-size: 20px;
    font-family: "body";
 
  }
`;
