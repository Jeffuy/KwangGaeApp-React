import React, { useState } from "react";

const QuizChooser = (props) => {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-3">
                    <button
                        className="btn text-black bg-white save_button"
                        onClick={() => props.quizChoose("white","Cinturón Blanco")}
                    >
                        Cinturón Blanco
                    </button>
                </div>
                <div className="col-3">
                    <button
                        className="btn text-black bg-white save_button"
                        onClick={() => props.quizChoose("white","Cinturón Blanco")}
                    >
                        Punta Amarilla
                    </button>
                </div>
                <div className="col-3">
                    <button
                        className="btn text-black bg-warning save_button"
                        onClick={() => props.quizChoose("white","Cinturón Blanco")}
                    >
                        Cinturón Amarillo
                    </button>
                </div>
                <div className="col-3">
                    <button
                        className="btn text-black bg-warning save_button"
                        onClick={() => props.quizChoose("white","Cinturón Blanco")}
                    >
                        Punta Verde
                    </button>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-3" >
                    <button
                        className="btn text-white bg-dark save_button"
                        onClick={() => props.quizChoose("umpire", "Prueba de Umpire")}
                    >
                        Prueba Umpire
                    </button>
                </div>
				<div className="col-3">
                    <button
                        className="btn text-white bg-dark save_button"
                        onClick={() => props.quizChoose("umpire", "Prueba de Umpire")}
                    >
                        Prueba Umpire
                    </button>
                </div>
				<div className="col-3">
                    <button
                        className="btn text-white bg-dark save_button"
                        onClick={() => props.quizChoose("umpire", "Prueba de Umpire")}
                    >
                        Prueba Umpire
                    </button>
                </div>
				<div className="col-3">
                    <button
                        className="btn text-white bg-dark save_button"
                        onClick={() => props.quizChoose("umpire", "Prueba de Umpire")}
                    >
                        Prueba Umpire
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizChooser;
