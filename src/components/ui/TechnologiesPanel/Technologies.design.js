import styled, { css, keyframes } from "styled-components";


export const TechnologyPanel = styled.div`
 position:absolute;
 display:block;
 /* width:10%; */
 width: ${(props) =>
      props.togglePanel === false
         ? "0%"
         : "100%"};
 height:580px;
 background-color: rgba(0,0,0,0.95);
 color: aliceblue ;
 z-index: 2 ;
 overflow:hidden;
 
 white-space: nowrap ;
 transition: linear 0.3s;
 
 & h1 {
    white-space: nowrap ;
    margin-top: 20px;
    @media screen and (max-width: 625px) {
      font-size: 2.2rem;
  }
 }
`;