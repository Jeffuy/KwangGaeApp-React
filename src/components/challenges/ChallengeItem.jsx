import React from "react";
import "@styles/challenges.css";

const ChallengeItem = (props) => {
    return (
		
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${
                    props.completed && "Icon-check--active"
                }`}
                onClick={props.onComplete}
            >
                √
            </span>
            <p
                className={`TodoItem-p ${
                    props.completed && "TodoItem-p--complete"
                }`}
            >
                Haz <b>{props.text}</b> para ganar <b>{props.points} puntos.</b>
            </p>

            <span className="Icon Icon-delete"
			onClick={props.onDelete}>X</span>
        </li>
    );
};

export default ChallengeItem;
