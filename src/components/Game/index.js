import React from "react";

import Game from "../../game/Game";

import "./index.css";

const SIZE = 5;

export default function AppTitle() {
  let game = Game.newGame(SIZE);

  function handleClick(texto) {
    alert(texto);
  }

  return (
    <div className="game-container">
      <ul>
        {game.map((num) => (
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
  );
}
