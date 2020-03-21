import React from "react";
import "./App.css";
import PlayArea from "./PlayArea";

function App() {
  return (
    <div className="container">
      <div className="heading">
        <h1>Tic Tac Toe</h1>
        <hr />
      </div>
      <PlayArea />
    </div>
  );
}

export default App;
