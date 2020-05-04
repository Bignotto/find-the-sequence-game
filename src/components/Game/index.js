import React, { useEffect, useState } from "react";

import "./index.css";

const SIZE = 5;

export default class GameGrid extends React.Component {
  constructor(props) {
    super(props);
    this.updateDate = this.updateDate.bind(this);

    this.state = {
      timeElapsed: 0,
      date: Date.now(),
    };
  }

  updateDate() {
    const delta = Date.now() - this.state.date;
    this.setState({
      timeElapsed: this.state.timeElapsed + delta,
      date: Date.now(),
    });
  }

  handleRestart() {
    console.log("START");
    this.interval = setInterval(this.updateDate, 1000);
  }

  handleRanking() {
    console.log("S T O P");
    clearInterval(this.interval);
  }

  handleClick(message) {
    alert(message);
  }

  newGame(size) {
    let numbers = [];
    let numberObj;

    const max = size * size;

    for (let i = 0; i < max; i++) {
      numbers.push(i + 1);
    }
    return numbers;
  }

  render() {
    return (
      <>
        <div className="time-container">
          <p>{this.state.timeElapsed}</p>
        </div>
        <div className="game-container">
          <ul>
            {this.newGame(SIZE).map((num) => (
              <li key={num}>
                <div className="game-cell">
                  <button
                    type="button"
                    className="button-text"
                    onClick={() => this.handleClick(`clicou no ${num}`)}
                  >
                    {num}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="button-container">
          <button className="game-button" onClick={() => this.handleRestart()}>
            Restart
          </button>
          <button className="game-button" onClick={() => this.handleRanking()}>
            Ranking
          </button>
          <button className="game-button">Share</button>
        </div>
      </>
    );
  }
}
