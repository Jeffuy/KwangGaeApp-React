import React from "react";

const PatternLevelOne = ({
    redScore,
    red,
    redLast,
    redQuantity,
    setRedQuantity,
    blue,
    blueScore,
    blueLast,
    blueQuantity,
    setBlueQuantity,
    changeLevel,
}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 mb-2">
                    <div className="btn-group-vertical w-100">
                        <button
                            className="btn btn-danger btn-lg mt-3 mb-2"
                            type="button"
                            onClick={
                                redQuantity <= 29
                                    ? () => {
                                          setRedQuantity(redQuantity + 1),
                                              redScore(-0.2);
                                      }
                                    : undefined
                            }
                        >
                            -0.2
                        </button>
                        <button
                            className="btn btn-danger btn-lg mb-2"
                            type="button"
                            onClick={
                                redQuantity <= 29
                                    ? () => {
                                          setRedQuantity(redQuantity + 1),
                                              redScore(-10);
                                      }
                                    : undefined
                            }
                        >
                            -10
                        </button>
                        <button
                            className="btn btn-danger btn-lg mb-2"
                            type="button"
                            onClick={
                                red.last != 0
                                    ? () => {
                                          redLast(true),
                                              setRedQuantity(redQuantity - 1);
                                      }
                                    : undefined
                            }
                        >
                            Undo
                        </button>
                    </div>
                </div>
                <div className="col-6 mb-2">
                    <div className="btn-group-vertical w-100">
                        <button
                            className="btn btn-primary btn-lg mt-3 mb-2"
                            type="button"
                            onClick={
                                blueQuantity <= 29
                                    ? () => {
                                          setBlueQuantity(blueQuantity + 1),
                                              blueScore(-0.2);
                                      }
                                    : undefined
                            }
                        >
                            -0.2
                        </button>
                        <button
                            className="btn btn-primary btn-lg mb-2"
                            type="button"
                            onClick={
                                blueQuantity <= 29
                                    ? () => {
                                          setBlueQuantity(blueQuantity + 1),
                                              blueScore(-10);
                                      }
                                    : undefined
                            }
                        >
                            -10
                        </button>
                        <button
                            className="btn btn-primary btn-lg mb-2"
                            type="button"
                            onClick={
                                blue.last != 0
                                    ? () => {
                                          blueLast(true),
                                              setBlueQuantity(blueQuantity - 1);
                                      }
                                    : undefined
                            }
                        >
                            Undo
                        </button>
                    </div>
                </div>
                <button
                    className="btn btn-dark btn-lg btn-block"
                    id="start-end-button"
                    type="button"
                    onClick={() => changeLevel(2, "Level Two")}
                >
                    End LVL 1
                </button>
            </div>
        </div>
    );
};

export default PatternLevelOne;
