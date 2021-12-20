import React from "react";

const FightTime = ({ time }) => {
    return (
        <div className="container text-center row mb-5 text-white">
            <div className="col">
                <span style={{ fontSize: 20 }}>{time}</span>
            </div>
        </div>
    );
};

export default FightTime;
