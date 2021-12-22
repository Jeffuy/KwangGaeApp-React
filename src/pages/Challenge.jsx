import React from "react";
import Challenge from "../containers/ChallengeContainer";
import { ChallengesProvider } from "@context/ChallengesContext";

function Prueba() {
    return (
        <ChallengesProvider>
            <Challenge />
        </ChallengesProvider>
    );
}

export default Prueba;