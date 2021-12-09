import React, { useState, useEffect } from "react";
import style from "@styles/quiz.css";
import { questionList } from "@scripts/data/quizQuestions";
import QuizChooser from "@components/QuizChooser";
import Questions from "@components/Questions";
import { imgList, imgTitle } from "@scripts/data/quizImg";

const Quiz = (props) => {
    const [grado, setGrado] = useState(null);
    const [questions, setQuestions] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState(null);
    const [imgTitleSetter, setImgTitleSetter] = useState(imgTitle);

	const pruebita = () => {
		return imgTitleSetter}

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

    function quizChoose(choice, index) {
        setGrado(choice);
		setQuestions(questionList[index]);
		setImgTitleSetter(imgTitle[index]);

        // if (choice === "white") {
        //     setQuestions(quizQuestions.questionsWhite);
        //     setImgTitleSetter(imgTitle[0]);
        // } else if (choice === "umpire") {
        //     setQuestions(quizQuestions.questionsUmpire);
        //     setImgTitleSetter(imgTitle[1]);
        // }
    }
    const back = () => {
        setQuestions(null);
        setGrado(null);
        setScore(0);
        setCurrentQuestion(0);
        setShowScore(false);
        setTitle(null);
    };
    useEffect(() => {
        setVisible(true);
    }, [questions]);

    return (
        <div className="d-flex flex-column min-vh-100">
            {grado == null && <QuizChooser quizChoose={quizChoose} />}
            <div>
                <h1 className="mt-4">{!showScore && title}</h1>
                {visible && (
                    <Questions
                        questions={questions}
                        handleAnswerOptionClick={handleAnswerOptionClick}
                        currentQuestion={currentQuestion}
                        score={score}
                        showScore={showScore}
                        back={back}
                        imgList={imgList}
						pruebita={pruebita}
                    />
                )}
            </div>
        </div>
    );
};

export default Quiz;
