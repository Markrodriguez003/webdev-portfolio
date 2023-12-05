import { PlanetContainer, PlanetFlex } from "./HeaderAnimations.design";

function RotatingPlanets() {
  return (
    <>
      <PlanetContainer>
        <PlanetFlex>
          <div className="orbit">
            <div className="moon"></div>
          </div>
          <div className="orbit2">
            <div className="moon2"></div>
          </div>
          <div className="orbit3">
            <div className="moon3"></div>
          </div>
          <div className="planet"></div>
          <div className="planet2"></div>
        </PlanetFlex>
      </PlanetContainer>
    </>
  );
}

export default RotatingPlanets;
