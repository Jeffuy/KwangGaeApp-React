import React from "react";
import "@styles/challenges.css";

const ChallengeItem = props => {
	return (
		<>
			<li
				className={`${props.type === 'Counter' ? 'TodoItemCounter' : 'TodoItem'} ${props.type === 'Attack' ? 'TodoItemAttack' : 'TodoItem'} ${
					props.type === 'Strategy' ? 'TodoItemStrat' : 'TodoItem'
				} `}
			>
				<i className={`Icon Icon-check fas fa-check-circle fa-2x ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete} />
				<p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
					Haz <b>{props.text}</b> para sumar <b>{props.points} puntos.</b>
				</p>

				<i className="fas fa-trash-alt fa-2x Icon-delete" onClick={props.onDelete} />
				<div className="Icon-type">
					<p>{props.type}</p>
				</div>
			</li>
		</>
	);
};

export default ChallengeItem;
