import React from "react";
import "./App.css";
import PlayArea from "./PlayArea";



class PlayerMode extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selected: false,
        mode: null
      };
    }

    returnMode = () => {
        return (
            <div className="mode-root">
            <div className="mode-button" onClick = {()=>{
                this.setState({
                    mode: "1p",
                    selected: true
                })
                console.log("clicked", this.state.selected)
            }}> 
                Single Player
            </div>
            <div className="mode-button" onClick = {()=>{
                this.setState({
                    mode: "2p",
                    selected: true
                })
                console.log("clicked", this.state.selected)
            }}> 
                Two Player
            </div> 
            </div>
        )
    } 
    

    resetMode = ()=>{
        this.setState({
            mode: null,
            selected: false
        })
    }

    render() {

        return (
            <div className="container">
                <div className="heading">
                    <h1>Tic Tac Toe</h1>
                    <hr />
                </div>
                    {!this.state.selected && this.returnMode()}
                    {this.state.selected && <PlayArea mode={this.state.mode} reset = {() => {this.resetMode()}}/>}
            </div>
        );
    }


  }
  
  export default PlayerMode;
  