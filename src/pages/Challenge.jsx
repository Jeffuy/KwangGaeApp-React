import React, { useState, useEffect } from "react";
import GetChallenge from "@components/GetChallenge";

import desafios from "@scripts/challenges.js";

const Challenge = (props) => {
    const [puntosTotales, setPuntosTotales] = useState(
        JSON.parse(localStorage.getItem("puntosTotales"))
    );
    const [desafio, setDesafio] = useState(desafios.renderOnScreen());
    //const [desafio, setDesafio] = useState(<GetChallenge />);

    //setDesafio(setInterval("Hola"), 10000);
    // useEffect(() => {
    //     console.log("Hola");
    // }, [desafio]);

    const hola = () => {
        return console.log("Hola");
    };

    const choose = () => {
        desafios.elegirChallenge();
        setDesafio(desafios.renderOnScreen());
        setPuntosTotales(JSON.parse(localStorage.getItem("puntosTotales")));
    };

    //<GetChallenge hola={hola}/>;

    return (
        <>
            <section>
                <div className="container">
                    <p
                        className="text-center fs-5 mt-3 text-white"
                        id="puntos"
                    />
                    {puntosTotales}
                    <div className="container">
                        <div className="row  justify-content-center    ">
                            <button
                                type="button"
                                className="btn btn-lg btn-dark mt-3 "
                                onClick={() => choose()}
                            >
                                Dame un desafío
                            </button>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <p
                                className="text-center fs-3 mt-2"
                                id="result"
                            ></p>
                        </div>
                    </div>
                    <div>{desafio}</div>
                </div>
                <div className="container-fluid">
                    <div className="col-md-8"></div>
                </div>
                <div className="container-fluid mt-5">
                    <p className="text-center fs-6 mt-5 text-danger">
                        <b>
                            <a
                                className="badge bg-danger"
                                onClick={() => resetPoints}
                            >
                                Reiniciar puntos
                            </a>{" "}
                            (esta opción no se puede deshacer)
                        </b>
                    </p>
                </div>
            </section>
        </>
    );
};

export default Challenge;
