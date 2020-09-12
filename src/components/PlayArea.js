import React from "react";
import Board from "./Board";
import Controls from "./Controls";

class PlayArea extends React.Component {
  constructor(props) {
    super();
    this.state = {
      squares: Array(9).fill(null),
      currentUser: "X",
      player1: "X",
      player2: "O",
      finished: false,
      winner: null,
      players: 1
    };
  }

  handleClick(index) {
    const squares = this.state.squares;
    squares[index] = this.state.currentUser;
    let currentUser;
    if (this.state.currentUser === "X") currentUser = "O"
    else currentUser = "X";
    const [winner, finished,] = this.checkWinner(squares);
    this.setState({ winner: winner, finished: finished, squares: squares, currentUser: currentUser }, () => {
      if (this.state.players === 1 && currentUser === this.state.player2 && !finished) {
        this.findBestMove(squares)
      }
    });
  }

  findEmptyCells = (board) => {
    let emptyIndices = []
    for (var i = 0; i < 9; i++) {
      if (board[i] === null) {
        emptyIndices.push(i);
      }
    }
    return emptyIndices;
  }

  findBoardValue = (board) => {
    const [, , playerWon] = this.checkWinner(board);
    if (playerWon === this.state.currentUser) return 1;
    else if (playerWon === null) return 0;
    else return -1;
  }

  minimax = (board, depth, isMax, player) => {
    let boardValue = this.findBoardValue(board);
    if (boardValue === 1 || boardValue === -1) return boardValue - depth;
    if (this.checkIfBoardIsFull(board)) return 0;

    let boardCopy = board.slice();
    let bestVal = isMax ? -1000 : 1000;
    let emptyIndices = this.findEmptyCells(boardCopy)

    player = player === "X" ? "O" : "X";
    emptyIndices.forEach(emptyIndex => {
      boardCopy[emptyIndex] = player;
      if (isMax) bestVal = Math.max(bestVal, this.minimax(boardCopy, depth + 1, !isMax, player))
      else bestVal = Math.min(bestVal, this.minimax(boardCopy, depth + 1, !isMax, player))
      boardCopy[emptyIndex] = null
    })
    return bestVal;
  }

  findBestMove = (board) => {
    let emptyIndices = this.findEmptyCells(board)
    let bestValue = -1000;
    let bestMove;
    emptyIndices.forEach(emptyIndex => {
      board[emptyIndex] = this.state.currentUser
      var moveValue = this.minimax(board, 0, false, this.state.currentUser)
      board[emptyIndex] = null;

      if (moveValue > bestValue) {
        bestValue = moveValue;
        bestMove = emptyIndex;
      }
    })
    this.handleClick(bestMove)
  }

  resetBoard = () => {
    const squares = Array(9).fill(null);
    this.setState({
      squares: squares,
      currentUser: "X",
      finished: false,
      winner: null
    }, () => {
      if (this.state.players === 1 && this.state.player2 === "X")
        this.findBestMove(squares)
    });
  };

  switchPlayer = () => {
    const squares = Array(9).fill(null);
    let player1 = this.state.player1 === "X" ? "O" : "X";
    let player2 = this.state.player2 === "X" ? "O" : "X";
    this.setState({
      squares: squares,
      currentUser: "X",
      player1: player1,
      player2: player2,
      finished: false,
      winner: null
    }, () => {
      if (this.state.players === 1 && player2 === "X")
        this.findBestMove(squares)
    });
  }

  checkSquaresAreEqual = (squares, i, j, k) => {
    if (
      squares[i] === squares[j] &&
      squares[j] === squares[k] &&
      squares[i] !== null
    )
      return true;
  }

  checkIfBoardIsFull = (board) => {
    for (var i = 0; i < 9; i++) {
      if (board[i] === null) {
        return false;
      }
    }
    return true;
  }

  checkWinner = squares => {
    if (this.checkSquaresAreEqual(squares, 0, 1, 2) || this.checkSquaresAreEqual(squares, 0, 3, 6) || this.checkSquaresAreEqual(squares, 0, 4, 8))
      return [this.state.player1 === squares[0] ? "Player 1" : "Player 2", true, squares[0]];
    if (this.checkSquaresAreEqual(squares, 3, 4, 5))
      return [this.state.player1 === squares[3] ? "Player 1" : "Player 2", true, squares[3]];
    if (this.checkSquaresAreEqual(squares, 6, 7, 8))
      return [this.state.player1 === squares[6] ? "Player 1" : "Player 2", true, squares[6]];

    if (this.checkSquaresAreEqual(squares, 1, 4, 7))
      return [this.state.player1 === squares[1] ? "Player 1" : "Player 2", true, squares[1]];
    if (this.checkSquaresAreEqual(squares, 2, 5, 8) || this.checkSquaresAreEqual(squares, 2, 4, 6))
      return [this.state.player1 === squares[2] ? "Player 1" : "Player 2", true, squares[2]];


    if (this.checkIfBoardIsFull(squares)) return [null, true, null];
    else return [null, false, null]
  };

  getResult = () => {
    if (this.state.finished) {
      if (this.state.winner !== null)
        return "Winner is " + this.state.winner;
      else return "Game is drawed"
    }
  };

  changePlayerNumber = () => {
    this.setState({ players: (this.state.players % 2) + 1 })
  }

  render() {
    const winner = this.getResult()
    return (
      <div className="play-area">
        <label className="winner">{winner}</label>
        <Board
          squares={this.state.squares}
          clickHandle={index => this.handleClick(index)}
          buttonStatus={this.state.finished}
        />
        <Controls
          resetBoard={this.resetBoard}
          togglePlayers={this.changePlayerNumber}
          players={this.state.players}
          switchPlayer={this.switchPlayer}
          player1={this.state.player1}
          player2={this.state.player2}
        />
      </div>
    );
  }
}

export default PlayArea;
