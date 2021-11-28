import React from "react";
import challenges from "@scripts/challenges.js";

const GetChallenge = () => {
    return (
        <>
            {challenges.challenges.length !== 0 ? (
                challenges.challenges.map((challenge) => (
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
                            <a
                                onClick={() => faliled}
                                className="btn btn-danger"
                            >
                                Fallado
                            </a>
                            <a
                                onClick={() => achieved}
                                className="btn btn-primary"
                            >
                                Completado
                            </a>
                        </div>
                    </div>
                ))
            ) : (
                <p>No hay desafíos</p>
            )}
        </>
    );
};

export default GetChallenge;
