import styled, { css, keyframes } from "styled-components";

export const ModalOuterContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  filter: blur(50%);
  z-index: 9999;

  * {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ModalExitBtn = styled.button`
  color: white;
  background-color: black;
  text-decoration: none;
  font-family: "header";
  font-size: 1.5rem;
  padding: 0px 20px;
  transition: 0.3s;
  font-weight: bold;

  &:hover {
    background-color: aliceblue;
    color: black;
  }
`;
