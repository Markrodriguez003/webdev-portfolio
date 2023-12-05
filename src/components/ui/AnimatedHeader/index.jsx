/* eslint-disable react/prop-types */
import "./AnimatedHeader.css";

function AnimatedHeader(props) {
  return (
    <>
      <div className="container">
        <h1 className="header1">{props.children}</h1>
      </div>
    </>
  );
}
export default AnimatedHeader;
