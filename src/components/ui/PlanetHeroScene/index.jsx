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
      <div style={{ position: "relative", overflow: "hidden" }}>

        <PlanetContainer>
          <PlanetBackground />
          {/* <Satellite>
          <ShinyLight />
          </Satellite> */}

          {/* <AstronautHome /> */}
        </PlanetContainer>
      </div>
    </>
  );
}

export default PlanetHeroScene;
