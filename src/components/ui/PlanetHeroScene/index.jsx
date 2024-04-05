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
        <PlanetBackground />
        {/* <Satellite>
          <ShinyLight />
        </Satellite> */}

        <AstronautHome />
      </PlanetContainer>
    </>
  );
}

export default PlanetHeroScene;
