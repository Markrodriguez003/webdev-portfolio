import styled, { css, keyframes } from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  overflow: hidden;
  height: 100%;
  transition: none;

  @media (max-width: 1200px) {
    border-left: none;
    padding: 0px;
    flex-direction: column;
    
  }
`;

export const RightColumnPanel = styled.div`
  display: block;
  position: relative;
  color: white;
  font-size: 1.15em;
  font-family: "body";
  text-align: left;
  word-wrap: break-word;
  padding-top: 25px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
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
export const LeftHeaderColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* background-color: pink; */

  @media (max-width: 1200px) {
    justify-content: center;
    align-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;
    justify-items: center;
    
  }

  & p #resume-about {
    @media (max-width: 380px) {
      font-size: 0.2em;
      color:pink;
    }
  }

  & p {
    font-family: "body";
    color: white;
    font-size: 1.2em;
    padding-left: 28px;
    width: 280px;
    text-align: left;

    @media (max-width: 1200px) {
      text-align: center;
      padding-left: 0px;
    
    }
  }
`;
