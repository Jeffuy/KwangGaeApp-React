import React, { useState } from "react";
import elegirFormas from "@scripts/selector";
import SelectorOptionsDegree from "@components/selector/SelectorOptionsDegree";
import SelectorOptionsQuantity from "@components/selector/SelectorOptionsQuantity";
import SelectorChooseButton from "@components/selector/SelectorChooseButton";
import SelectorResults from "@components/selector/SelectorResults";


const PatternSelector = () => {

    const [formas, setFormas] = useState("");

	const choose = () => {
        const formas = elegirFormas();
        setFormas(`Las formas elegidas son ${formas}`);
    };

    return (
        <section className="d-flex flex-column min-vh-100">
            <div className="container-fluid mt-5">
                <div className="row">
                    <SelectorOptionsDegree />
					<SelectorOptionsQuantity />
                </div>
            </div>

            <SelectorChooseButton choose={choose} />
            <SelectorResults formas={formas} />
        </section>
    );
};

export default PatternSelector;
