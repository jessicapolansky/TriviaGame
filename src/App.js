import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { ShowQuestions } from "./ShowQuestions";
import { Answers } from "./Answers";

class App extends Component {
	constructor(props) {
		super(props);    
		this.state = { questions: [], answers: [], showButtons: true };
		this.get_questions();
	}
	toggleAnswers() {
		this.setState({
			showButtons: true});
	}
	hideAnswers() {
		this.setState({
			showButtons: false});
	}
	get_questions () {
		let apiURL = "/api/get-questions";
		if (window.location.host === "localhost:3000") {
			apiURL = "http://localhost:8081" + apiURL;
		}
		console.log("apiURL", apiURL);
		axios.get(apiURL)
			.then((response) => {
				console.log("get questions", response.data.results); 
				this.setState({
					questions: response.data.results
				});
			})
			.catch(function (error) {
				alert("Error retrieving trivia questions!");
				console.log("error: ", error);
			});
	}
	render() {
		// let answers = (<div><p>Click the button to begin!</p>
		// 	<Answers />
		// </div>);
		// if (this.state.showButtons) {
		// 	answers = <Answers
		// 		trivia={this.state.questions} />;
		// }
		return (
			<div className="App">
				<h1>Trivia Game Night!</h1>
				<ShowQuestions trivia={this.state.questions} />
				{/* <div onClick={(e) => this.hideAnswers()}>{answers }</div> */}
				<Answers
					trivia={this.state.questions} onClick/>
				<button className="btn btn-info" onClick={e => {this.get_questions(e); this.toggleAnswers();}}>Get a new question</button>
			</div>
		);
	}
}

export default App;
