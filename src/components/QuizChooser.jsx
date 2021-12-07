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
                            props.quizChoose("white", "Cinturón Blanco")
                        }
                    >
                        Cinturón Blanco (próximamente)
                    </button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <button
                        className="btn form-control text-black btn-light fs-3 disabled"
                        onClick={() =>
                            props.quizChoose("white", "Cinturón Blanco")
                        }
                    >
                        Punta Amarilla (próximamente)
                    </button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <button
                        className="btn form-control btn-warning text-black fs-3 disabled "
                        onClick={() =>
                            props.quizChoose("white", "Cinturón Blanco")
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
                            props.quizChoose("white", "Cinturón Blanco")
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
                            props.quizChoose("white", "Cinturón Blanco")
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
                            props.quizChoose("white", "Cinturón Blanco")
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
                            props.quizChoose("white", "Cinturón Blanco")
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
                            props.quizChoose("white", "Cinturón Blanco")
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
                            props.quizChoose("white", "Cinturón Blanco")
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
                            props.quizChoose("white", "Cinturón Blanco")
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
                            props.quizChoose("umpire", "Prueba de Arbitraje")
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
