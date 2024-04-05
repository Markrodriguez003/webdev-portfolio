/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// REACT
import { useState } from "react";

// STYLING / STYLED COMPONENTS
import { SpeechBubbleContainer } from "./SpeechBubble.design";

// COMPONENTS
import AnimatedHeader from "../AnimatedHeader";

function SpeechBubble({ children, direction }) {
  let innerText = children.toString();

  return (
    <>
      <SpeechBubbleContainer className={direction}>

        <AnimatedHeader title={innerText} />
      </SpeechBubbleContainer>
    </>
  );
}

export default SpeechBubble;
