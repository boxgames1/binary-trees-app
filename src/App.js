import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DLListApp from "./components/DLListApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          className="repos"
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            border: 0
          }}
        >
          <a href="https://github.com/boxgames1/hash-tables-app">
            <button
              className="btn btn-default"
              style={{
                "margin-right": 10
              }}
            >
              Hash Tables
            </button>
          </a>
          <a href="https://github.com/boxgames1/double-linked-list-app">
            <button
              className="btn btn-default"
              style={{
                "margin-right": 10
              }}
            >
              Double Linked Lists
            </button>
          </a>
          <a href="https://github.com/boxgames1/binary-trees-app">
            <button
              className="btn btn-default"
              style={{
                "margin-right": 10
              }}
            >
              Binary Trees
            </button>
          </a>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/boxgames1/binary-trees-app"
        >
          <img
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              border: 0
            }}
            src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"
            alt="Fork me on GitHub"
          />
        </a>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Binary Trees React App </h1>
        </header>
        <DLListApp />
      </div>
    );
  }
}

export default App;
