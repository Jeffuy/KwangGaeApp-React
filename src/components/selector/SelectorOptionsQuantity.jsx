import React from "react";

const SelectorOptionsQuantity = () => {
    return (
        <div className="col text-center text-white">
            <div className="card bg-dark  card-special ">
                <div className="card-body ">
                    <h3>Cantidad</h3>
                    <br />
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="1-1formas"
                            name="cantidad"
                            defaultValue={1}
                        />
                        <label className="form-check-label mb-1" htmlFor="1-1formas">
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
                        <label className="form-check-label mb-1" htmlFor="1grado">
                            Del grado
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
                        <label className="form-check-label mb-1" htmlFor="1forma">
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
                        <label className="form-check-label " htmlFor="2formas">
                            Dos formas
                        </label>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectorOptionsQuantity;
