import React, { Component } from 'react';

export class ShowQuestions extends Component {
    parseQuestionData () {
      const questionArr =
          this.props.trivia.map(questionItem => {
            console.log('QuestionItem', questionItem)
            return (
              <div className="DQ-base">
                <p dangerouslySetInnerHTML={{__html: questionItem.question}} />
                <div>
                  
                </div>
              </div>
            )
          })
      return questionArr
    }
    render () {
      var questions = []
      questions = this.parseQuestionData()
      return (
        <div>
          <h2>Some Trivia</h2>
          <p>{questions}</p>
        </div>
      )
    }
  }
  