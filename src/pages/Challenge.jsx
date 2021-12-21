import React, { useState } from "react";
import ChallengeItem from "@components/challenges/ChallengeItem";
import ChallengeCounter from "@components/challenges/ChallengeCounter";
import { challengesList } from "@scripts/data/challengeList";
import useLocalStorage from "@hooks/useLocalStorage";
import ChallengeGet from "@components/challenges/ChallengeGet";
import ChallengeRestart from "@components/challenges/ChallengeRestart";

const Challenge = () => {
    const [challenges, saveChallenges, , restartChallenges] = useLocalStorage(
        "activeChallenges",
        []
    );

    const [totalPoints, , savePoints, restartPoints] = useLocalStorage(
        "totalPoints",
        0
    );

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
            <section className="container d-flex flex-column min-vh-100">
                <ChallengeCounter
                    challenges={challenges}
                    points={totalPoints}
                />

                {challenges.map((challenge) => (
                    <ChallengeItem
                        key={challenge.text}
                        text={challenge.text}
                        points={challenge.points}
                        completed={challenge.completed}
                        onComplete={() => onCompleteChallenge(challenge.text)}
                        onDelete={() => onDeleteChallenge(challenge.text)}
                    />
                ))}

                <ChallengeGet getChallenge={getChallenge} />
                <ChallengeRestart
                    restartChallenges={restartChallenges}
                    restartPoints={restartPoints}
                />
            </section>
        </>
    );
};

export default Challenge;
