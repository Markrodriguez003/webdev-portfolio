import styled, { css, keyframes } from "styled-components";


export const TechniquePanel = styled.div`
 position:absolute;
 display:block;
 width: ${(props) =>
      props.togglePanel === false
         ? "0px"
         : "100%"};
 height:600px;
 background-color: rgba(0,0,0,0.95);
 color: aliceblue ;
 z-index: 3 ;
 overflow:hidden ;
 
 white-space: nowrap ;
 transition: linear 0.3s;
 
 & h1 {
   margin-top: 20px;
    white-space: nowrap ;
 }
`;