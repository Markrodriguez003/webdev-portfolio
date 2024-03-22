import styled, { css, keyframes } from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  overflow: hidden;
  height: 100%;
  width: 100%;
  transition: none;

  @media (max-width: 1200px) {
    border-left: none;
    padding: 0px;
    flex-direction: column;
  }
`;

// LEFT COLUMN
export const LeftHeaderColumn = styled.div`
  display: flex;
  width: 22%;
  /* background-color: cadetblue; */
  flex-direction: column;
  padding: 25px 0px 0px 20px;

  @media (max-width: 1200px) {
    padding: 0px;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  /* & p {
    @media (max-width: 1200px) {
      display: none;
    }
  } */

  & p #resume-about {
    @media (max-width: 380px) {
      font-size: 0.2em;
    }
  }

  // 2k/4k Monitors
  /* @media screen and (min-width: 1740px) {
    margin-right: 100px;
  } */

  & p {
    font-family: "body";
    color: white;
    font-size: 1.2em;

    width: 280px;
    text-align: left;

    @media (max-width: 1200px) {
      text-align: center;
      padding-left: 0px;
    }

    // 2k/4k Monitors
    @media screen and (min-width: 2000px) {
      font-size: 1.5rem;
    }
  }
`;

// RIGHT COLUMN
export const RightColumnPanel = styled.div`
  display: block;
  position: relative;
  color: white;
  font-size: 1.15em;
  font-family: "body";
  text-align: left;
  word-wrap: break-word;
  padding-top: 25px;
  width: 100%;
  margin-left: 0px;
  margin-right: 5%;

  @media (max-width: 380px) {
    width: 85%;
  }

  & p {
    @media (max-width: 380px) {
      text-align: left;
    }
  }

  & h1 {
    font-size: 2.5em;
    background-color: aliceblue;
    color: black;
    display: inline-block;
    margin-bottom: 20px;
    padding: 5px;
    @media (max-width: 1200px) {
      font-size: 2em;
    }
  }
  & h2 {
    font-size: 1.5em;
    display: inline-block;
    padding: 5px;

    & h2 #normal-header {
      text-align: left;
    }

    & h2 #inverted-header {
      background-color: aliceblue;
      color: black;
      padding-right: 50px;
      text-align: right;
    }

    &:nth-child(odd) {
      background-color: aliceblue;
      color: black;
      padding-right: 50px;
      text-align: right;

      @media (max-width: 1200px) {
        text-align: center;
        padding-right: 0px;
      }
    }
  }

  & small {
    text-align: center;
  }

  @media (max-width: 1200px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const HeaderDetailsPanel = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`;
