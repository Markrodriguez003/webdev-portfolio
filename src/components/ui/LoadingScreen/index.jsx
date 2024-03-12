import RotatingPlanets from "../HeaderAnimations/RotatingPlanets";
import "./LoadingScreen.Design.css";
function LoadingScreen() {
  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "rgba(0,0,0,0.6  )",
          width: "100vw",
          height: "100vh",
        }}
      >
        <RotatingPlanets />
        <section className="loading-data">
          <h2 className="loading-text text-center text-uppercase">
            <span className="char">L</span>
            <span className="char">o</span>
            <span className="char">a</span>
            <span className="char">d</span>
            <span className="char">i</span>
            <span className="char">n</span>
            <span className="char">g</span>
            {/* <span className="char"> </span>
            <span className="char">s</span>
            <span className="char">i</span>
            <span className="char">t</span>
            <span className="char">e</span> */}
          </h2>
        </section>
      </div>
    </>
  );
}

export default LoadingScreen;
