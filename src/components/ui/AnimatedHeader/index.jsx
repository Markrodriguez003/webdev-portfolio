import { useScramble } from "use-scramble";
// import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
function AnimatedHeader({ title }) {
  const { ref } = useScramble({
    text: title,
    speed: 0.7,
    tick: 1,
    overflow: true,
    seed: 7,
    range: [45, 46, 95],
  });

  return (
    <>
      <div ref={ref} />
    </>
  );
}
export default AnimatedHeader;
