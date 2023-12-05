/* eslint-disable react/prop-types */
import {
  BorderFrame,
  BorderCenter,
  HeaderContainer,
} from "./HeaderBorderBox.design";
import Waves from "../HeaderAnimations/Waves.jsx";
import RotatingBoxes from "../HeaderAnimations/RotatingBoxes.jsx";
import RotatingPlanets from "../HeaderAnimations/RotatingPlanets";
import SolarPanel from "../HeaderAnimations/SolarPanel";
function HeaderBorderBox({ props }) {
  // console.log(`Headerbox Props? `, props);

  const { type, title } = props;
  let animationType;
  switch (type) {
    case "planets":
      animationType = <RotatingPlanets />;
      break;
    case "boxes":
      animationType = <RotatingBoxes />;
      break;
    case "waves":
      animationType = <Waves />;
      break;
    case "solar":
      animationType = <SolarPanel />;
      break;
    default:
      animationType = <Waves />;
  }

  return (
    <>
      <HeaderContainer>
        <BorderCenter>
          {animationType}
          <BorderFrame>
            <h2>{title}</h2>
          </BorderFrame>
        </BorderCenter>
      </HeaderContainer>
    </>
  );
}

export default HeaderBorderBox;
