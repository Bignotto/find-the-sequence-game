import React, { useEffect, useState } from "react";

import "./index.css";

const SIZE = 5;

export default function GameGrid() {
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(0);

  let timer;

  function newGame(size) {
    let numbers = [];
    let numberObj;

    const max = size * size;

    for (let i = 0; i < max; i++) {
      numbers.push(i + 1);
    }
    return numbers;
  }

  useEffect(() => {
    console.log("time changed", time);
  }, []);

  function start() {
    setStartTime(Date.now());
    timer = setInterval(update(), 1000);
  }

  function stop() {
    clearInterval(timer);
    setTime(0);
  }

  function update() {
    const delta = Date.now() - startTime;
    setTime(time + delta);
    console.log(time);
  }

  function handleClick(texto) {
    alert(texto);
  }

  function handleRestart() {
    console.log("START");
    start();
  }

  function handleRanking() {
    console.log("S T O P");
    stop();
  }

  return (
    <>
      <div className="time-container">
        <p>{time}</p>
      </div>
      <div className="game-container">
        <ul>
          {newGame(SIZE).map((num) => (
            <li key={num}>
              <div className="game-cell">
                <button
                  type="button"
                  className="button-text"
                  onClick={() => handleClick(`clicou no ${num}`)}
                >
                  {num}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="button-container">
        <button className="game-button" onClick={handleRestart}>
          Restart
        </button>
        <button className="game-button" onClick={handleRanking}>
          Ranking
        </button>
        <button className="game-button">Share</button>
      </div>
    </>
  );
}
