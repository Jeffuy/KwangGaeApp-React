import React from 'react'
import {imgList} from "@scripts/data/quizImg"

const Questions = (props) => {
	
	if (props.questions != null) {
	return (
		<div className="container">
			{props.showScore ? (
		<><div className="app">
					<div className="row"><img className="img-fluid" src={imgList[props.score]} alt="" /></div>
				</div><div className="container-fluid mt-4"><div className="row"><div className="col">
				<div className="text-center fs-2">
						Tu puntaje fue de {props.score} sobre {props.questions.length}
					</div>
						<button
							className="btn btn-dark form-control mt-4"
							onClick={() => props.back()}
						>
							Volver
						</button>
					</div></div></div></>
	) : (
		<>
			<div className="container mt-3 mb-3">
				<h1>{props.grado}</h1>
			</div>
			<div className="app">
			<div className="container">
				<div className="row">
					<div className="col">
						<span className="fs-4">Pregunta {props.currentQuestion + 1}</span>/
						{props.questions.length}
					</div>
					<div className="row">
					<div className="col text-center mt-2 fs-4">
						{props.questions[props.currentQuestion].questionText}
					</div>
					</div>
				</div>
				<div className="answer-section mt-4">
					{props.questions[props.currentQuestion].answerOptions.map(
						(answerOption) => (
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
						)
					)}
				</div>
			</div>
			</div>
		</>
	)}
		</div>
	)} else {
		return <div></div>
	}
}

export default Questions
