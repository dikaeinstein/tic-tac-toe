import React from 'react';
import Board from './Board';
import Title from './Title';
import Footer from './Footer';
import Button from './Button';

import calculateWinner from '../lib/calculateWinner';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          row: 0,
          col: 0,
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      hasStarted: false,
    };
  }

  handleClick(row, col) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[col]) {
      return;
    }
    squares[col] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares,
        col,
        row,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  handleStart() {
    if (!this.state.hasStarted) {
      this.setState({ hasStarted: !this.state.hasStarted });
    } else {
      this.setState({
        history: [
          {
            squares: Array(9).fill(null),
            row: 0,
            col: 0,
          },
        ],
        stepNumber: 0,
      });
    }
  }

  render() {
    const { history } = this.state;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    let winnerText;

    if (winner) {
      status = `winner is ${winner.winner}`;
      winnerText = 'winner-text';
    } else if (current.squares.indexOf(null) === -1) {
      status = 'Its a Draw!';
      winnerText = 'winner-text';
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
      winnerText = '';
    }

    return (
      <div>
        <div className="row board-row">
          <div className="col-2 text-center game">
            <div className="title">
              <Title />
            </div>
            <div className="game-board">
              <Board
                squares={current.squares}
                onClick={this.handleClick}
                hasStarted={this.state.hasStarted}
              />
            </div>
            <div className="start-game text-center">
              <Button onClick={this.handleStart} hasStarted={this.state.hasStarted} />
            </div>
          </div>
          <div className="col-1 text-center game-info">
            <div className="player-info">Player1(x)</div>
            <div className="player-info">Player2(0)</div>
            <div className={winnerText}>{status}</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Game;
