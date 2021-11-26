import React, { useState } from "react";
import selector from "@scripts/selector";

const SelectorFormas = () => {
    const [formas, setFormas] = useState("");
    const choose = () => {
        const formas = selector.elegirFormas();
        setFormas(`Las formas elegidas son ${formas}`);
    };

    return (
        <section>
            <div className="container mt-5">
                <form>
                    <div className="row align-items-start">
                        <div className="col text-center text-white">
                            <div className="card bg-dark ">
                                <div className="card-body">
                                    <h3 className="text-center">Grado</h3>
                                    <br />
                                    <div className="form-check ">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id="1erDan"
                                            name="grado"
                                            defaultValue={1}
                                            defaultChecked
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="1erDan"
                                        >
                                            Hasta 1er Dan
                                        </label>
                                        <br />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id="2doDan"
                                            name="grado"
                                            defaultValue={2}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="2doDan"
                                        >
                                            Hasta 2do Dan
                                        </label>
                                        <br />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id="3erDan"
                                            name="grado"
                                            defaultValue={3}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="3erDan"
                                        >
                                            Hasta 3er Dan
                                        </label>
                                        <br />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id="4toDan"
                                            name="grado"
                                            defaultValue={4}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="4toDan"
                                        >
                                            Hasta 4to Dan
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col text-center text-white">
                            <div className="card bg-dark">
                                <div className="card-body">
                                    <h3>Cantidad</h3>
                                    <br />
                                    <div className="form-check ">
                                        <input
                                            className="form-check-input "
                                            type="radio"
                                            id="1-1formas"
                                            name="cantidad"
                                            defaultValue={1}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="1-1formas"
                                        >
                                            Modo torneo
                                        </label>
                                        <br />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id="1grado"
                                            name="cantidad"
                                            defaultValue={0}
                                            defaultChecked
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="1grado"
                                        >
                                            Forma del grado
                                        </label>
                                        <br />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id="1forma"
                                            name="cantidad"
                                            defaultValue={2}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="1forma"
                                        >
                                            Una forma
                                        </label>
                                        <br />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id="2formas"
                                            name="cantidad"
                                            defaultValue={3}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="2formas"
                                        >
                                            Dos formas
                                        </label>
                                        <br />
                                    </div>
                                </div>
                            </div>
                            {/*<div class="form-check">
							<input class="form-check-input" type="radio" id="3formas" name="cantidad" value="4" />
							<label class="form-check-label" for="3formas">Tres formas</label><br />
						</div>*/}
                        </div>
                        <div className="container-fluid text-center">
                            <button
                                className="btn  btn-dark mt-5"
                                type="button"
                                onClick={choose}
                            >
                                Elige las formas
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <p className="text-center fs-3 mt-5 mb-5 text-white" id="result">
                {formas}
            </p>
        </section>
    );
};

export default SelectorFormas;
