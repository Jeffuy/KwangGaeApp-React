import React from "react";

const PatternLevelTwo = ({
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
                <div className="col-4 mb-2">
                    <div className="btn-group-vertical w-100">
                        <button
                            className="btn btn-danger btn-lg mt-3 mb-2"
                            type="button"
                            onClick={
                                redQuantity <= 4
                                    ? () => {
                                          setRedQuantity(redQuantity + 1),
                                              redScore(-0.5),
                                              console.log(red.score);
                                      }
                                    : undefined
                            }
                        >
                            -0.5
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
                <div className="col-2 mb-2">
                    <p className="text-center text-white fs-1 mt-3">
                        x{redQuantity}
                    </p>
                </div>
                <div className="col-4 mb-2">
                    <div className="btn-group-vertical w-100">
                        <button
                            className="btn btn-primary btn-lg mt-3 mb-2"
                            type="button"
                            onClick={
                                blueQuantity <= 4
                                    ? () => {
                                          setBlueQuantity(blueQuantity + 1),
                                              blueScore(-0.5),
                                              console.log(blue.score);
                                      }
                                    : undefined
                            }
                        >
                            -0.5
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
                <div className="col-2 mb-2">
                    <p className="text-center text-white fs-1 mt-3">
                        x{blueQuantity}
                    </p>
                </div>
                <button
                    className="btn btn-dark btn-lg btn-block"
                    id="start-end-button"
                    type="button"
                    onClickCapture={() => {
                        changeLevel(3, "Level Three");
                    }}
                >
                    End LVL 2
                </button>
            </div>
        </div>
    );
};

export default PatternLevelTwo;
