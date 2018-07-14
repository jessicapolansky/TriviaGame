import React, { Component } from "react";
import { shuffleArray } from "./Verify";
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

export default class Answers extends Component {
	constructor (props) {
		super(props);
		this.state = {statescore: 0, buttonclass: "Ans-btn", showButtons: true, isShowingModal: false,
					message: "You got it right!"};
		this.checkAnswer=this.checkAnswer.bind(this);
	}
	handleClick = () => this.setState({isShowingModal: true})
  	handleClose = () => this.setState({isShowingModal: false})
	checkAnswer (ans, correct) {
		if (ans === correct) {
			this.handleClick();
			this.setState({statescore: this.state.statescore + 1});
			console.log(this.state.statescore);
		} else {
			this.handleClick();
			this.setState({statescore: this.state.statescore + 0, message: "Sorry, the correct answer was " + correct });

		}
	}
	getAnswerButton (shuffledAnswers, trueAnswer) {
		console.log("TrueAnswer variable", trueAnswer);
		return shuffledAnswers.map((ans, i) => {
			return <span>
				<button dangerouslySetInnerHTML={{__html: shuffledAnswers[i]}} ref={btn => { this.btn = btn; }}
					className="btn btn-secondary answers this.state.buttonclass"
					key={i} 
					onClick={(e) => {this.checkAnswer(ans,trueAnswer); this.handleClick;}}/>
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
				<div>
				{this.state.isShowingModal && <div onClick={this.handleClick}>
        			<ModalContainer onClose={this.handleClose}>
          				<ModalDialog onClose={this.handleClose}>
            				<p>{this.state.message}</p>
          				</ModalDialog>
        			</ModalContainer>
    			</div>}
				</div>
				<br />
				<p>Player One Score: {this.state.statescore}</p>
			</div>
		);}
	}
export { Answers };