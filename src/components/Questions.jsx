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
		return <h2 className="text-center mt-4">Elige tu Quiz</h2>
	}
}

export default Questions
