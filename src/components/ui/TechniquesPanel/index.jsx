/* eslint-disable react/prop-types */

// STYLED COMPONENTS
import { TechniquePanel } from "./TechniquesPanel.design";

function TechniquesPanel(props) {
  return (
    <>
      <>
        <TechniquePanel togglePanel={props.togglePanel}>
          <h1>Techniques used:</h1>
          <ul>
            <li>Designed website</li>
            <li>Utilized NPM libraries (SwiperJS & ReactPlayer)</li>
            <li>USed React useState</li>
            <li>Form Validation</li>
            <li>Implemented responsive design (Tablet, PC and Mobile)</li>
          </ul>
        </TechniquePanel>
      </>
    </>
  );
}

export default TechniquesPanel;
