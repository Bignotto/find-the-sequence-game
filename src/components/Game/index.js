import React, { useState, useEffect } from "react";

import Time from "./time";
import Grid from "./grid";
import Buttons from "./buttons";

import "./index.css";

const SIZE = 5;

export default function GameGrid() {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [gameNumbers, setGameNumbers] = useState({
    first: [],
    second: [],
  });

  const [isRunning, setIsRunning] = useState(false);
  const [date, setDate] = useState(Date.now());

  let interval;

  useEffect(() => {
    handleNewGame();
  }, []);

  function updateTime() {
    const delta = Date.now() - date;

    setTimeElapsed(timeElapsed + delta);
    setDate(Date.now());
  }

  function stopGame() {
    console.log("S T O P");
    clearInterval(interval);
    interval = null;
    setIsRunning(false);
  }

  function win() {
    console.log("WIN!!");
    clearInterval(interval);
    interval = null;
    setIsRunning(false);
  }

  function handleClick(numberClicked) {
    console.log("Click!");
    // console.log(this.state);

    //if time elapsed is greater than zero, there should be a game running
    if (timeElapsed > 0) {
      // then check if the clicked number is the right one
      if (clicked.length === numberClicked - 1 && isRunning === true)
        // add it to the array of clicked numbers
        clicked.push(numberClicked);

      // check if the 50th number was clicked
      if (clicked.length === 50) {
        win();
      }
      //console.log(numberClicked, this.clicked, this.clicked.length);

      return;
    }

    //when no game is running
    if (!interval && clicked.length === numberClicked - 1) {
      console.log("GameStart!");
      setTimeElapsed(0);
      setDate(Date.now());
      setIsRunning(true);
      interval = setInterval(updateTime, 10);
      clicked.push(numberClicked);
      return;
    }
  }

  function handleNewGame() {
    setClicked([]);
    setTimeElapsed(0);
    setGameNumbers(newGame(SIZE));
  }

  function newGame(size) {
    let numbers1 = [];
    let numbers2 = [];

    const max = size * size;

    for (let i = 0; i < max; i++) {
      numbers1.push(1 + i);
      numbers2.push(25 + i);
    }
    numbers2.push(50);
    return {
      first: shuffle(numbers1),
      second: shuffle(numbers2),
    };
  }

  function shuffle(array) {
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

  function propClick(num) {
    console.log("Clicked!!");
    console.log(num);
  }

  return (
    <>
      <Time className="time-container" id="timer" timeElapsed={timeElapsed} />
      <Grid clickAction={handleClick} numbers={gameNumbers} clicked={clicked} />
      <Buttons
        stopAction={() => stopGame()}
        newAction={() => handleNewGame()}
      />
    </>
  );
}
