import React, { Component } from 'react';
import {checkAnswer, shuffleArray, getAnswerButton } from './Verify'

export default class Answers extends Component {
    constructor (props) {
        super(props);
        this.state = {message: "Print me!"};
    }
    getAnswerList () {
        const answerList = []
        var shuffledAnswers = []
        var newAnswerList = []
          this.props.trivia.map(answerItem => {
            for (var i = 0; i < (answerItem.incorrect_answers.length); i++) {
                answerList.push(answerItem.incorrect_answers[i])
            }
            answerList.push(answerItem.correct_answer)
            var trueAnswer = answerItem.correct_answer
                shuffledAnswers = shuffleArray(answerList);
                newAnswerList = getAnswerButton(shuffledAnswers, trueAnswer, this.state.message);
        })
        return newAnswerList;
  }
 
    render() {
        var answers = this.getAnswerList();
        return (
            <div>
            {answers}
            </div>
        )}
    }
export { Answers };