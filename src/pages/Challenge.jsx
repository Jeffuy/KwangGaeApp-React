import React, { useState } from "react";
import ChallengeItem from "@components/ChallengeItem";
import ChallengeCounter from "@components/ChallengeCounter";

const challengeList = [
    { text: "6 puntos con dollyo", points: 2, completed: false },
    { text: "dos blitz", points: 2, completed: false },
    {
        text: "la combinacion puño, puño, puño, dolyo 2 veces",
        points: 3,
        completed: false,
    },
    { text: "3 puntos con una patada zona alta", points: 3, completed: false },
];

const Challenge = (props) => {
    const [challenges, setChallenges] = useState(challengeList);

    const completedChallenges = challenges.filter(
        (challenge) => !!challenge.completed
    ).length;
    const totalChallenges = challenges.length;
    const challengesPointsTotal = challenges
        .filter((challenge) => !!challenge.completed)
        .reduce((acc, challenge) => acc + challenge.points, 0);

    const onCompleteChallenge = (text) => {
        const challengeIndex = challenges.findIndex(
            (challenge) => challenge.text === text
        );
        const newChallenges = [...challenges];
        newChallenges[challengeIndex].completed =
            !newChallenges[challengeIndex].completed;
        setChallenges(newChallenges);
    };

    const onDeleteChallenge = (text) => {
        const challengeIndex = challenges.findIndex(
            (challenge) => challenge.text === text
        );
        const newChallenges = [...challenges];
        newChallenges.splice(challengeIndex, 1);
        setChallenges(newChallenges);
    };

    return (
        <>
            <section>
                <div className="d-flex flex-column min-vh-100">
                    <div className="container text-center mt-3 ">
                        <ChallengeCounter
                            total={totalChallenges}
                            points={challengesPointsTotal}
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
                        <div>what</div>
                    </div>
                    <div className="container-fluid mt-2">
                        <p className="text-center fs-6 text-danger">
                            <b>
                                <a
                                    className="badge bg-danger"
                                    onClick={() => resetPoints}
                                >
                                    Reiniciar puntos
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
