import React from "react";

const SelectorChooseButton = ({ choose }) => {
    return (
        <div className="container-fluid text-center">
            <button
                className="btn  btn-dark btn-lg mt-5"
                type="button"
                onClick={choose}
            >
                Elige las formas
            </button>
        </div>
    );
};

export default SelectorChooseButton;
