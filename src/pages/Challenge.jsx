import React from "react";

const Challenge = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <p
                        className="text-center fs-5 mt-3 text-white"
                        id="puntos"
                    />
                    <div className="container">
                        <div className="row  justify-content-center    ">
                            <button
                                type="button"
                                className="btn btn-lg btn-dark mt-3 "
                                onclick="elegirChallenge()"
                            >
                                Dame un desafío
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <p className="text-center fs-3 mt-2" id="result" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="col-md-8">
                        <div id="desafios" />
                    </div>
                </div>
                <div className="container-fluid mt-5">
                    <p className="text-center fs-6 mt-5 text-danger">
                        <b>
                            <a
                                className="badge bg-danger"
                                onclick="sumaPuntos(-10000)"
                            >
                                Reiniciar puntos
                            </a>{" "}
                            (esta opción no se puede deshacer)
                        </b>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Challenge;
