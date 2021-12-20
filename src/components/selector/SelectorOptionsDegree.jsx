import React from "react";

const SelectorOptionsDegree = () => {
    return (
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
                        <label className="form-check-label mb-1" htmlFor="1erDan">
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
                        <label className="form-check-label mb-1" htmlFor="2doDan">
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
                        <label className="form-check-label mb-1" htmlFor="3erDan">
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
                        <label className="form-check-label" htmlFor="4toDan">
                            Hasta 4to Dan
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectorOptionsDegree;
