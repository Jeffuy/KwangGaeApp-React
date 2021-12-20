import React from "react";

const PatternStartMatchButton = ({ changeLevel }) => {
    return (
        <div className="container text-center">
            <button
                className="btn btn-dark btn-lg mt-2 mb-2 w-100"
                type="button"
                onClick={() => changeLevel(1, "Level One")}
            >
                Start Match
            </button>
        </div>
    );
};

export default PatternStartMatchButton;
