import React, { useState } from "react";
import style from "@styles/quiz.css";

const Quiz = () => {
    const questions = [
        {
            questionText: "¿En qué país se creó el Taekwon-Do?",
            answerOptions: [
                { answerText: "Japon", isCorrect: false },
                { answerText: "China", isCorrect: false },
                { answerText: "Corea", isCorrect: true },
                { answerText: "Uruguay", isCorrect: false },
            ],
        },
        {
            questionText: "¿En que año se creó el Taekwon-Do?",
            answerOptions: [
                { answerText: "1325", isCorrect: false },
                { answerText: "1955", isCorrect: true },
                { answerText: "1980", isCorrect: false },
                { answerText: "1936", isCorrect: false },
            ],
        },
        {
            questionText: "¿Cuántos movimientos tiene la cruz de ataque?",
            answerOptions: [
                { answerText: "7", isCorrect: true },
                { answerText: "8", isCorrect: false },
                { answerText: "12", isCorrect: false },
                { answerText: "6", isCorrect: false },
            ],
        },
        {
            questionText: "¿Cuántos nudos lleva el cinto del dobok?",
            answerOptions: [
                { answerText: "1", isCorrect: false },
                { answerText: "2", isCorrect: true },
                { answerText: "3", isCorrect: false },
                { answerText: "Todos los que pueda", isCorrect: false },
            ],
        },
        {
            questionText: "¿Cómo se llama la posición en que se realizan los movimientos de la cruz de defensa?",
            answerOptions: [
                { answerText: "Jumbi", isCorrect: false },
                { answerText: "Posición de forma", isCorrect: false },
                { answerText: "Posición de ataque", isCorrect: false },
                { answerText: "Gunnun sogi", isCorrect: true },
            ],
        },
        {
            questionText: "¿Cúal de estos no es un principio del Taekwon-Do?",
            answerOptions: [
                { answerText: "Cortesía", isCorrect: false },
                { answerText: "Perseverancia", isCorrect: false },
                { answerText: "Paciencia", isCorrect: true },
                { answerText: "Espíritu indomable", isCorrect: false },
            ],
        },
        {
            questionText: "Una persona tiene integridad cuando...",
            answerOptions: [
                { answerText: "...sabe integrarse a un grupo", isCorrect: false },
                { answerText: "...sabe diferenciar lo correcto de lo incorrecto", isCorrect: true },
                { answerText: "...miente muy seguido", isCorrect: false },
                { answerText: "...nunca se rinde", isCorrect: false },
            ],
        },
        {
            questionText: "¿A qué altura va la mano que defiende al realizar una defensa media?",
            answerOptions: [
                { answerText: "A la boca del estómago ", isCorrect: false },
                { answerText: "A la del hombro", isCorrect: true },
                { answerText: "A la de la nariz", isCorrect: false },
                { answerText: "A la del cinturón", isCorrect: false },
            ],
        }
    ];
	const [grado, setGrado] = useState("Cinturón blanco");
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);



    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div>
            
                {showScore ? (
					<div className="app">
                    <div className="score-section">
                        Tu puntaje fue de {score} sobre {questions.length}
                    </div></div>
                ) : (
                    <>	<div className="container-fluid mt-3"><h1>{grado}</h1></div><div className="app">
                        <div className="question-section">
                            <div className="question-count">
                                <span>Pregunta {currentQuestion + 1}</span>/
                                {questions.length} 
                            </div>
                            <div className="question-text">
                                {questions[currentQuestion].questionText}
                            </div>
                        </div>
                        <div className="answer-section">
                            {questions[currentQuestion].answerOptions.map(
                                (answerOption) => (
                                    <button
										className="quiz-button"
                                        key={answerOption.answerText}
                                        onClick={() =>
                                            handleAnswerOptionClick(
                                                answerOption.isCorrect
                                            )
                                        }
                                    >
                                        {answerOption.answerText}
                                    </button>
                                )
                            )}
                        </div></div>
                    </>
                )}
            </div>
        
    );
};

export default Quiz;
