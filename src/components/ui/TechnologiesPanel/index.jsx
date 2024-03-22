/* eslint-disable react/prop-types */

// STYLED COMPONENTS
import { TechnologyPanel } from "./Technologies.design";
import reactIcon from "../../../assets/icons/react.png";
import npmIcon from "../../../assets/icons/npm.png";
import styledComponentsIcon from "../../../assets/icons/styled-components.png";
function TechnologiesPanel(props) {
  return (
    <>
      <TechnologyPanel togglePanel={props.togglePanel}>
        <h1>Technologies Utilized:</h1>
        <div>
          <ul>
            <li>
              <img src={reactIcon} width={"90px"} height="auto" />
              React
            </li>
            <li>
              <img src={npmIcon} width={"120px"} height="auto" />
              React-Image-Carousel
            </li>
            <li>
              <img src={npmIcon} width={"120px"} height="auto" />
              React-Player
            </li>
            <li>
              <img src={styledComponentsIcon} width={"90px"} height={"90px"} />
              Styled-Components
            </li>
          </ul>
        </div>
      </TechnologyPanel>
    </>
  );
}

export default TechnologiesPanel;
