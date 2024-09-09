/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// REACT
import { useState, useEffect } from "react";

// STYLING / STYLED COMPONENTS
import { SpeechBubbleContainer } from "./SpeechBubble.design";

// COMPONENTS
import AnimatedHeader from "../AnimatedHeader";

function SpeechBubble(props) {

  const [dialogueSentence, setDialogueSentence] = useState("...?!");

  useEffect(() => {
    // SETS NEW SENTENCE TO DIALOGUESENTENCE USESTATE
    let unMount = true;
    function speechSetter(dialogue) {
      // console.log("setting this dialogue piece:: ", dialogue);
      setDialogueSentence(dialogue);
    }

    // DELAY FUNCTION
    function delay(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }

    // TIMEOUT LOOP
    async function SpeechRepeater() {
      if (props.visible) {
        while (props.visible) {
          for (let x = 1; x < props.speech.length; x++) {
            await delay(props.msTime);
            speechSetter(props.speech[x]);
          }
        }
      } else {
        clearTimeout(delay)
        console.log('Done looping!')
      }
    }

    // Stops message from speeding up and repeating over array chaotically
    if (props.visible) {
      SpeechRepeater();
      console.log("Astronaut is looping!");
    } else {
      clearTimeout(delay);
      console.log("");
    }
    return () => {
      console.log("Astronaut is NOT looping!");
      clearTimeout(delay);
      // props.loop = false;
    };
  }, [props.loop, props.msTime, props.speech]);

  // DIRECTIONS:
  // top-right - top-left - bottom-left - bottom-right

  return (
    <>
      <SpeechBubbleContainer
        className={props.direction}
        key={dialogueSentence}
        solidBorder={props.solidBorder}
        italics={props.italics}
      >
        <AnimatedHeader title={dialogueSentence} />
      </SpeechBubbleContainer>
    </>
  );
}

export default SpeechBubble;
