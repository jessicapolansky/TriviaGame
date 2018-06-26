import React, { Component } from 'react';
import Scoreboard from './scoreboard';

function checkAnswer (ans, correct) {
    console.log("Answer, Truth: ", ans, correct)
    if (ans === correct) {
      console.log("YES!!")
        return (
          <div>
            <h6>Correct!</h6>
          </div>
        );
      } else {
        console.log("No!!")
        return (
          <div>
            <h6>Incorrect!</h6>
          </div>
        );
      };
    }
export class TrueAnswer extends Component {
      constructor (props) {
          super(props);
          this.state = {message: ""};
      }
    getTruth () {
      var trueAnswer = 
      this.props.trivia.map(answerItem => {
        trueAnswer =answerItem.correct_answer;
    });
    return trueAnswer;
    }
    render () {
      var trueAnswer = this.getTruth();
      return trueAnswer;
    }
  }
function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
}
function getAnswerButton (shuffledAnswers, trueAnswer) {
      console.log("getAnswerButton", shuffledAnswers);
      var trueAnswer = trueAnswer;
      console.log("TrueAnswer variable", trueAnswer)
      return shuffledAnswers.map((ans, i) => {
          return <div>
            <button dangerouslySetInnerHTML={{__html: shuffledAnswers[i]}} onClick={(e) => checkAnswer(ans, trueAnswer)}/>
          </div>
      });
      }

  export {checkAnswer, shuffleArray, getAnswerButton};