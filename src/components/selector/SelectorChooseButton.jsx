import React, { useContext } from "react";
import { PatternSelectorContext } from "@context/PatternSelectorContext";

const SelectorChooseButton = () => {

	const { elegirFormas } = useContext(PatternSelectorContext);

    return (
        <div className="container-fluid text-center">
            <button
                className="btn  btn-dark btn-lg mt-5 card-special"
                type="button"
                onClick={elegirFormas}
            >
                Elige las formas
            </button>
        </div>
    );
};

export default SelectorChooseButton;
