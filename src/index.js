import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import './style.css';

class Game extends Component {
  state = {
    height: 10,
    width: 10,
    mines: 10
  };

    render() {
        const { height, width, mines } = this.state;
        return (
            <div>
                <div className="game">
                    <Board height={height} width={width} mines={mines} />
                </div>
                <div className="rules">
                    <h4>Rules of the game:</h4>
                    <ul>
                        <li>
                            
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById("root"));