import React from "react";
import Time from "./time";
import Buttons from "./buttons";

import "./index.css";

const SIZE = 5;

export default class GameGrid extends React.Component {
  constructor(props) {
    super(props);
    this.updateTime = this.updateTime.bind(this);

    this.clicked = [];
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

  stopGame() {
    console.log("S T O P");
    clearInterval(this.interval);
    this.interval = null;
    this.setState({
      isRunning: false,
    });
  }

  win() {
    console.log("WIN!!");
    clearInterval(this.interval);
    this.interval = null;
    this.setState({
      isRunning: false,
    });
  }

  handleClick(numberClicked) {
    console.log("Click!");
    console.log(this.clicked.length);

    //if time elapsed is greater than zero, there should be a game running
    if (this.state.timeElapsed > 0) {
      // then check if the clicked number is the right one
      if (
        this.clicked.length === numberClicked - 1 &&
        this.state.isRunning === true
      )
        // add it to the array of clicked numbers
        this.clicked.push(numberClicked);

      // check if the 50th number was clicked
      if (this.clicked.length === 50) {
        this.win();
      }
      //console.log(numberClicked, this.clicked, this.clicked.length);

      return;
    }

    //when no game is running
    if (!this.interval && this.clicked.length === numberClicked - 1) {
      console.log("GameStart!");
      this.setState({
        timeElapsed: 0,
        date: Date.now(),
        isRunning: true,
      });
      this.interval = setInterval(this.updateTime, 10);
      this.clicked.push(numberClicked);
      return;
    }
  }

  handleNewGame() {
    this.clicked = [];
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
    numbers2.push(50);
    return {
      first: this.shuffle(numbers1),
      second: numbers2,
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

  propClick(num) {
    console.log("Clicked!!");
    console.log(num);
  }

  render() {
    return (
      <>
        <Time
          className="time-container"
          id="timer"
          timeElapsed={this.state.timeElapsed}
        />
        <div className="game-container">
          <div className="game-grid">
            <ul>
              {this.state.gameNumbers.first.map((num) => (
                <li key={num}>
                  <div className="game-cell">
                    <button
                      type="button"
                      className={
                        !this.clicked.includes(num)
                          ? "button-text"
                          : this.clicked.length >= 25 &&
                            this.clicked.includes(
                              this.state.gameNumbers.second[num]
                            )
                          ? "button-text-clicked-clicked"
                          : "button-text-clicked"
                      }
                      onClick={() => {
                        !this.clicked.includes(num)
                          ? this.handleClick(num)
                          : this.handleClick(
                              this.state.gameNumbers.second[num]
                            );
                      }}
                    >
                      {!this.clicked.includes(num)
                        ? num
                        : this.state.gameNumbers.second[num]}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Buttons
          stopAction={() => this.stopGame()}
          newAction={() => this.handleNewGame()}
        />
      </>
    );
  }
}
