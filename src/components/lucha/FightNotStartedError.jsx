import React from "react";

const FightNotStartedError = ({ setShowError }) => {
    return (
        <div className="container">
            <div
                className="card mb-4 text-center"
                style={{ borderRadius: "0.3rem" }}
            >
                <div className="card-body text-black">
                    <p>DEBES APRETAR START PARA EMPEZAR A PUNTUAR</p>
                    <a
                        className="btn btn-danger"
                        onClick={() => setShowError(false)}
                    >
                        Ok
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FightNotStartedError;
