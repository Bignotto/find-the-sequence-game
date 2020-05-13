import React, { useState, useEffect } from "react";

import "./index.css";

export default function Buttons(props) {
  return (
    <div className="button-container">
      <button className="game-button" onClick={() => props.stopAction()}>
        Stop
      </button>
      <button className="game-button" onClick={() => props.newAction()}>
        New Game
      </button>
      <button className="game-button">Share</button>
    </div>
  );
}
