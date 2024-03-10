/* eslint-disable react/prop-types */

// STYLED COMPONENTS
import { TechnologyPanel } from "./Technologies.design";

function TechnologiesPanel(props) {
  return (
    <>
      <TechnologyPanel togglePanel={props.togglePanel}>
        <h1>Technologies Utilized:</h1>
        <ul>
          <li>React</li>
          <li>SwiperJS</li>
          <li>ReactPlayer</li>
          <li>Styled-Components</li>
        </ul>
      </TechnologyPanel>
    </>
  );
}

export default TechnologiesPanel;
