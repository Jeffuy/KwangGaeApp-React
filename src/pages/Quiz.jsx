import React, { useState, useEffect } from "react";
import style from "@styles/quiz.css";
import { questionList } from "@scripts/data/quizQuestions";
import QuizChooser from "@components/quiz/QuizChooser";
import SelectedQuestions from "@components/quiz/SelectedQuestions";
import { imgList, imgTitle } from "@scripts/data/quizImg";

const Quiz = (props) => {
    const [grado, setGrado] = useState(null);
    const [questions, setQuestions] = useState(null);
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [questionsAreSelected, setQuestionsAreSelected] = useState(false);
    const [title, setTitle] = useState(null);
    const [imgTitleSetter, setImgTitleSetter] = useState(imgTitle);

	const titleChanger = () => {
		return imgTitleSetter}

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestionNumber + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionNumber(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    function quizChoose(choice, index) {
        setGrado(choice);
		setQuestions(questionList[index]);
		setImgTitleSetter(imgTitle[index]);
    }

    const back = () => {
        setQuestions(null);
        setGrado(null);
        setScore(0);
        setCurrentQuestionNumber(0);
        setShowScore(false);
        setTitle(null);
    };
    useEffect(() => {
        setQuestionsAreSelected(true);
    }, [questions]);

    return (
        <div className="d-flex flex-column min-vh-100">
            {grado == null && <QuizChooser quizChoose={quizChoose} />}
            <div>
                <h1 className="mt-4">{!showScore && title}</h1>
                {questionsAreSelected && (
                    <SelectedQuestions
                        questions={questions}
                        handleAnswerOptionClick={handleAnswerOptionClick}
                        currentQuestionNumber={currentQuestionNumber}
                        score={score}
                        showScore={showScore}
                        back={back}
                        imgList={imgList}
						titleChanger={titleChanger}
                    />
                )}
            </div>
        </div>
    );
};

export default Quiz;
