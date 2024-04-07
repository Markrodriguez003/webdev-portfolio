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
  const [dialogueYield, setDialogueYield] = useState("");

  /* 
      USEEFFECT (TRUE / FALSE)
      +++ DIALOGUES-MAP(DIALOGUE)
      ++++++ SETIMEOUT(SPEECHBUBBLE(DIALOGUE))

  */

  // useEffect(() => {
  //   let dialogues = speech.dialogues;

  //   function DialogueBox(dialogue) {
  //     console.log("DUIALGOE: ", dialogue);
  //     return <AnimatedHeader title={dialogue.toString()} />;
  //   }

  //   // TIMEOUT LOOP
  //   function SpeechRepeater(dialogues) {
  //     dialogues.map((dialogue) => {
  //       setDialogueYield(setTimeout(DialogueBox(dialogue), 54000));
  //     });
  //   }

  //   if (loop) {
  //     SpeechRepeater(dialogues);
  //   }
  // }, [loop]);
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

  return (
    <>
      <SpeechBubbleContainer className={direction}>
        {/* <AnimatedHeader title={dialogue} />; */}
        {dialogueYield}
      </SpeechBubbleContainer>
    </>
  );
}

export default SpeechBubble;
