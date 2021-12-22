import React, { useState } from "react";
import PatternStartMatchButton from "@components/pattern/PatternStartMatchButton";
import PatternMatchStatus from "@components/pattern/PatternMatchStatus";
import PatternResults from "@components/pattern/PatternResults";
import PatternLevelOne from "@components/pattern/PatternLevelOne";
import PatternLevelTwo from "@components/pattern/PatternLevelTwo";
import PatternLevelThree from "@components/pattern/PatternLevelThree";
import useScoreHook from "@hooks/useScoreHook";

const Pattern = () => {
    const {item: red, lastItem: redLast, addPoints: redScore, restartScore: restartRed } = useScoreHook({
        score: 10,
        last: 0,
    });

    const {item: blue, lastItem: blueLast, addPoints: blueScore, restartScore: restartBlue} = useScoreHook({
        score: 10,
        last: 0,
    });

    const [matchLevel, setMatchLevel] = useState(0);
    const [matchStatus, setMatchStatus] = useState("Match Ended");

    const [redQuantity, setRedQuantity] = useState(0);
    const [blueQuantity, setBlueQuantity] = useState(0);

    const changeLevel = (lvlInt, lvlStr) => {
        setMatchLevel(lvlInt);
        setMatchStatus(lvlStr);
        setRedQuantity(0);
        setBlueQuantity(0);

		if (lvlInt === 1) {
			restartRed();
			restartBlue();
		}
    };

    return (
        <section className="container d-flex flex-column min-vh-100">
            <PatternMatchStatus status={matchStatus} />
            {matchLevel == 0 && <PatternResults red={red} blue={blue} />}
            {matchLevel == 0 && (
                <PatternStartMatchButton changeLevel={changeLevel} />
            )}
            {matchLevel == 1 && (
                <PatternLevelOne
                    red={red}
                    redScore={redScore}
                    redLast={redLast}
                    redQuantity={redQuantity}
                    setRedQuantity={setRedQuantity}
                    blue={blue}
                    blueScore={blueScore}
                    blueLast={blueLast}
                    blueQuantity={blueQuantity}
                    setBlueQuantity={setBlueQuantity}
                    changeLevel={changeLevel}
                />
            )}
            {matchLevel == 2 && (
                <PatternLevelTwo
                    red={red}
                    redScore={redScore}
                    redLast={redLast}
                    redQuantity={redQuantity}
                    setRedQuantity={setRedQuantity}
                    blue={blue}
                    blueScore={blueScore}
                    blueLast={blueLast}
                    blueQuantity={blueQuantity}
                    setBlueQuantity={setBlueQuantity}
                    changeLevel={changeLevel}
                />
            )}
            {matchLevel == 3 && (
                <PatternLevelThree
                    red={red}
                    redScore={redScore}
                    redLast={redLast}
                    redQuantity={redQuantity}
                    setRedQuantity={setRedQuantity}
                    blue={blue}
                    blueScore={blueScore}
                    blueLast={blueLast}
                    blueQuantity={blueQuantity}
                    setBlueQuantity={setBlueQuantity}
                    changeLevel={changeLevel}
                />
            )}
        </section>
    );
};

export default Pattern;
