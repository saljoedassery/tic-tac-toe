import React from "react";
import Square from "./Square";

class Board extends React.Component {
  render() {

    var boxes = [];
    for (let i = 0; i < 9; i++) {
      boxes.push(
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.clickHandle(i)}
          buttonStatus={this.props.buttonStatus || this.props.squares[i] !== null}
          key={i}
        />
      )
    }

    return (
      <div className="board">
        {boxes}
      </div>
    );
  }
}

export default Board;
