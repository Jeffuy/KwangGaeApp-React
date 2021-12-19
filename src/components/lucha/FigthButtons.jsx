import React from "react";

const FigthButtons = ({
    status,
    setShowError,
    lastRed,
    lastBlue,
    startFight,
    endFight,
    redScore,
    blueScore,
    redWarning,
    blueWarning,
}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 mb-2">
                    <div className="btn-group-vertical">
                        <button
                            className="btn btn-danger btn-lg btn-block mt-3 mb-2 shadow-none"
                            type="button"
                            onClick={() => {
                                status ? redScore(1) : setShowError(true);
                            }}
                        >
                            Golpe de puño
                        </button>
                        <button
                            className="btn btn-danger btn-lg btn-block mb-2 shadow-none"
                            type="button"
                            onClick={() => {
                                status ? redScore(2) : setShowError(true);
                            }}
                        >
                            Patada zona media
                        </button>
                        <button
                            className="btn btn-danger btn-lg btn-block mb-2 shadow-none"
                            type="button"
                            onClick={() => {
                                status ? redScore(3) : setShowError(true);
                            }}
                        >
                            Patada zona alta
                        </button>
                        <button
                            className="btn btn-danger btn-lg btn-block mb-2 shadow-none"
                            type="button"
                            onClick={() => {
                                status ? redWarning() : setShowError(true);
                            }}
                        >
                            Advertencia
                        </button>
                        <button
                            className="btn btn-danger btn-lg btn-block mb-2 shadow-none"
                            type="button"
                            onClick={() => {
                                status ? redScore(-1) : setShowError(true);
                            }}
                        >
                            Punto en contra
                        </button>
                        <button
                            className="btn btn-danger btn-lg btn-block mb-2 shadow-none"
                            type="button"
                            onClick={() => lastRed(status)}
                        >
                            Deshacer último
                        </button>
                        <button
                            className="btn btn-dark btn-lg btn-block mt-3 mb-1 shadow-none"
                            type="button"
                            onClick={status ? undefined : () => startFight()}
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
                                status ? blueScore(1) : setShowError(true);
                            }}
                        >
                            Golpe de puño
                        </button>
                        <button
                            className="btn btn-primary btn-lg btn-block mb-2 shadow-none"
                            type="button"
                            onClick={() => {
                                status ? blueScore(2) : setShowError(true);
                            }}
                        >
                            Patada zona media
                        </button>
                        <button
                            className="btn btn-primary btn-lg btn-block mb-2 shadow-none"
                            type="button"
                            onClick={() => {
                                status ? blueScore(3) : setShowError(true);
                            }}
                        >
                            Patada zona alta
                        </button>
                        <button
                            className="btn btn-primary btn-lg btn-block mb-2 shadow-none"
                            type="button"
                            onClick={() => {
                                status ? blueWarning() : setShowError(true);
                            }}
                        >
                            Advertencia
                        </button>
                        <button
                            className="btn btn-primary btn-lg btn-block mb-2 shadow-none"
                            type="button"
                            onClick={() => {
                                status ? blueScore(-1) : setShowError(true);
                            }}
                        >
                            Punto en contra
                        </button>
                        <button
                            className="btn btn-primary btn-lg btn-block mb-2 shadow-none"
                            type="button"
                            onClick={() => lastBlue(status)}
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
        </div>
    );
};

export default FigthButtons;