import React, { useContext } from "react";
import { ChallengesContext } from "@context/ChallengesContext";
import ChallengeItem from "@components/challenges/ChallengeItem";
import ChallengeCounter from "@components/challenges/ChallengeCounter";
import ChallengeGet from "@components/challenges/ChallengeGet";
import ChallengeRestart from "@components/challenges/ChallengeRestart";

const Challenge = () => {
    const {
        challenges,
        onCompleteChallenge,
        onDeleteChallenge
    } = useContext(ChallengesContext);

    return (
        <>
            <section className="container d-flex flex-column min-vh-100">
                <ChallengeCounter />

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

                <ChallengeGet />
                <ChallengeRestart />
            </section>
        </>
    );
};

export default Challenge;
