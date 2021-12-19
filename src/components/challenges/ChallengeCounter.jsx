import React from "react";

const ChallengeCounter = ({ total, completed, points }) => {
    return (
        <h2>
            Completado: <b>{completed}</b> de <b>{total}</b> desafíos. <br /> Puntos totales: <b>{points}</b>.
        </h2>
    );
};

export default ChallengeCounter;
