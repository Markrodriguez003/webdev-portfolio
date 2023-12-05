import styled, { css, keyframes } from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  /* background-color: blueviolet; */
`;

export const RightColumnPanel = styled.div`
  display: inline;
  position: relative;
  color: white;
  font-size: 1.4em;
  font-family: "body";
  text-align: left;
  word-wrap: break-word;
  padding-top: 55px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  & h1 {
    font-size: 70px;
    background-color: aliceblue;
    color: black;
    display: inline-block;
    padding-right: 20px;
    margin-bottom: 20px;
  }
  & h2 {
    font-size: 1.8em;
    display: inline-block;

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
    }
  }

  & small {
    text-align: center;
  }
`;

export const LeftHeaderColumn = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: pink; */
  flex-wrap: wrap;

  & p {
    font-family: "body";
    color: white;
    font-size: 1.2em;
    padding-left: 28px;
    width: 280px;
    text-align: left;
  }
`;
