import React from "react";

const PatternMatchStatus = ({ status }) => {
    return (
        <div className="container">
            <h3 className="mt-3 mb-4  text-center text-white" id="status">
                {status}
            </h3>
        </div>
    );
};

export default PatternMatchStatus;
