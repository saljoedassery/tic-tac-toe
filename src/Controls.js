import React from "react";
import switchPlayer from "../src/images/change.png";
import restartGame from "../src/images/refresh.png";

class Controls extends React.Component {
  render() {
    return (
      <div className="controls">
        <div className="payer-one">
          <p> Player 1(X) </p>
        </div>
        <div className="change-player">
          <img src={switchPlayer} alt="switch-player-icon"/>
        </div>
        <div className="payer-two">
          <p> Computer(O) </p>
        </div>
        <div className="payer-number">
    <button className="player-number-button" onClick={this.props.togglePlayers}>{this.props.players}</button>
        </div>
        <div className="reset">
          <img src={restartGame} alt="reset icon" onClick={this.props.resetBoard}/>
        </div>
      </div>
    );
  }
}
export default Controls;
