/* eslint-disable react/prop-types */

import baffle from "baffle";
import { useEffect } from "react";

function AnimatedHeader({ title }) {
  useEffect(() => {
    const target = baffle(".obfuscated");
    target.set({
      characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█<░▒ ▓/░>",
      speed: 100,
    });
    target.start();
    target.reveal(800);
    return () => {
      target.stop();
      target.reveal();
      title;
    };
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
