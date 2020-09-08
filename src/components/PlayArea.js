import React from "react";
import Board from "./Board";
import Controls from "./Controls";

class PlayArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      currentUser: "X",
      player1: "X",
      player2: "O",
      finished: false,
      winner: null,
      players: 2
    };
  }

  handleClick(index) {
    console.log("Index: " + index);
    const squares = this.state.squares;
    squares[index] = this.state.currentUser;
    this.setState({ squares: squares });
    if (this.state.currentUser === "X") this.setState({ currentUser: "O" });
    else this.setState({ currentUser: "X" });
    this.checkWinner(squares);
  }

  resetBoard = () => {
    const squares = Array(9).fill(null);
    this.setState({
      squares: squares,
      currentUser: "X",
      finished: false,
      winner: null
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

  checkWinner = squares => {
    if (this.checkSquaresAreEqual(squares, 0, 1, 2))
      this.setState({ winner: this.state.player1 === squares[0] ? "Player 1" : "Player 2", finished: true });
    if (this.checkSquaresAreEqual(squares, 3, 4, 5))
      this.setState({ winner: this.state.player1 === squares[3] ? "Player 1" : "Player 2", finished: true });
    if (this.checkSquaresAreEqual(squares, 6, 7, 8))
      this.setState({ winner: this.state.player1 === squares[6] ? "Player 1" : "Player 2", finished: true });

    if (this.checkSquaresAreEqual(squares, 0, 3, 6))
      this.setState({ winner: this.state.player1 === squares[0] ? "Player 1" : "Player 2", finished: true });
    if (this.checkSquaresAreEqual(squares, 1, 4, 7))
      this.setState({ winner: this.state.player1 === squares[1] ? "Player 1" : "Player 2", finished: true });
    if (this.checkSquaresAreEqual(squares, 2, 5, 8))
      this.setState({ winner: this.state.player1 === squares[2] ? "Player 1" : "Player 2", finished: true });

    if (this.checkSquaresAreEqual(squares, 2, 4, 6))
      this.setState({ winner: this.state.player1 === squares[2] ? "Player 1" : "Player 2", finished: true });
    if (this.checkSquaresAreEqual(squares, 0, 4, 8))
      this.setState({ winner: this.state.player1 === squares[0] ? "Player 1" : "Player 2", finished: true });

    var status = false;
    for (var i = 0; i < 9; i++) {
      if (squares[i] === null) {
        status = true;
        break;
      }
    }
    if (!status) this.setState({ winner: null, finished: true });
  };

  getResult = () => {
    if (this.state.finished) {
      if (this.state.winner !== null)
        return <p>Winner is: {this.state.winner}</p>;
      else return <p>Game is draw!! Play again</p>;
    } else {
      return <p></p>;
    }
  };

  changePlayerNumber = () => {
    // this.setState({ players: (this.state.players % 2) + 1 })
  }

  render() {
    const winner = this.state.winner !== null ? "Winner is " + this.state.winner : ""
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
