import React from "react";
import Board from "./Board";
import Controls from "./Controls";

class PlayArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      currentUser: "X",
      finished: false,
      winner: null,
      players: 1
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

  checkWinner = squares => {
    if (
      squares[0] === squares[1] &&
      squares[1] === squares[2] &&
      squares[0] !== null
    )
      this.setState({ winner: squares[0], finished: true });
    if (
      squares[3] === squares[4] &&
      squares[4] === squares[5] &&
      squares[3] !== null
    )
      this.setState({ winner: squares[3], finished: true });

    if (
      squares[6] === squares[7] &&
      squares[7] === squares[8] &&
      squares[6] !== null
    )
      this.setState({ winner: squares[6], finished: true });

    if (
      squares[0] === squares[3] &&
      squares[3] === squares[6] &&
      squares[0] !== null
    )
      this.setState({ winner: squares[0], finished: true });

    if (
      squares[1] === squares[4] &&
      squares[4] === squares[7] &&
      squares[1] !== null
    )
      this.setState({ winner: squares[1], finished: true });

    if (
      squares[2] === squares[5] &&
      squares[5] === squares[8] &&
      squares[2] !== null
    )
      this.setState({ winner: squares[2], finished: true });

    if (
      squares[0] === squares[4] &&
      squares[4] === squares[8] &&
      squares[0] !== null
    )
      this.setState({ winner: squares[0], finished: true });

    if (
      squares[2] === squares[4] &&
      squares[4] === squares[6] &&
      squares[2] !== null
    )
      this.setState({ winner: squares[2], finished: true });

    var status = false;
    var i;
    for (i = 0; i < 9; i++) {
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
    this.setState({players:(this.state.players % 2) + 1})
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
        <Controls resetBoard = {this.resetBoard} togglePlayers = {this.changePlayerNumber} players = {this.state.players}/>
      </div>
    );
  }
}

export default PlayArea;
