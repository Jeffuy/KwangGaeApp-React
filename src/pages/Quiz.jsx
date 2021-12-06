import React, { useState, useEffect } from "react";
import style from "@styles/quiz.css";
import quizQuestions from "@scripts/data/quizQuestions";
import QuizChooser from "@components/QuizChooser";
import Questions from "@components/Questions";

const Quiz = (props) => {

	const [grado, setGrado] = useState(null);
    const [questions, setQuestions] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [visible, setVisible] = useState(false);
	const [title, setTitle] = useState(null);

    // const visible = showScore ? (
    // 	<div className="app">
    // 		<div className="score-section">
    // 			Tu puntaje fue de {score} sobre {questions.length}
    // 		</div>
    // 	</div>
    // ) : (
    // 	<>
    // 		{" "}
    // 		<div className="container-fluid mt-3">
    // 			<h1>{grado}</h1>
    // 		</div>
    // 		<div className="app">
    // 			<div className="question-section">
    // 				<div className="question-count">
    // 					<span>Pregunta {currentQuestion + 1}</span>/
    // 					{questions.length}
    // 				</div>
    // 				<div className="question-text">
    // 					{questions[currentQuestion].questionText}
    // 				</div>
    // 			</div>
    // 			<div className="answer-section">
    // 				{questions[currentQuestion].answerOptions.map(
    // 					(answerOption) => (
    // 						<button
    // 							className="quiz-button"
    // 							key={answerOption.answerText}
    // 							onClick={() =>
    // 								handleAnswerOptionClick(
    // 									answerOption.isCorrect
    // 								)
    // 							}
    // 						>
    // 							{answerOption.answerText}
    // 						</button>
    // 					)
    // 				)}
    // 			</div>
    // 		</div>
    // 	</>
    // )

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

    function quizChoose(choice, title) {
        setGrado(choice);
		setTitle(title);
		if (choice === "white") {
			setQuestions(quizQuestions.questionsWhite);
		} else if (choice === "umpire")
		setQuestions(quizQuestions.questionsUmpire);

    }
	const back = () => {
		setQuestions(null)
		setGrado(null);
		setScore(0);
		setCurrentQuestion(0);
		setShowScore(false);
		setTitle(null)
	}
    useEffect(() => {
        setVisible(true);
    }, [questions]);

    return (
        <div className="d-flex flex-column min-vh-100">
            {grado == null && <QuizChooser quizChoose={quizChoose} />}
            <div>
				<h1 className="mt-4">{title}</h1>
                {visible && (
                    <Questions
                        questions={questions}
                        handleAnswerOptionClick={handleAnswerOptionClick}
                        currentQuestion={currentQuestion}
                        score={score}
                        showScore={showScore}
						back={back}
                    />
                )}
            </div>
        </div>
    );
};

export default Quiz;
