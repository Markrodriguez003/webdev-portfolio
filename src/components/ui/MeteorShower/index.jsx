import { useState, useEffect, useId } from "react";

// STYLED COMPONENTS
import { MeteorContainer } from "./MeteorShower.design";
function MeteorShower() {
  const [meteorPing, setMeteorPing] = useState(0);

  useEffect(() => {
    const looper = setInterval(() => {
      let randomMeteor = Math.floor(Math.random() * 10);

      if (randomMeteor % 2) {
        setMeteorPing(() => randomMeteor);
        console.log("Ping! " + "Starchart: " + meteorPing);
      }

      looper;
    }, 4500);

    return () => {
      clearInterval(looper);
    };
  });

  return (
    <>

      <MeteorContainer meteorTrigger={meteorPing} key={meteorPing}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </MeteorContainer>
    </>
  );
}

export default MeteorShower;
