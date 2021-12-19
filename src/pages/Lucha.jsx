import React, { useState } from "react";
import timer from "@scripts/timer";
import FigthButtons from "@components/lucha/FigthButtons";
import FightNotStartedError from "@components/lucha/FightNotStartedError";
import FightTime from "@components/lucha/FightTime";
import FightResults from "@components/lucha/FightResults";
import useScoreHook from "@hooks/useScoreHook";

const Lucha = () => {
    const [time, setTime] = useState("Presiona Start");
    const [isRunning, setIsRunning] = useState("Combate sin iniciar");
    const [showError, setShowError] = useState(false);
    const [runTime, setRunTime] = useState("");
    const [status, setStatus] = useState(false);

    const [red, lastRed, redScore, redWarning, redRestart, redFinalScore] =
        useScoreHook({
            score: 0,
            last: 0,
            warnings: 0,
            discounts: 0,
        });

    const [blue, lastBlue, blueScore, blueWarning, blueRestart, blueFinalScore] =
        useScoreHook({
            score: 0,
            last: 0,
            warnings: 0,
            discounts: 0,
        });

    const startFight = () => {
        timer.start();
        setIsRunning("Combate iniciado");
        setStatus(true);

        blueRestart();
        redRestart();

        const updateTime = () => {
            const time = timer.write();
            setTime(time);
        };
        setRunTime(setInterval(updateTime, 10));
    };

    const endFight = () => {
        blueFinalScore()
        redFinalScore()

        setStatus(false);
        setIsRunning("Combate finalizado");
        setRunTime(clearInterval(runTime));
        setTime(time);
        timer.reset();

        console.log(red, blue);
    };

    return (
        <section>
            <FightResults
                isRunning={isRunning}
                status={status}
                red={red}
                blue={blue}
            />
            {showError && <FightNotStartedError setShowError={setShowError} />}
            <FigthButtons
                startFight={startFight}
                endFight={endFight}
                status={status}
                lastRed={lastRed}
                lastBlue={lastBlue}
                setShowError={setShowError}
                redScore={redScore}
                blueScore={blueScore}
                redWarning={redWarning}
                blueWarning={blueWarning}
            />
            <FightTime time={time} />
        </section>
    );
};

export default Lucha;
