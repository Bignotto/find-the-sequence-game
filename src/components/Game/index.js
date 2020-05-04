import React from "react";

import "./index.css";

const SIZE = 5;

const leftPad = (width, n) => {
  if ((n + "").length > width) {
    return n;
  }
  const padding = new Array(width).join("0");
  return (padding + n).slice(-width);
};

export default class GameGrid extends React.Component {
  constructor(props) {
    super(props);
    this.updateTime = this.updateTime.bind(this);

    this.state = {
      timeElapsed: 0,
      isRunning: false,
      gameNumbers: this.newGame(SIZE),
      date: Date.now(),
    };
  }

  updateTime() {
    const delta = Date.now() - this.state.date;
    this.setState({
      timeElapsed: this.state.timeElapsed + delta,
      date: Date.now(),
    });
  }

  getUnits(timeElapsed) {
    const seconds = timeElapsed / 1000;
    return {
      min: Math.floor(seconds / 60).toString(),
      sec: Math.floor(seconds % 60).toString(),
      msec: (seconds % 1).toFixed(3).substring(2),
    };
  }

  stopGame() {
    console.log("S T O P");
    clearInterval(this.interval);
    this.interval = null;
    this.setState({
      isRunning: false,
    });
  }

  handleClick() {
    console.log("Click!");

    if (this.state.timeElapsed > 0) {
      return;
    }
    if (!this.interval) {
      console.log("GameStart!");
      this.setState({
        timeElapsed: 0,
        date: Date.now(),
        isRunning: true,
      });
      this.interval = setInterval(this.updateTime, 10);
      return;
    }
  }

  handleNewGame() {
    this.setState({
      timeElapsed: 0,
      gameNumbers: this.newGame(SIZE),
    });
  }

  newGame(size) {
    let numbers1 = [];
    let numbers2 = [];

    const max = size * size;

    for (let i = 0; i < max; i++) {
      numbers1.push(1 + i);
      numbers2.push(25 + i);
    }
    return {
      first: this.shuffle(numbers1),
      second: this.shuffle(numbers2),
    };
  }

  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  render() {
    const units = this.getUnits(this.state.timeElapsed);
    return (
      <>
        <div className="time-container">
          <p>
            {leftPad(2, units.min)}:{leftPad(2, units.sec)}.{units.msec}
          </p>
        </div>
        <div className="game-container">
          <ul>
            {this.state.gameNumbers.first.map((num) => (
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
          <button className="game-button" onClick={() => this.stopGame()}>
            Stop
          </button>
          <button className="game-button" onClick={() => this.handleNewGame()}>
            New Game
          </button>
          <button className="game-button">Share</button>
        </div>
      </>
    );
  }
}
