import styled, { css, keyframes } from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  display: block;
  height: 220px;
  width: 100%;

  @media (max-width: 1200px) {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 30px;
  }
`;

export const BorderCenter = styled.div`
  display: flex;
  position: relative;
  justify-content: start;
  align-content: start;

  @media (max-width: 1200px) {
    border-left: none;
    padding: 0px;
    flex-direction: column;
    /* background-color: purple; */
    align-items: center;
  }
`;

export const BorderFrame = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: max-content auto;
  grid-template-rows: auto max-content;
  background-size: cover;
  color: white;
  width: 240px;
  height: 190px;
  &:before,
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;

    border: 2px solid white;
  }
  &:before {
    grid-row: 1 / 2;
    border-right: none;
    border-bottom: none;
  }
  &:after {
    grid-row: 1 / span 2;
    border-left: none;
  }
  h2 {
    margin: 1rem 1rem -0.5rem 0;
    font-family: sans-serif;
    font-size: 2rem;
    max-width: 100%;
    
    @media (max-width: 1200px) {
      font-size: 2.7rem;
    }
  }
`;
