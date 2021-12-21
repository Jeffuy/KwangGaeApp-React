import React from "react";

const ChallengeCounter = ({ challenges, points }) => {

	const completedChallenges = challenges.filter(
        (challenge) => !!challenge.completed
    ).length;
    const totalChallenges = challenges.length;

    return (
        <h2 className="text-center mt-3 ">
            Completado: <b>{completedChallenges}</b> de <b>{totalChallenges}</b> desafíos. <br /> Puntos totales: <b>{points}</b>.
        </h2>
    );
};

export default ChallengeCounter;
