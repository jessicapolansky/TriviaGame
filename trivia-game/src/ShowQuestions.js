import React, { Component } from "react";

export class ShowQuestions extends Component {
	parseQuestionData () {
		const questionList =
          this.props.trivia.map(questionItem => {
			  return (
			  <div>
          			<p dangerouslySetInnerHTML={{__html: questionItem.question}} />
          			<div>
                  
          			</div>
          		</div>
          	);
          });
		return questionList;
	}
	render () {
		var questions = [];
		questions = this.parseQuestionData();
		return (
			<div>
				<br />
				<h5>{questions}</h5>
			</div>
		);
	}
}
  