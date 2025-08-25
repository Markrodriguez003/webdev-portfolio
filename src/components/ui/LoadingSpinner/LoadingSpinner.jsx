

import { LoadingSpinnerContainer, SpinnerAtom, SpinnerShapes } from "./LoadingSpinner.design";

function LoadingSpinner() {
    return (
        <>
            <LoadingSpinnerContainer>
                <h1>Loading Video </h1>
                <br />
                {/* <SpinnerAtom /> */}
                <SpinnerShapes />
                <br />
            </LoadingSpinnerContainer>
        </>
    )
}

export default LoadingSpinner;