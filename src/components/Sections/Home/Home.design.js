import styled, { css, keyframes } from "styled-components";

export const IntroductionContainer = styled.div`
  display: inline-flex;
  position: relative;
  flex-direction: row;

  font-family: "body";
  top: -50px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    align-self: center;
    justify-items: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ScrollToExplore = styled.div`
display: block;
  color:grey;
  font-family:"body";
  font-size: 12px;
  text-align:center ;
  margin-left: auto;
  margin-right: auto;
  margin-top: 85px;
 
  

    @media (max-width: 1200px) {
   
      margin-top: -50px;
    margin-bottom: 140px;
    }
    @media (max-width: 600px) {
   
      margin-top: 20px;
    margin-bottom: 140px;
    }

`

export const WelcomeContainer = styled.div`
  display: inline;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  border-left: white 3.5px solid;
  text-align: left;
  padding-left: 12px;

  @media (max-width: 1200px) {
    border-left: none;
    padding: 0px;
  }

  & p {
    color: white;
    width: 500px;
    padding-bottom: 50px;
    margin-bottom: -38px;
    font-size: 18px;
    @media (max-width: 1200px) {
      order: 1;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    @media (max-width: 550px) {
      justify-content: center;
      align-items: center;
      padding-left: 0px;
      width: 80%;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }
  & h1 {
    font-size: 5.2em;
    color: white;
    font-weight: 600;
    margin-bottom: 10px;
    letter-spacing: 3.2px;

    @media (max-width: 1200px) {
      order: 1;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 0px;
      text-align: center;
    }

    @media (max-width: 800px) {
      font-size: 4.2em;
      justify-content: center;
      align-items: center;
    }
    @media (max-width: 415px) {
      font-size: 3.5em;
    }
    @media (max-width: 340px) {
      font-size: 2.7em;
    }
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
  
  @media (max-width: 1200px) {
    order: 1;
    flex-direction: row;
    padding-right: 0px;
  }

  & ul {
    @media (max-width: 1200px) {
      order: 1;
      flex-direction: row;
      padding: 0px;
    }
  }

  & ul li {
    text-decoration: none;
    list-style-type: none;
    padding-bottom: 8px;
    text-align: right;
    @media (max-width: 1200px) {
      text-align: center;
    }

    @media (max-width: 340px) {
      font-size: 0.9em;
    }
  }
  & ul li a {
    color: white;
    font-size: 3em;
    font-weight: 300;
    letter-spacing: 1.5px;
    font-family: "body";
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
    cursor: pointer ;
    /* background<div>
      <small style={{color:"white"}}>{data[0]}</small>
    </div>-color: rgba(232, 236, 241, 0.2); */
  }
  & ul li a:active {
  }
`;
