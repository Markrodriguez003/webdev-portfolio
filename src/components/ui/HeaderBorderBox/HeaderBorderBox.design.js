import styled, { css, keyframes } from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  display: block;
  margin-right: 20px;
  margin-left: 20px;
  height: 220px;
  width: 100%;
  padding-top: 25px;
  /* background-color: pink; */
  @media (max-width: 1200px) {
    
    padding-left:12.5%;
    margin-left:auto;
    margin-right:auto;
    margin-top:50px;
  }
`;

export const BorderCenter = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-content: center;
  @media (max-width: 1200px) {
    border-left: none;
    padding: 0px;
    flex-direction: column;
  }
`;

export const BorderFrame = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: max-content auto;
  grid-template-rows: auto max-content;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
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
      font-size: 2.5rem;
  }
  }
`;
