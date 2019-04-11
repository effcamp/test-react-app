import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  onClick() {
    this.square.animate(
      [{ transform: "rotate(360deg)" }, { transform: "rotate(0deg)" }],
      {
        duration: 5000,
        iterations: Infinity
      }
    );
  }

  render() {
    return (
      <div className="app">
        <h1>Welcome to my amazing REACT page.</h1>
        <div
          className="square"
          onClick={this.onClick.bind(this)}
          ref={i => {
            this.square = i;
          }}
        />
      </div>
    );
  }
}

export default App;
