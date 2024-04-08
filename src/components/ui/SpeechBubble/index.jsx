/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// REACT
import { useState, useEffect } from "react";

// STYLING / STYLED COMPONENTS
import { SpeechBubbleContainer } from "./SpeechBubble.design";

// COMPONENTS
import AnimatedHeader from "../AnimatedHeader";

function SpeechBubble({ children, speech, direction, loop = false }) {
  // let innerText = children.toString();

  // Handles / cycles through home speech bubble dialogue
  // const [dialogueStop, setDialogueStop] = useState(true);
  // const [dialogueCount, setDialogueCount] = useState(0);

  /* 
      USEEFFECT (TRUE / FALSE)
      +++ DIALOGUES-MAP(DIALOGUE)
      ++++++ SETIMEOUT(SPEECHBUBBLE(DIALOGUE))

  */

  useEffect(() => {});

  // useEffect(() => {
  //   let count = 0;
  //   const dialogueTimer = setInterval(() => {
  //     if (dialogueCount !== 5) {
  //       setDialogueCount((prevCount) => prevCount + 1);
  //       console.log("dialogueCount is " + dialogueCount);
  //     } else {
  //       setDialogueCount(0);
  //     }
  //   }, 3000);

  //   if (!dialogueStop) {
  //     clearTimeout(dialogueTimer);
  //   } else {
  //     dialogueTimer;
  //   }
  //   // return (() => {
  //   //   clearTimeout(dialogueTimer);
  //   // })
  // }, [dialogueStop, setDialogueStop]);

  

  // DIRECTIONS:
  // top-right - top-left - bottom-left - bottom-right

  function SpeechEmitter(words) {
    return (
      <SpeechBubbleContainer className={direction}>
        <AnimatedHeader title={"Hello Earthlings!"} />
      </SpeechBubbleContainer>
    );
  }

  function SpeechRepeater() {
    speech.dialogues.map((words, count) => {
      return setTimeout(SpeechEmitter(words), 5000);
    });
  }

  return <>{SpeechRepeater}</>;
}

export default SpeechBubble;
