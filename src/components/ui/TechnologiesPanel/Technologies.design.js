import styled, { css, keyframes } from "styled-components";

export const TechnologyPanel = styled.div`
  position: absolute;
  display: block;
  /* width:10%; */
  width: ${(props) => (props.togglePanel === false ? "0%" : "100%")};
  height: 625px;
  background-color: rgba(0, 0, 0, 0.95);
  color: aliceblue;
  z-index: 999;
  overflow: hidden;
  white-space: nowrap;
  transition: linear 0.3s;

  & h1 {
    font-size: 2.8rem;

    white-space: nowrap;
    margin-top: 20px;
    @media screen and (max-width: 625px) {
      font-size: 2.2rem;
    }
  }

  & ul {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    /* background-color: pink; */
  }
  & ul li {
    text-align: center;
    list-style: none;
    font-size: 25px;
    padding-top:20px;
  }
`;
