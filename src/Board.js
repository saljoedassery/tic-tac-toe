import React from "react";
import Square from "./Square";

class Board extends React.Component {
  render() {

    return (
      <div className="board">
        <Square
          value={this.props.squares[0]}
          onClick={() => this.props.clickHandle(0)}
          buttonStatus={this.props.buttonStatus}
        />
        <Square
          value={this.props.squares[1]}
          onClick={() => this.props.clickHandle(1)}
          buttonStatus={this.props.buttonStatus}
        />
        <Square
          value={this.props.squares[2]}
          onClick={() => this.props.clickHandle(2)}
          buttonStatus={this.props.buttonStatus}
        />
        <Square
          value={this.props.squares[3]}
          onClick={() => this.props.clickHandle(3)}
          buttonStatus={this.props.buttonStatus}
        />
        <Square
          value={this.props.squares[4]}
          onClick={() => this.props.clickHandle(4)}
          buttonStatus={this.props.buttonStatus}
        />
        <Square
          value={this.props.squares[5]}
          onClick={() => this.props.clickHandle(5)}
          buttonStatus={this.props.buttonStatus}
        />
        <Square
          value={this.props.squares[6]}
          onClick={() => this.props.clickHandle(6)}
          buttonStatus={this.props.buttonStatus}
        />
        <Square
          value={this.props.squares[7]}
          onClick={() => this.props.clickHandle(7)}
          buttonStatus={this.props.buttonStatus}
        />
        <Square
          value={this.props.squares[8]}
          onClick={() => this.props.clickHandle(8)}
          buttonStatus={this.props.buttonStatus}
        />
      </div>
    );
  }
}

export default Board;
