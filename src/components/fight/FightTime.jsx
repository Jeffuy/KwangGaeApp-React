import React from "react";

const FightTime = ({ time }) => {
    return (
        <div className="text-center row mb-5 text-white">
            <div className="col-12">
                <span style={{ fontSize: 20 }}>{time}</span>
            </div>
        </div>
    );
};

export default FightTime;
