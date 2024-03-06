import "./PlanetHeroScene.design.css";

import {
  PlanetContainer,
  PlanetBackground,
  AstronautHome,
  Satellite,
  ShinyLight,
} from "./PlanetHeroScene.design";

function PlanetHeroScene() {
  return (
    <>
      <PlanetContainer>
        <PlanetBackground> </PlanetBackground>
        <Satellite>
          <ShinyLight />
        </Satellite>
        <AstronautHome />
      </PlanetContainer>
    </>
  );
}

export default PlanetHeroScene;
