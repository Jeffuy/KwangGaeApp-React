import React from "react";

const SelectorResults = ({ formas }) => {
    return (
		<div className="container">
		<div className="row">
			<div className="col-12">
			<p className="text-center fs-1 mt-5 mb-5 width-special" id="result">
            {formas}
        </p>
		</div>
		</div>
		</div>
        
    );
};

export default SelectorResults;
