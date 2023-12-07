import styled, { css, keyframes } from "styled-components";

export const FormContainer = styled.form`
  display: inline-flex;
  position: relative;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  font-family: "body";
  gap: 15px;
  padding: 10px;
  color: white;
  /* background-color: rgba(215, 215, 215, 0.2); */
  border: rgba(255, 255, 255, 0.1) 0.5px solid;
  /* border-radius: 5%;s */
  padding-top: 10px;
  width: 100%;
  padding-right: 25px;
  /* margin-top: 150px; */

  & label {
  }

  & input {
    width: 30vw;
    height: 4vh;
    font-size: 25px;
    background-color: rgba(191, 191, 191, 0.12);
    color: white;
    font-family: "body";
  }
  & textarea {
    width: 30vw;
    height: 25vh;
    font-size: 25px;
    background-color: rgba(191, 191, 191, 0.12);
    color: white;
    resize: none;
  }
`;
