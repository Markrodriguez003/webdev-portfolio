import styled, { css, keyframes } from "styled-components";

export const FormContainer = styled.form`
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  font-family: "body";
  gap: 15px;
  color: white;
  /* background-color: rgba(215,215,215,0.2); */
  border: rgba(255,255,255,0.1) 0.5px solid;
  /* border-radius: 5%;s */
  padding: 80px;
  width: 95%;
  padding-right:25px;
  /* margin-top: 150px; */

  & input {
    width: 500px;
    height: 30px;
  }
`;
