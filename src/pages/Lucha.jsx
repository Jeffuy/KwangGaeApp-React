import React, { useState } from "react";
import timer from "@scripts/timer";
import deductPoints from "@scripts/lucha";

const Lucha = () => {
    const theError = (
        <div
            className="card mb-4 text-center text-black"
            style={{ borderRadius: "0.3rem" }}
        >
            <div className="card-body">
                <p>PELOTUDO! TOCA START PRIMERO INFELIZ</p>
                <a className="btn btn-danger" onClick={() => setShowError(2)}>
                    Perdón, mala mía
                </a>
            </div>
        </div>
    );

    const theError2 = (
        <div
            className="card mb-4 text-center text-black"
            style={{ borderRadius: "0.3rem" }}
        >
            <div className="card-body">
                <p>NO ES GRACIOSO IMBECIL</p>
                <a className="btn btn-primary" onClick={() => setShowError(3)}>
                    No volverá a ocurrir señor
                </a>
            </div>
        </div>
    );

    const theError3 = (
        <div
            className="card mb-4 text-center bg-dark text-white"
            style={{ borderRadius: "0.3rem" }}
        >
            <div className="card-body">
                <p>NO SABES ARBITRAR</p>
                <a className="btn btn-primary" onClick={() => setShowError(4)}>
                    Me arrodillo ante usted
                </a>
            </div>
        </div>
    );

    const theError4 = (
        <div
            className="card mb-4 text-center text-white bg-danger"
            style={{ borderRadius: "0.3rem" }}
        >
            <div className="card-body">
                <p>QUÉ SOS, CINTURÓN BLANCO?</p>
                <a className="btn btn-dark" onClick={() => setShowError(5)}>
                    Debería serlo por ser tan inutil
                </a>
            </div>
        </div>
    );

    const [time, setTime] = useState("Presiona Start");
    const [isRunning, setIsRunning] = useState("Combate sin iniciar");
    const [showError, setShowError] = useState(0);
    const [runTime, setRunTime] = useState("");
    const [status, setStatus] = useState(false);
    const [red, setRed] = useState({
        score: 0,
        last: 0,
        warnings: 0,
        discounts: 0,
    });

    const lastRed = () => {
        if (status && red.last != -1) {
            setRed({ ...red, score: red.score - red.last, last: 0 });
        } else if (status && red.last == -1)
            setRed({
                ...red,
                score: red.score + 1,
                last: 0,
                discounts: red.discounts - 1,
            });
    };

    const [blue, setBlue] = useState({
        score: 0,
        last: 0,
        warnings: 0,
        discounts: 0,
    });

    const lastBlue = () => {
        if (status && blue.last != -1) {
            setBlue({ ...blue, score: blue.score - blue.last, last: 0 });
        } else if (status && blue.last == -1)
            setBlue({
                ...blue,
                score: blue.score + 1,
                last: 0,
                discounts: blue.discounts - 1,
            });
    };

    const startFight = () => {
        timer.start();
        setIsRunning("Combate iniciado");
        setStatus(true);

        setBlue({
            score: 0,
            last: 0,
            warnings: 0,
            discounts: 0,
        });

        setRed({
            score: 0,
            last: 0,
            warnings: 0,
            discounts: 0,
        });

        const updateTime = () => {
            const time = timer.write();
            setTime(time);
        };
        setRunTime(setInterval(updateTime, 10));
    };

    const endFight = () => {
        red.score = red.score - deductPoints(red.warnings);
        blue.score = blue.score - deductPoints(blue.warnings);

        setStatus(false);
        setIsRunning("Combate finalizado");
        setRunTime(clearInterval(runTime));
        setTime(time);
        timer.reset();

        console.log(red, blue);
    };

    return (
        <section>
            <div className="container">
                <h3 className="mt-2 text-center text-white" id="status">
                    {isRunning}
                </h3>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <p
                            className="text-center text-white"
                            style={{ fontSize: 30, backgroundColor: "red" }}
                        >
                            {!status && red.score}
                        </p>
                    </div>
                    <div className="col-6">
                        <p
                            className="text-center text-white"
                            style={{ fontSize: 30, backgroundColor: "blue" }}
                        >
                            {!status && blue.score}
                        </p>
                    </div>
                </div>
                <div className="container">
                    {showError == 1 && theError}
                    {showError == 2 && theError2}
                    {showError == 3 && theError3}
                    {showError == 4 && theError4}
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 mb-2">
                            <div className="btn-group-vertical">
                                <button
                                    className="btn btn-danger btn-lg btn-block mt-3 mb-2 shadow-none"
                                    type="button"
                                    onClick={() => {
                                        status
                                            ? setRed({
                                                  ...red,
                                                  score: red.score + 1,
                                                  last: 1,
                                              })
                                            : setShowError(true);
                                    }}
                                >
                                    Golpe de puño
                                </button>
                                <button
                                    className="btn btn-danger btn-lg btn-block mb-2 shadow-none"
                                    type="button"
                                    onClick={() => {
                                        status
                                            ? setRed({
                                                  ...red,
                                                  score: red.score + 2,
                                                  last: 2,
                                              })
                                            : setShowError(true);
                                    }}
                                >
                                    Patada zona media
                                </button>
                                <button
                                    className="btn btn-danger btn-lg btn-block mb-2 shadow-none"
                                    type="button"
                                    onClick={() => {
                                        status
                                            ? setRed({
                                                  ...red,
                                                  score: red.score + 3,
                                                  last: 3,
                                              })
                                            : setShowError(true);
                                    }}
                                >
                                    Patada zona alta
                                </button>
                                <button
                                    className="btn btn-danger btn-lg btn-block mb-2 shadow-none"
                                    type="button"
                                    onClick={() => {
                                        status
                                            ? setRed({
                                                  ...red,
                                                  warnings: red.warnings + 1,
                                              })
                                            : setShowError(true);
                                    }}
                                >
                                    Advertencia
                                </button>
                                <button
                                    className="btn btn-danger btn-lg btn-block mb-2 shadow-none"
                                    type="button"
                                    onClick={() => {
                                        status
                                            ? setRed({
                                                  ...red,
                                                  score: red.score - 1,
                                                  last: -1,
                                                  discounts: red.discounts + 1,
                                              })
                                            : setShowError(true);
                                    }}
                                >
                                    Punto en contra
                                </button>
                                <button
                                    className="btn btn-danger btn-lg btn-block mb-2 shadow-none"
                                    type="button"
                                    onClick={() => lastRed()}
                                >
                                    Deshacer último
                                </button>
                                <button
                                    className="btn btn-dark btn-lg btn-block mt-3 mb-1 shadow-none"
                                    type="button"
                                    onClick={
                                        status ? undefined : () => startFight()
                                    }
                                >
                                    Start
                                </button>
                            </div>
                        </div>
                        <div className="col-6 mb-2">
                            <div className="btn-group-vertical">
                                <button
                                    className="btn btn-primary btn-lg btn-block mt-3 mb-2 shadow-none"
                                    type="button"
                                    onClick={() => {
                                        status
                                            ? setBlue({
                                                  ...blue,
                                                  score: blue.score + 1,
                                                  last: 1,
                                              })
                                            : setShowError(true);
                                    }}
                                >
                                    Golpe de puño
                                </button>
                                <button
                                    className="btn btn-primary btn-lg btn-block mb-2 shadow-none"
                                    type="button"
                                    onClick={() => {
                                        status
                                            ? setBlue({
                                                  ...blue,
                                                  score: blue.score + 2,
                                                  last: 2,
                                              })
                                            : setShowError(true);
                                    }}
                                >
                                    Patada zona media
                                </button>
                                <button
                                    className="btn btn-primary btn-lg btn-block mb-2 shadow-none"
                                    type="button"
                                    onClick={() => {
                                        status
                                            ? setBlue({
                                                  ...blue,
                                                  score: blue.score + 3,
                                                  last: 3,
                                              })
                                            : setShowError(true);
                                    }}
                                >
                                    Patada zona alta
                                </button>
                                <button
                                    className="btn btn-primary btn-lg btn-block mb-2 shadow-none"
                                    type="button"
                                    onClick={() => {
                                        status
                                            ? setBlue({
                                                  ...blue,
                                                  warnings: blue.warnings + 1,
                                              })
                                            : setShowError(true);
                                    }}
                                >
                                    Advertencia
                                </button>
                                <button
                                    className="btn btn-primary btn-lg btn-block mb-2 shadow-none"
                                    type="button"
                                    onClick={() => {
                                        status
                                            ? setBlue({
                                                  ...blue,
                                                  score: blue.score - 1,
                                                  last: -1,
                                                  discounts: blue.discounts + 1,
                                              })
                                            : setShowError(true);
                                    }}
                                >
                                    Punto en contra
                                </button>
                                <button
                                    className="btn btn-primary btn-lg btn-block mb-2 shadow-none"
                                    type="button"
                                    onClick={() => lastBlue()}
                                >
                                    Deshacer último
                                </button>
                                <button
                                    className="btn btn-dark btn-lg btn-block mt-3 mb-1 shadow-none"
                                    type="button"
                                    onClick={() => endFight()}
                                >
                                    End
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center row mb-5 text-white">
                        <div className="col-12">
                            <span style={{ fontSize: 20 }}>{time}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Lucha;
