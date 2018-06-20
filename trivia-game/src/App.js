import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { ShowQuestions } from './ShowQuestions'

class App extends Component {
  constructor(props) {
    super(props);    
    this.state = { questions: [] };
    this.get_questions();
  }
  
  get_questions(event) {
    axios.get(
      'http://localhost:8081/api/get-questions'
    )
     .then((response) => {
      console.log(response.data.results); 
      this.setState({
         questions: response.data.results
        });
     })
     .catch(function (error) {
       alert('Error retrieving trivia questions!');
       console.log("error: ", error);
     });
  }
  
  render() {
    return (
      <div className="App">
        <h1>Trivia Game Night!</h1>
        <button onClick={e => this.get_questions(e)}>Get questions</button>
        <ShowQuestions trivia={this.state.questions} />
      </div>
    );
  }
}

export default App;
