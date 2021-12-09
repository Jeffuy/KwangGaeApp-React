import React from "react";

const Questions = (props) => {
    if (props.questions != null) {
        return (
            <div className="container">
                {props.showScore ? (
                    <>
                        <div className="app">
                            <div className="row">
                                <img
                                    className="img-fluid pb-4"
                                    src={props.pruebita()}
                                    alt=""
                                />
								<div className="container-fluid">
                                <img
                                    className="img-fluid img-personal"
                                    src={props.imgList[props.score]}
                                    alt=""
                                /></div>
                            </div>
                        </div>
                        <div className="container-fluid mt-4">
                            <div className="row">
                                <div className="col">
                                    <div className="text-center fs-2">
                                        Tu puntaje fue de {props.score} sobre{" "}
                                        {props.questions.length}
                                    </div>
                                    <button
                                        className="btn btn-dark form-control mt-4 mb-4"
                                        onClick={() => props.back()}
                                    >
                                        Volver
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="app">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <span className="fs-4">
                                            Pregunta {props.currentQuestion + 1}
                                        </span>
                                        /{props.questions.length}
                                    </div>
                                    <div className="row">
                                        <div className="col text-center mt-2 fs-4">
                                            {
                                                props.questions[
                                                    props.currentQuestion
                                                ].questionText
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="answer-section mt-4">
                                    {props.questions[
                                        props.currentQuestion
                                    ].answerOptions.map((answerOption) => (
                                        <button
                                            className="btn btn-dark mt-3"
                                            key={answerOption.answerText}
                                            onClick={() =>
                                                props.handleAnswerOptionClick(
                                                    answerOption.isCorrect
                                                )
                                            }
                                        >
                                            {answerOption.answerText}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default Questions;
