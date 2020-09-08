import React from "react";
import "./App.css";
import Header from "./components/Header";
import PlayArea from "./components/PlayArea";

function App() {
    return (
        <div className="container" >
            <Header />
            <PlayArea />
        </div>
    );
}
export default App;