import React, { useState } from "react";
import ChallengeItem from "@components/challenges/ChallengeItem";
import ChallengeCounter from "@components/challenges/ChallengeCounter";
import { challengesList } from "@scripts/data/challengeList";
import useLocalStorage from "@hooks/useLocalStorage";

const Challenge = () => {
    const [
        challenges,
        saveChallenges,
        ,
		restartChallenges,
    ] = useLocalStorage("activeChallenges", []);

    const [
        totalPoints,
        ,
        savePoints,
		restartPoints
    ] = useLocalStorage("totalPoints", 0);

    const completedChallenges = challenges.filter(
        (challenge) => !!challenge.completed
    ).length;
    const totalChallenges = challenges.length;

    const onCompleteChallenge = (text) => {
        const challengeIndex = challenges.findIndex(
            (challenge) => challenge.text === text
        );
        const newChallenges = [...challenges];
        newChallenges[challengeIndex].completed =
            !newChallenges[challengeIndex].completed;

        const points = newChallenges[challengeIndex].points;
        saveChallenges(newChallenges);
        if (newChallenges[challengeIndex].completed) {
            savePoints(points);
        } else {
            savePoints(-points);
        }
    };

    const onDeleteChallenge = (text) => {
        const challengeIndex = challenges.findIndex(
            (challenge) => challenge.text === text
        );
        const newChallenges = [...challenges];
        newChallenges.splice(challengeIndex, 1);
        saveChallenges(newChallenges);
    };

    const getChallenge = () => {
        let random = Math.floor(Math.random() * challengesList.length);
        let challenge = challengesList[random];
        while (challenges.some((item) => item.text === challenge.text)) {
            random = Math.floor(Math.random() * challengesList.length);
            challenge = challengesList[random];
        }
        const newParsed = [...challenges];
        newParsed.push(challenge);
        saveChallenges(newParsed);
    };

    return (
        <>
            <section>
                <div className="d-flex flex-column min-vh-100">
                    <div className="container text-center mt-3 ">
                        <ChallengeCounter
                            total={totalChallenges}
                            points={totalPoints}
                            completed={completedChallenges}
                        />
                        <div className="text-dark">
                            {challenges.map((challenge) => (
                                <ChallengeItem
                                    key={challenge.text}
                                    text={challenge.text}
                                    points={challenge.points}
                                    completed={challenge.completed}
                                    onComplete={() =>
                                        onCompleteChallenge(challenge.text)
                                    }
                                    onDelete={() =>
                                        onDeleteChallenge(challenge.text)
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8 offset-2">
                                <p
                                    className="text-center fs-3 mt-2"
                                    id="result"
                                ></p>
                            </div>
                        </div>
                        <div className="container mt-3">
                            <div className="row">
                                <button
                                    className="btn btn-primary btn-lg"
                                    onClick={getChallenge}
                                >
                                    DAME UN DESAFÍO
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mt-5">
                        <p className="text-center fs-6 text-danger">
                            <b>
                                <a
                                    className="badge bg-danger"
                                    onClick={() => {restartChallenges(), 		restartPoints()}}
                                >
                                    REINICIAR TODO
                                </a>
                                (esta opción no se puede deshacer)
                            </b>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Challenge;
