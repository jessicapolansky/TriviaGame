import React, { Component } from 'react';

export class ShowQuestions extends Component {
    parseQuestionData () {
      const questionList =
          this.props.trivia.map(questionItem => {
            console.log('QuestionItem', questionItem)
            return (
              <div>
                <p dangerouslySetInnerHTML={{__html: questionItem.question}} />
                <div>
                  
                </div>
              </div>
            )
          })
      return questionList
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
  