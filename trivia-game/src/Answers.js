import React, { Component } from "react";
import { shuffleArray } from "./Verify";

export default class Answers extends Component {
	constructor (props) {
		super(props);
		this.state = {message: "Print me!", buttonclass: "Ans-btn"};
		this.checkAnswer = this.checkAnswer.bind(this);
		this.changeScore(this.props.score);
	}
	changeScore (score) {
		console.log("Props score", score);
		console.log("Props statescore", this.props.statescore);
		var oldScore = parseInt(this.props.statescore , 10);
		var newValue = parseInt(score, 10);
		var newScore = oldScore + newValue;
		console.log("Newscore", newScore);
		return newScore;
	}
	checkAnswer (ans, correct) {
		this.setState({buttonclass: "Ans-btnSelected"});
		if (ans === correct) {
			alert("You got it right!!");
			this.changeScore(1);
		} else {
			alert("You got it wrong!!");
			this.changeScore(0);
		}
	}
	
	getAnswerButton (shuffledAnswers, trueAnswer, message) {
		console.log("getAnswerButton", shuffledAnswers);
		console.log("TrueAnswer variable", trueAnswer);
		return shuffledAnswers.map((ans, i) => {
			return <span>
				<button dangerouslySetInnerHTML={{__html: shuffledAnswers[i]}} ref={btn => { this.btn = btn; }}
					className="btn btn-secondary answers this.state.buttonclass" 
					onClick={(e) => this.checkAnswer(ans, trueAnswer, message)} />
			</span>;
		});
	}
	getAnswerList () {
		const answerList = [];
		var shuffledAnswers = [];
		var newAnswerList = [];
		this.props.trivia.map(answerItem => {
			for (var i = 0; i < (answerItem.incorrect_answers.length); i++) {
				answerList.push(answerItem.incorrect_answers[i]);
			}
			answerList.push(answerItem.correct_answer);
			var trueAnswer = answerItem.correct_answer;
			shuffledAnswers = shuffleArray(answerList);
			newAnswerList = this.getAnswerButton(shuffledAnswers, trueAnswer, this.state.message);
		});
		return newAnswerList;
	}

 
	render() {
		var answers = this.getAnswerList();
		return (
			<div>
				{answers}
			</div>
		);}
}
export { Answers };