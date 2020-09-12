import React from "react";
import switchPlayer from "../images/change.png";
import restartGame from "../images/refresh.png";

class Controls extends React.Component {
  render() {
    var secondPlayer = this.props.players === 1 ? "Computer" : "Player 2"
    return (
      <div className="controls">
        <div className="payer-one">
          <p> Player 1({this.props.player1}) </p>
        </div>
        <div className="change-player">
          <img src={switchPlayer} alt="switch-player-icon" onClick={this.props.switchPlayer}/>
        </div>
        <div className="payer-two">
          <p> {secondPlayer}({this.props.player2}) </p>
        </div>
        <div className="payer-number">
          <button className="player-number-button" onClick={this.props.togglePlayers}>{this.props.players}</button>
        </div>
        <div className="reset">
          <img src={restartGame} alt="reset icon" onClick={this.props.resetBoard} />
        </div>
      </div>
    );
  }
}
export default Controls;
