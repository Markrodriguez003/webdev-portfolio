import styled, { css, keyframes } from "styled-components";


export const CustomAnchorBtn = styled.a`
  cursor: pointer;
  
  text-decoration: none;
  background-color: transparent;
    border: ${(props) =>
    props.styling !== undefined ? "white 2px solid" : "white 2px solid"};
    border-radius: 6px;
    font-size: 1em;
    font-weight: bold;
    margin: 6px;
    padding: 6px 8px;
    color: white;
    transition: 0.25s ease-in-out;
    cursor: pointer;
 
  
      
  @media screen and (max-width: 445px) {
     float:left; 
    clear:left; 
    
 
    
  }

    &:hover {
      background-color: white;
      color: black;
    }
 

  & .active {
    background-color: yellow;
  }
  & span * {
    vertical-align: auto;
    padding-right: 4px;
  }

  & .inverted {
    background-color: aliceblue;
    color: black;
    &:hover {
      background-color: transparent;
      border: aliceblue 2px solid;
      color:aliceblue;
    }
  }
  & .youtube {
    border: red 2px solid;
    &:hover {
      background-color: red;
      color: aliceblue;
    }
  }
  & .github {
    border: green 2px solid;
    &:hover {
      background-color: green;
      color: aliceblue;
    }
  }
  & .website {
    border: blue 2px solid;
    &:hover {
      background-color: blue;
      color: aliceblue;
    }
  }
`;

export const CustomBtn = styled.button`
  cursor: pointer;
  text-decoration: none;

 
    background-color: aliceblue;
    border: ${(props) =>
    props.styling !== undefined ? "white 2px solid" : "white 2px solid"};
    border-radius: 6px;
    font-size: 1em;
    font-weight: bold;
    margin: 4px;
    padding: 6px 15px;
    color: black;
    transition: 0.25s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: transparent;
      color: aliceblue;
    }
  

  & button:active {
    /* background-color: yellow; */
  }
  & span * {
    vertical-align: auto;
    padding-right: 4px;
  }

  & .inverted {
    background-color: transparent;
    color: aliceblue;
    &:hover {
      background-color: black;
      border: aliceblue 2px solid;
      color:aliceblue;
    }
  }
  
`;