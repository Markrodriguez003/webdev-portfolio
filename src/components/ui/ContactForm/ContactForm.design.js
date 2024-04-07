import styled, { css, keyframes } from "styled-components";



export const FormContainer = styled.form`
  display: inline-flex;
  position: relative;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  font-family: "body";
  gap: 12px;
  padding: 15px;
  color: white;
  padding-top: 10px;
  width: 100%;
  height: 91vh;
 
  @media screen and (max-width: 1115px) {
    justify-content: center;
    align-items: center;

    margin-right: 0px;
  }

  & label {
  }

  & select {
    width: 30vw;
    height: 5.5vh;
    font-size: 25px;
    background-color: rgba(191, 191, 191, 0.12);
    color: white;
    font-family: "body";

    @media screen and (max-width: 1115px) {
      width: 45vw;
    }
    @media screen and (max-width: 675px) {
      width: 65vw;
    }

    * {
      background-color: black;
      color: white;
    }
  }

  & input {
    width: 30vw;
    height: 4vh;
    font-size: 25px;
    background-color: rgba(191, 191, 191, 0.12);
    color: white;
    font-family: "body";
    @media screen and (max-width: 1115px) {
      width: 45vw;
    }
    @media screen and (max-width: 675px) {
      width: 65vw;
    }
  }
  & textarea {
    width: 30vw;
    height: 16vh;
    font-size: 25px;
    background-color: rgba(191, 191, 191, 0.12);
    color: white;
    resize: none;
    @media screen and (max-width: 1115px) {
      width: 35vw;
    }

    @media screen and (min-width: 1540px) {
      height: 20vh;
    }

    @media screen and (max-width: 675px) {
      width: 55vw;
    }
  }
`;

 