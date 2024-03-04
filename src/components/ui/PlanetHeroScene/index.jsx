import "./PlanetHeroScene.design.css";

function PlanetHeroScene() {
  return (
    <>
      <div className="centered-container">
        <div className="planet-background"> </div>
        {/* <div className="planet-shadow">f</div> */}
        <div className="satellite">
          <div className="ShinyLight" />
        </div>
        <div className="astronaut-home"></div>
      </div>
    </>
  );
}

export default PlanetHeroScene;
