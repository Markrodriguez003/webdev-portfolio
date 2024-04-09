import styled, { css, keyframes } from "styled-components";

const spaceBackground = keyframes`
    0%,
    100% {
      background-position: 0 0;
    }
  
    50% {
      background-position: -80px 80px;
    }

`;
const animatedStars = keyframes`
from {
      transform: translateY(0px);
    }
  
    to {
      transform: translateY(-2000px);
    }

`;



export const VideoContainer = styled.div`
   z-index: -9999;
   display:inline-block ;
   position: absolute;
   filter: opacity(0.09) hue-rotate(2240deg) saturate(1.3);
   margin:0;
   padding:0;
 
   min-width:100%;
   height: 100%;
   overflow: hidden;
 
    & video {
      margin:0;
      padding:0;
      width:100%;
      height:100%;
        object-fit: cover;

      background-color:pink;
    }
    & video source {
      margin:0;
      padding:0;
      width:100%;
      height:100%;
      background-color:green;
    }

    & * {
      overflow: hidden;
      width: 100% ;
      height: 100%;
      /* transform: scale(1.2); */
    }

`


export const OuterBackgroundContainer = styled.div`
position:relative ;
width:100%;
height:100%;
background: radial-gradient(ellipse at bottom, #0b0e12 0%, #090a0f 100%);
z-index: 9999;
`

