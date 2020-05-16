import React, { useState, useEffect } from "react";

import "./index.css";

export default function Grid(props) {
  return (
    <div className="game-container">
      <div className="game-grid">
        <ul>
          {props.numbers.first.map((num) => (
            <li key={num}>
              <div className="game-cell">
                <button
                  type="button"
                  className={
                    !props.clicked.includes(num)
                      ? "button-text"
                      : props.clicked.length >= 25 &&
                        props.clicked.includes(props.numbers.second[num])
                      ? "button-text-clicked-clicked"
                      : "button-text-clicked"
                  }
                  onClick={() => {
                    !props.clicked.includes(num)
                      ? props.clickAction(num)
                      : props.clickAction(props.numbers.second[num]);
                  }}
                >
                  {!props.clicked.includes(num)
                    ? num
                    : props.numbers.second[num]}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
