import React from "react";
import "./index.css";

export default function AppTitle() {
  return (
    <div className="credits-container">
      {/* <div className="credits-text">Find The Sequence Game</div> */}
      <div>
        <p className="credits-text">
          This is a simple project I made to practice ReactJS and CSS. It has a
          stopwatch that was tricky to implement and also very fun to do.
        </p>
        <p className="credits-text">
          This is the second version of this app. Now each component is written
          in a separeted file.
        </p>
        <p className="credits-text">
          You can find the code of this project at GitHub:{" "}
          <a href="https://github.com/Bignotto/find-the-sequence-game">
            https://github.com/Bignotto/find-the-sequence-game
          </a>
        </p>
        <p className="credits-text">Thiago Bignotto - bignotto@gmail.com</p>
      </div>
    </div>
  );
}
