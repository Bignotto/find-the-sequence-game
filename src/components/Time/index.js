import React from "react";

import "./style.css";

export default class Time extends React.Component {
  constructor(props) {
    super(props);
    this.updateDate = this.updateDate.bind(this);

    this.state = {
      timeElapsed: 0,
      date: Date.now(),
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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

  render() {
    return (
      <>
        <div className="time-container">
          <p>{this.state.timeElapsed}</p>
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
