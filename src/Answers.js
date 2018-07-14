import React, { Component } from "react";
import { shuffleArray } from "./Verify";


export default class Answers extends Component {
	constructor (props) {
		super(props);
		this.state = {statescore: 0, buttonclass: "Ans-btn", showButtons: true};
		this.checkAnswer=this.checkAnswer.bind(this);
	}

	checkAnswer (ans, correct) {
		if (ans === correct) {
			alert("You got it right!!");
			this.setState({statescore: this.state.statescore + 1});
			console.log(this.state.statescore);
		} else {
			let message = "Sorry, the correct answer was " + correct;
			alert(message);
			this.setState({statescore: this.state.statescore + 0});

		}
	}
	getAnswerButton (shuffledAnswers, trueAnswer) {
		console.log("TrueAnswer variable", trueAnswer);
		return shuffledAnswers.map((ans, i) => {
			return <span>
				<button dangerouslySetInnerHTML={{__html: shuffledAnswers[i]}} ref={btn => { this.btn = btn; }}
					className="btn btn-secondary answers this.state.buttonclass"
					key={i} 
					onClick={(e) => this.checkAnswer(ans,trueAnswer)}/>
			</span>;
		});
	}

	getAnswerList () {
		const answerList = [];
		var shuffledAnswers = [];
		var newAnswerList = [];
		if (this.props.trivia) {
			this.props.trivia.map(answerItem => {
				for (var i = 0; i < (answerItem.incorrect_answers.length); i++) {
					answerList.push(answerItem.incorrect_answers[i]);
				}
				answerList.push(answerItem.correct_answer);
				var trueAnswer = answerItem.correct_answer;
				shuffledAnswers = shuffleArray(answerList);
				newAnswerList = this.getAnswerButton(shuffledAnswers, trueAnswer, this.state.message);
			});
		}
		return newAnswerList;
	}

 
	render() {
		var answers = this.getAnswerList();
		return (
			<div>
				{answers}

				<br />
				<p>Player One Score: {this.state.statescore}</p>
			</div>
		);}
}
export { Answers };