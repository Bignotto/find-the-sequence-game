import React from "react";

import Game from "../../game/Game";

import "./style.css";

export default function Buttons() {
  function handleRestart() {
    console.log("START");
    Game.start();
  }

  function handleRanking() {
    console.log("S T O P");
    Game.stop();
  }

  return (
    <div className="button-container">
      <button className="game-button" onClick={handleRestart}>
        Restart
      </button>
      <button className="game-button" onClick={handleRanking}>
        Ranking
      </button>
      <button className="game-button">Share</button>
    </div>
  );
}
