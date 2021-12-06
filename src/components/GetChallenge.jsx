import React, { useState } from "react";
import challenges from "@scripts/challenges";
import { render } from "react-dom";

const GetChallenge = (props) => {
    const choose = () => props.choose();
	const sumaPuntos = () => props.sumaPuntos();
	
	let cgs =""
	let coso = challenges.getTasks() || []
	
    const renderOnScreen = (coso) => {
		console.log(coso.length)
        cgs = coso.length > 0 ? (
            coso.map((challenge) => (
                <div
                    className="card mb-4 text-center text-black"
                    style={{ borderRadius: "0.3rem" }}
                    key={challenge.id}
                >
                    <div className="card-body">
                        <p>Tienes que hacer {challenge.task} .</p>
                        <p>
                            <b>RECOMPENSA: {challenge.points} puntos</b>
                        </p>
                        <a onClick={() => hola} className="btn btn-danger">
                            Fallado
                        </a>
                        <a
                            onClick={() => {challenges.endTask(challenge.id, "true"), props.sumaPuntos(), renderOnScreen(coso)}}
                            className="btn btn-primary"
                        >
                            Completado
                        </a>
                    </div>
                </div>
            ))
        ) : (
            <p>No hay desafíos</p>
        );
		return cgs;
    };

	renderOnScreen(coso)

    const [prueba, setPrueba] = useState(renderOnScreen(coso));

    return (
        <>
            <div className="container">
                <div className="row  justify-content-center    ">
                    <button
                        type="button"
                        className="btn btn-lg btn-dark mt-3 "
                        onClick={() => {setPrueba(renderOnScreen(coso)); props.choose()}}
                    >
                        Dame un desafío
                    </button>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8 offset-2">
                        <p className="text-center fs-3 mt-2" id="result"></p>
                    </div>
                </div>
                <div>{prueba}</div>
            </div>
        </>
    );
};

export default GetChallenge;