export const SpaceBackground = styled.div`

  z-index: -1;
  /* top: 0;
  bottom: 0; */
  left: 50%;
    transform: translate(-50%, 0);
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  position: fixed;
  margin: 0;
  padding: 0;
  background: radial-gradient(ellipse at bottom, #0b0e12 0%, #090a0f 100%);
  /* background: pink; */
  overflow: hidden;
  transition: transform 2s ease-in-out;
  

   @media screen and (max-width: 1200px) {
    overflow: auto;
    min-height: 100%;
    max-height: 100%;
    position: fixed;
 
  }
 /*
  @media screen and (max-width: 600px) {
    height: 1285vh;
  } */

  & div.stars {
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: 483px 450px #fff, 1995px 525px #fff, 755px 1459px #fff,
      610px 1246px #fff, 764px 1850px #fff, 1274px 1697px #fff, 1227px 37px #fff,
      1090px 506px #fff, 341px 1005px #fff, 1002px 755px #fff, 693px 1497px #fff,
      1797px 1626px #fff, 1838px 793px #fff, 802px 881px #fff,
      1117px 1983px #fff, 352px 1465px #fff, 1526px 852px #fff,
      1559px 526px #fff, 517px 516px #fff, 1380px 244px #fff, 662px 1531px #fff,
      1544px 518px #fff, 253px 879px #fff, 774px 1629px #fff, 752px 994px #fff,
      1129px 726px #fff, 232px 1050px #fff, 1766px 290px #fff, 1976px 842px #fff,
      662px 1535px #fff, 257px 1016px #fff, 665px 708px #fff, 1476px 1772px #fff,
      261px 498px #fff, 719px 1459px #fff, 469px 438px #fff, 994px 474px #fff,
      744px 808px #fff, 1609px 1741px #fff, 898px 260px #fff, 1978px 1436px #fff,
      904px 1244px #fff, 123px 773px #fff, 6px 923px #fff, 1973px 1778px #fff,
      1470px 1861px #fff, 1037px 156px #fff, 554px 1905px #fff,
      1508px 849px #fff, 1213px 1603px #fff, 87px 1907px #fff, 492px 527px #fff,
      91px 213px #fff, 492px 15px #fff, 1357px 1157px #fff, 637px 240px #fff,
      1515px 281px #fff, 1757px 682px #fff, 1035px 1298px #fff,
      1019px 1233px #fff, 25px 162px #fff, 262px 884px #fff, 1328px 965px #fff,
      984px 879px #fff, 1213px 689px #fff, 623px 1091px #fff, 1227px 422px #fff,
      1977px 1025px #fff, 620px 474px #fff, 528px 1525px #fff;
    transition: transform 2s ease-in-out;
    animation: ${animatedStars} 50s linear infinite;
    /* animation-fill-mode: both; */

    &:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 1px;
      height: 1px;
      background: transparent;
      box-shadow: 483px 450px #fff, 1995px 525px #fff, 755px 1459px #fff,
        610px 1246px #fff, 764px 1850px #fff, 1274px 1697px #fff,
        1227px 37px #fff, 1090px 506px #fff, 341px 1005px #fff,
        1002px 755px #fff, 693px 1497px #fff, 1797px 1626px #fff,
        1838px 793px #fff, 802px 881px #fff, 1117px 1983px #fff,
        352px 1465px #fff, 1526px 852px #fff, 1559px 526px #fff,
        517px 516px #fff, 1380px 244px #fff, 662px 1531px #fff,
        1544px 518px #fff, 253px 879px #fff, 774px 1629px #fff, 752px 994px #fff,
        1129px 726px #fff, 232px 1050px #fff, 1766px 290px #fff,
        1976px 842px #fff, 662px 1535px #fff, 257px 1016px #fff,
        665px 708px #fff, 1476px 1772px #fff, 261px 498px #fff,
        719px 1459px #fff, 469px 438px #fff, 994px 474px #fff, 744px 808px #fff,
        1609px 1741px #fff, 898px 260px #fff, 1978px 1436px #fff,
        904px 1244px #fff, 123px 773px #fff, 6px 923px #fff, 1973px 1778px #fff,
        1470px 1861px #fff, 1037px 156px #fff, 554px 1905px #fff,
        1508px 849px #fff, 1213px 1603px #fff, 87px 1907px #fff,
        492px 527px #fff, 91px 213px #fff, 492px 15px #fff, 1357px 1157px #fff,
        637px 240px #fff, 1515px 281px #fff, 1757px 682px #fff,
        1035px 1298px #fff, 1019px 1233px #fff, 25px 162px #fff,
        262px 884px #fff, 1328px 965px #fff, 984px 879px #fff, 1213px 689px #fff,
        623px 1091px #fff, 1227px 422px #fff, 1977px 1025px #fff,
        620px 474px #fff, 528px 1525px #fff;
    }
  }

  & div.stars2 {
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: 1585px 315px #fff, 1750px 858px #fff, 502px 1184px #fff,
      1482px 150px #fff, 870px 93px #fff, 1401px 1976px #fff, 494px 1549px #fff,
      1607px 1894px #fff, 1029px 1466px #fff, 1931px 1390px #fff,
      819px 1431px #fff, 521px 1062px #fff, 1754px 574px #fff, 577px 943px #fff,
      850px 1377px #fff, 445px 1835px #fff, 1658px 1675px #fff,
      521px 1144px #fff, 560px 1624px #fff, 1329px 1778px #fff;
    transition: transform 2s ease-in-out;
    animation: ${animatedStars} 100s linear infinite;
    /* animation-fill-mode: both; */

    &:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 2px;
      height: 2px;
      background: transparent;
      box-shadow: 1585px 315px #fff, 1750px 858px #fff, 502px 1184px #fff,
        1482px 150px #fff, 870px 93px #fff, 1401px 1976px #fff,
        494px 1549px #fff, 1607px 1894px #fff, 1029px 1466px #fff,
        1931px 1390px #fff, 819px 1431px #fff, 521px 1062px #fff,
        1754px 574px #fff, 577px 943px #fff, 850px 1377px #fff,
        445px 1835px #fff, 1658px 1675px #fff, 521px 1144px #fff,
        560px 1624px #fff, 1329px 1778px #fff;
    }
  }

  & div.stars3 {
    width: 4px;
    height: 4px;
    border-radius: 400px;
    background: transparent;
    box-shadow: 91px 409px #fff, 1886px 728px #fff, 1294px 970px #fff,
      720px 1215px #fff, 796px 1431px #fff, 834px 1217px #fff,
      1926px 1164px #fff, 1803px 310px #fff, 1532px 1421px #fff,
      1680px 232px #fff;
    transition: transform 2s ease-in-out;
    animation: ${animatedStars} 150s linear infinite;
    /* animation-fill-mode: both; */

    &:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 3px;
      height: 3px;
      background: transparent;
      box-shadow: 91px 409px #fff, 1886px 728px #fff, 1294px 970px #fff,
        720px 1215px #fff, 796px 1431px #fff, 834px 1217px #fff,
        1926px 1164px #fff, 1803px 310px #fff, 1532px 1421px #fff,
        1680px 232px #fff;
    }
  }
  & div.stars4 {
    width: 2px;
    height: 2px;
    border-radius: 400px;
    background: transparent;
    box-shadow: 251px 304px #fff, 1586px 228px #fff, 764px 592px #fff,
      942px 1920px #fff, 458px 1285px #fff, 511px 1001px #fff, 1111px 763px #fff,
      911px 414px #fff, 107px 731px #fff, 880px 429px #fff;
    transition: transform 2s ease-in-out;
    animation: ${animatedStars} 150s linear infinite;
    /* animation-fill-mode: both; */

    &:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 2px;
      height: 2px;
      background: transparent;
      box-shadow: 251px 304px #fff, 1586px 228px #fff, 764px 592px #fff,
        942px 1920px #fff, 458px 1285px #fff, 511px 1001px #fff,
        1111px 763px #fff, 911px 414px #fff, 1107px 731px #fff, 880px 429px #fff;
    }
  }
`;

export const WinkingSpaceBackground = styled.div`

`
