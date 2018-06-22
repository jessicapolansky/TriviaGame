import React, { Component } from 'react';

function checkAnswer (button) {
    if (button == button) {
        this.setState({message: "Good Job!"}); 
    }
    else {
        this.setState({message: "WRONG"})
    }}

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
        return (
            <div>
            <button dangerouslySetInnerHTML={{__html: shuffledAnswers[0]}} onClick={checkAnswer}/>
            <button dangerouslySetInnerHTML={{__html: shuffledAnswers[1] }}/>
            <button dangerouslySetInnerHTML={{__html: shuffledAnswers[2] }}/>
            <button dangerouslySetInnerHTML={{__html: shuffledAnswers[3] }}/>
            </div>
        )}
        // function getTruth () {
        //     this.props.trivia.map(answerItem => {
        //         var trueAnswer = answerItem.correct_answer            
        //         return (trueAnswer)
        //     })}

  export {checkAnswer, shuffleArray, getAnswerButton};