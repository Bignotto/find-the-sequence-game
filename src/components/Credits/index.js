import React from "react";
import "./index.css";

export default function AppTitle() {
  return (
    <div className="credits-container">
      {/* <div className="credits-text">Find The Sequence Game</div> */}
      <div className="text">
        <p>
          This is a simple project I made to practice ReactJS. It has a
          stopwatch that was tricky to implement.
        </p>
        <p>
          The data structure that holds the numbers and how the game knows witch
          number is the correct one were also tricky to implement.
        </p>
        <p>
          This first version has almost all the code inside just one file, but I
          will fix this in a few days.
        </p>
        <p>
          You can find the code of this project at GitHub:{" "}
          <a href="https://github.com/Bignotto/find-the-sequence-game">
            https://github.com/Bignotto/find-the-sequence-game
          </a>
        </p>
        <p>Thiago Bignotto - bignotto@gmail.com</p>
      </div>
    </div>
  );
}
