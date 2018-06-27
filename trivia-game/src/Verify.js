import React, { Component } from 'react';
import Scoreboard from './scoreboard';

function checkAnswer (ans, correct) {
  if (ans === correct) {
      console.log("YES!!");
      alert("You got it right!!");
  } else {
        console.log("No!!");
        alert("You got it wrong!!");
      };
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
function getAnswerButton (shuffledAnswers, trueAnswer, message) {
      console.log("getAnswerButton", shuffledAnswers);
      var trueAnswer = trueAnswer;
      console.log("TrueAnswer variable", trueAnswer);
      console.log(message);
      return shuffledAnswers.map((ans, i) => {
          return <span>
            <button dangerouslySetInnerHTML={{__html: shuffledAnswers[i]}} 
            class="btn btn-secondary answers" onClick={(e) => checkAnswer(ans, trueAnswer, message)} />
</span>
      });
      }

  export {checkAnswer, shuffleArray, getAnswerButton};