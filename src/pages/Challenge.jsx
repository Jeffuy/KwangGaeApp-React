import React, { useState } from "react";
import ChallengeItem from "@components/challenges/ChallengeItem";
import ChallengeCounter from "@components/challenges/ChallengeCounter";
import { challengesList } from "@scripts/data/challengeList";

// const ChallengeList = [
//     { text: "6 puntos con dollyo", points: 2, completed: false },
//     { text: "dos blitz", points: 2, completed: false },
//     {
//         text: "la combinacion puño, puño, puño, dolyo 2 veces",
//         points: 3,
//         completed: false,
//     },
//     { text: "3 puntos con una patada zona alta", points: 3, completed: false },
// ];

const Challenge = (props) => {
    const localStorageChallenges = localStorage.getItem("activeChallenges");
    const localStoragePoints = localStorage.getItem("totalPoints");
    let parsedChallenges;
    let parsedPoints;

    if (!localStorageChallenges) {
        localStorage.setItem("activeChallenges", JSON.stringify([]));
        parsedChallenges = [];
    } else {
        parsedChallenges = JSON.parse(localStorageChallenges);
    }

    if (!localStoragePoints) {
        localStorage.setItem("totalPoints", 0);
        parsedPoints = 0;
    } else {
        parsedPoints = JSON.parse(localStoragePoints);
    }

    const [challenges, setChallenges] = useState(parsedChallenges);
    const [totalPoints, setTotalPoints] = useState(parsedPoints);

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
        const newParsed = [...parsedChallenges];
        newParsed.push(challenge);
        saveChallenges(newParsed);
        // localStorage.setItem('activeChallenges', JSON.stringify(challenge));
    };

    const saveChallenges = (newParsed) => {
        localStorage.setItem("activeChallenges", JSON.stringify(newParsed));
        setChallenges(newParsed);
    };

    const savePoints = (points) => {
        let newPoints = totalPoints + points;
        localStorage.setItem("totalPoints", newPoints);
        setTotalPoints(newPoints);
    };

	const restartGame = () => {
		localStorage.setItem("totalPoints", 0);
		localStorage.setItem("activeChallenges", JSON.stringify([]));
		setTotalPoints(0);
		setChallenges([]);
	}

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
                                    onClick={restartGame}
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
