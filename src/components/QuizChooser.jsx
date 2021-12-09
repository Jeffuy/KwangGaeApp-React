import React, { useState } from "react";


const QuizChooser = (props) => {
    return (
        <div className="container">
			<h1 className="mt-4">Elige tu Quiz</h1>
            <div className="row mt-4">
                <div className="col">
                    <button
                        className="btn form-control text-black btn-light fs-3"
                        onClick={() =>
                            props.quizChoose("white", 0)
                        }
                    >
                        Cinturón Blanco
                    </button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <button
                        className="btn form-control text-black btn-light fs-3"
                        onClick={() =>
                            props.quizChoose("yellowStripe", 1)
                        }
                    >
                        Punta Amarilla
                    </button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <button
                        className="btn form-control btn-warning text-black fs-3 disabled "
                        onClick={() =>
                            props.quizChoose("yellow", 2)
                        }
                    >
                        Cinturón Amarillo (próximamente)
                    </button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <button
                        className="btn form-control btn-warning text-black fs-3 disabled"
                        onClick={() =>
                            props.quizChoose("greenStripe", 3)
                        }
                    >
                        Punta Verde (próximamente)
                    </button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <button
                        className="btn form-control btn-success text-black fs-3 disabled"
                        onClick={() =>
                            props.quizChoose("white", 4)
                        }
                    >
                        Cinturon Verde (próximamente)
                    </button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <button
                        className="btn form-control btn-success text-black fs-3 disabled"
                        onClick={() =>
                            props.quizChoose("white", 5)
                        }
                    >
                        Punta azul (próximamente)
                    </button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <button
                        className="btn form-control btn-primary text-black fs-3 disabled"
                        onClick={() =>
                            props.quizChoose("white", 6)
                        }
                    >
                        Cinturón azul (próximamente)
                    </button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <button
                        className="btn form-control btn-primary text-black fs-3 disabled"
                        onClick={() =>
                            props.quizChoose("white", 7)
                        }
                    >
                        Punta Roja (próximamente)
                    </button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <button
                        className="btn form-control btn-danger text-black fs-3 disabled"
                        onClick={() =>
                            props.quizChoose("white", 8)
                        }
                    >
                        Cinturón Rojo (próximamente)
                    </button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <button
                        className="btn form-control btn-danger text-black fs-3 disabled"
                        onClick={() =>
                            props.quizChoose("white", 9)
                        }
                    >
                        Punta Negra (próximamente)
                    </button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <button
                        className="btn form-control btn-dark text-white fs-3"
                        onClick={() =>
                            props.quizChoose("umpire", 10)
                        }
                    >
                        Arbitraje
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizChooser;
