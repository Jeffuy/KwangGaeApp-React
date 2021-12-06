import React from 'react'

const Questions = (props) => {
	
	if (props.questions != null) {
	return (
		<div className="container">
			{props.showScore ? (
		<><div className="app">
					<div className="score-section">
						Tu puntaje fue de {props.score} sobre {props.questions.length}
					</div>
				</div><div className="container-fluid"><div className="row"><div className="col-6 offset-4">
						<button
							className="btn text-white bg-dark save_button"
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
				<div className="question-section">
					<div className="question-count">
						<span>Pregunta {props.currentQuestion + 1}</span>/
						{props.questions.length}
					</div>
					<div className="question-text">
						{props.questions[props.currentQuestion].questionText}
					</div>
				</div>
				<div className="answer-section">
					{props.questions[props.currentQuestion].answerOptions.map(
						(answerOption) => (
							<button
								className="quiz-button mt-2"
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
		</>
	)}
		</div>
	)} else {
		return <h2 className="text-center mt-4">Elige tu Quiz</h2>
	}
}

export default Questions
