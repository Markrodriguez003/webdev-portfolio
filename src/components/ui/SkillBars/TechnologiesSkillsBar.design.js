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

const pulseBrightness = keyframes`
  0% {
    filter: brightness(100%);
  }
  50% {
    filter: brightness(180%);
  }
  100% {
    filter: brightness(100%);
  }
`

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

  @media (max-width: 1199px) {
    flex-wrap: wrap;
  }

  @media (max-width: 565px) {
    justify-content: center;
    align-content: center;
    align-items: center;
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
    background-color: rgba(215, 60, 0, 1);
    color: white;
    font-size: 24px;

     background: linear-gradient(to right, #000000ff, #7e7e7eff, #ccc, #eee, #ccc); /* Silver gradient */
        -webkit-background-clip: text; /* Clip background to text/icon shape */
        background-clip: text;
        -webkit-text-fill-color: transparent; /* Make text transparent to show clipped background */
        filter: drop-shadow(0 0 5px rgba(219, 219, 219, 0.7)) /* White glow for shine */
                contrast(1.5) /* Enhance contrast for metallic look */
                brightness(1.2); /* Brighten for a shinier effect */

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
