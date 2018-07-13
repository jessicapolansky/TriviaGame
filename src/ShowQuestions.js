import React, { Component } from "react";

export class ShowQuestions extends Component {
	parseQuestionData () {
		const questionList =
          this.props.trivia.map((questionItem,index) => {
			  return (
			  <div>
					  <p dangerouslySetInnerHTML={{__html: questionItem.question}}
					  key={index} />
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
  