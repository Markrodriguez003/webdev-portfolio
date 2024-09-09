import styled, { css, keyframes } from "styled-components";

// ANIMATION
const rainbowFX = keyframes`
 /* from {background-color: tomato;}
 to {background-color: darkgoldenrod;} */
 0% {
		background-color:indigo ;
	}
	25% {
		background-color:darkgreen;
	}
	50% {
		background-color: rgba(255,0,195,1);
	}
	75% {
		background-color: rgba(255,100,0,1);
	}
	100% {
		background-color: rgba(205,5,25,1);
	}
`;
export const BarContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 20px;
  margin-top: 25px;
  background-color: transparent;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  overflow: auto;
  cursor: pointer;

  @media (max-width: 1199px) {
    flex-wrap: wrap;
  }
  & div * {
    display: flex;
    position: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    align-content: center;
    font-size: 0.85em;
    margin-left: auto;
    margin-right: auto;
    transition: 2s ease-in-out;
    color: aliceblue;
    margin-bottom: 12px;

    @media (max-width: 1199px) {
      margin-bottom: 0px;
    }

    @media (max-height: 725px) {
      font-size: 0.75em;

      }
  }

  & div #flex-icon {
    /* animation: ${rainbowFX} 10s infinite alternate ease-in-out; */
    background-color:  rgba(215,60,0,1);
    color: white;
    font-size: 30px;

    @media (max-height: 725px) {
      font-size: 24px;
      }
  }
`;

export const FutureBarContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
`;
