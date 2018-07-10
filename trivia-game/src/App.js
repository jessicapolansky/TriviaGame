import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { ShowQuestions } from "./ShowQuestions";
import { Answers } from "./Answers";
import Scoreboard  from "./scoreboard";

class App extends Component {
	constructor(props) {
		super(props);    
		this.state = { questions: [], answers: [], statescore: 0 };
		this.get_questions();
		this.myCallback();
	}
  
	get_questions() {
		axios.get(
			"http://localhost:8081/api/get-questions"
		)
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
	myCallback (newScore) {
		if (!newScore) {
			return this.state.statescore;
		} else {
			this.setState({statescore: this.state.statescore + newScore});
		}
		console.log("myCallback score", this.state.statescore);
		return this.state.statescore;
	}
	render() {
		console.log("App score", this.myCallback.statescore);
		var statescore = this.myCallback();
		return (
			<div className="App">
				<h1>Trivia Game Night!</h1>
				<ShowQuestions trivia={this.state.questions} />
				<Answers 
					trivia={this.state.questions} 
					statescore = {this.state.statescore}
					click = {this.myCallback}/>
				<Scoreboard statescore = {this.state.statescore}/>
				<button className="btn btn-info" onClick={e => this.get_questions(e)}>Get a new question</button>
			</div>
		);
	}
}

export default App;
