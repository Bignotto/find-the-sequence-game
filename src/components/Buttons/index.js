import React from "react";
import "./style.css";

export default function Buttons() {
  return (
    <div className="button-container">
      <button className="game-button">Restart</button>
      <button className="game-button">Ranking</button>
      <button className="game-button">Share</button>
    </div>
  );
}
