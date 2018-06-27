import React, { Component } from 'react';

export class Scoreboard extends React.Component {
    constructor (props) {
        super(props);
        this.state = {score: 0};
    }
    changeScore (props) {
        this.state.score = this.state.score + props;
        return this.state.score
    }
    render () {
        return(
            <div>
                <br />
            <p>Player One Score: {this.state.score}</p>
                </div>
        )
    }
}