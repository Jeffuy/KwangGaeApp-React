import React, { useState } from "react";
import timer from "@scripts/timer";

const Lucha = () => {
    const [time, setTime] = useState("Presiona Start");
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
        if (red.warnings >= 3 && red.warnings <= 5) {
            red.score -= 1;
        } else if (red.warnings >= 6 && red.warnings <= 8) {
            red.score -= 2;
        } else if (red.warnings >= 9 && red.warnings <= 11) {
            red.score -= 3;
        } else if (red.warnings >= 12 && red.warnings <= 14) {
            red.score -= 4;
        } else if (red.warnings >= 15 && red.warnings <= 17) {
            red.score -= 5;
        }

        if (blue.warnings >= 3 && blue.warnings <= 5) {
            blue.score -= 1;
        } else if (blue.warnings >= 6 && blue.warnings <= 8) {
            blue.score -= 2;
        } else if (blue.warnings >= 9 && blue.warnings <= 11) {
            blue.score -= 3;
        } else if (blue.warnings >= 12 && blue.warnings <= 14) {
            blue.score -= 4;
        } else if (blue.warnings >= 15 && blue.warnings <= 17) {
            blue.score -= 5;
        }

        setStatus(false);
        setRunTime(clearInterval(runTime));
        setTime(time);
        timer.reset();



        console.log(red, blue);
    };

    return (
        <section>
            <div className="container">
                <h3 className="mt-2 text-center text-white" id="status">
                    Combate terminado
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
                                            : undefined;
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
                                            : undefined;
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
                                            : undefined;
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
                                            : undefined;
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
                                            : undefined;
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
                                            : undefined;
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
                                            : undefined;
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
                                            : undefined;
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
                                            : undefined;
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
                                            : undefined;
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
                            <span style={{ fontSize: 20 }}>
                                {time}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Lucha;
