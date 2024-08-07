import styled, { css, keyframes } from "styled-components";

export const BarContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 25px;

  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  cursor: pointer;
  & div * {
    display: flex;
    position: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    align-content: center;
    font-size: 0.9em;
    margin-left: auto;
    margin-right: auto;
    transition: 2s ease-in-out;
    color: aliceblue;
    margin-bottom: 12px;
    @media (max-width: 1199px) {
      margin-bottom: 0px;
    }
  }

  & div #flex-icon {
    background-color: goldenrod;
    color: white;
    font-size: 30px;
  }
`;

export const FutureBarContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
`;
