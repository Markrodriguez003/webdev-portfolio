import styled, { css, keyframes } from "styled-components";

export const IntroductionContainer = styled.div`
  display: inline-flex;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  font-family: "body";
`;

export const WelcomeContainer = styled.div`
  display: inline;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  border-left: white 3.5px solid;
  text-align: left;
  padding-left: 12px;
  & p {
    color: white;
    width: 500px;
    padding-bottom: 50px;
    margin-bottom: -38px;
  }
  & h1 {
    font-size: 5.2em;
    color: white;
    font-weight: 600;
    margin-bottom: 10px;
    letter-spacing: 3.2px;
  }
`;

export const NavContainer = styled.nav`
  display: inline-flex;
  position: relative;
  flex-direction: column;
  justify-content: start;
  align-content: start;
  padding-right: 12px;
  padding-top: 12px;

  & ul li {
    text-decoration: none;
    list-style-type: none;
    padding-bottom: 8px;
    text-align: right;
  }
  & ul li a {
    color: white;
    font-size: 3em;
    font-weight: bold;
    letter-spacing: 1.8px;
    font-family: "header";
    text-decoration: none;
    /* padding: 2px; */
    transition: linear 0.2s;
  }
  & ul li a:link {
  }
  & ul li a:visited {
  }
  & ul li a:hover {
    font-size: 3.4em;
    padding: 10px;
    /* background<div>
      <small style={{color:"white"}}>{data[0]}</small>
    </div>-color: rgba(232, 236, 241, 0.2); */
  }
  & ul li a:active {
  }
`;

export const PaginationTag = styled.span`
  position: absolute;
  right: -10px;
  bottom:280px;
  color: rgba(235, 235, 235, 0.6);
  font-size: 20px;
  font-family: body;
  transform: rotate(-90deg);
`;
