import styled, { css, keyframes } from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  display: block;
  /* background-color: bisque; */
  margin-right: 20px;
  margin-left: 20px;
  height: 220px;
  padding-top: 25px;
`;

export const BorderCenter = styled.div`
  display: flex;
  position: relative;
  justify-content: start;
  align-content: start;
  justify-content: center;
  align-content: center;
`;

export const BorderFrame = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: max-content auto;
  grid-template-rows: auto max-content;
  background-size: cover;
  /* color: white; */
  color: white;
  width: 240px;
  height: 190px;
  /* padding: 1.5rem; */
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
    font-family: "Pragati Narrow", sans-serif;
    font-size: 2rem;
    max-width: 100%;
  }
`;
