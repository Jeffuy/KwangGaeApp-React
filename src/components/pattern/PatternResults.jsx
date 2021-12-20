import React from "react";

const PatternResults = ({ red, blue }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <p
                        className="text-center text-white"
                        style={{ fontSize: 30, backgroundColor: "red" }}
                    >
                        {red.score.toFixed(1)}
                    </p>
					{red.score > blue.score && (
                            <p
                                style={{
                                    fontSize: 15,
                                    backgroundColor: "red",
									marginTop: "-17px",
									textAlign: "center"
                                }}
                            >
                                Winner!
                            </p>)}
                </div>
                <div className="col-6">
                    <p
                        className="text-center text-white"
                        style={{ fontSize: 30, backgroundColor: "blue" }}
                    >
                        {blue.score.toFixed(1)}
                    </p>
					{blue.score > red.score && (
                            <p
                                style={{
                                    fontSize: 15,
                                    backgroundColor: "blue",
									marginTop: "-17px",
									textAlign: "center"
                                }}
                            >
                                Winner!
                            </p>)}
                </div>
            </div>
        </div>
    );
};

export default PatternResults;
