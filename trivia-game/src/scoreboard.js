import React, { Component } from 'react';

// function getScore (props) {
//     var score = this.props.score;
//     return score
// }

export class Scoreboard extends React.Component {
    render () {
        return(
            <div>
                <br />
            <p>Player One Score: {this.props.statescore}</p>
                </div>
        )
    }
}
// export { changeScore };