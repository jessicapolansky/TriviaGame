import React, { Component } from 'react';

function checkAnswer (props) {
    console.log("Props: ", props)
    if (props.status === "correct") {
        return (
          <div>
            <h6>Correct!</h6>
          </div>
        );
      } else if (props.status === 'incorrect') {
        return (
          <div>
            <h6>Incorrect!</h6>
          </div>
        );
      }
    
      return <div/>;
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
function getAnswerButton (shuffledAnswers) {
      console.log("getAnswerButton", shuffledAnswers);
      var answerButtons = []
      for (var i = 0; i < shuffledAnswers.length; i++) {
        answerButtons.push (
            <div>
            <button dangerouslySetInnerHTML={{__html: shuffledAnswers[i]}} onClick={checkAnswer(shuffledAnswers[i])}/>
            </div>
        )}
        return answerButtons;
        // function getTruth () {
        //     this.props.trivia.map(answerItem => {
        //         var trueAnswer = answerItem.correct_answer            
        //         return (trueAnswer)
        //     })}
      }
  export {checkAnswer, shuffleArray, getAnswerButton};