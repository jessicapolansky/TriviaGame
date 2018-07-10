import React from "react";

// function getScore (props) {
//     var score = this.props.score;
//     return score
// }

const scoreboard = (props) => {
	return(
		<div>
			<br />
			<p>Player One Score: {props.statescore}</p>
		</div>
	);
};
export default scoreboard;