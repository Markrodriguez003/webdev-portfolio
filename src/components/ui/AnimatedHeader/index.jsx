/* eslint-disable react/prop-types */

import baffle from "baffle";
import { useEffect } from "react";

function AnimatedHeader({ title }) {
  let randomCharacters = [
    "░",
    "█",
    "▓",
    "≡",
    "/",
    ">",
    "@",
    "#",
    "▲",
    "►",
    "◊",
    "▼",
  ];

  useEffect(() => {
    const target = baffle(".obfuscated");
    target.set({
      characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█<░▒ ▓/░>",
      speed: 100,
    });
    target.start();
    target.reveal(1000);
  });

  return (
    <>
      <div className="col obfuscated" style={{ color: "white" }}>
        {title}
      </div>
    </>
  );
}
export default AnimatedHeader;
