import styled, { css, keyframes } from "styled-components";

import caveBackground from "../../../assets/images/space-cave2.png";

export const CaveContainer = styled.div`
  background-image: url(${caveBackground});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100%;
`;

export const MiddleContainer = styled.div`
  /* background-color: pink; */
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  height: 100%;
  color: aliceblue;
  font-size: 1.5rem;

  & h1 {
    font-family: "body";
    font-size: 3.2rem; 
  }

  & h1:first-child{
    font-size: 4.5rem;
  }

  & * {
    padding: 5px;
  }
`;
