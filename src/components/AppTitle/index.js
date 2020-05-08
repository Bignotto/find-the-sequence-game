import React from "react";
import "./index.css";

export default function AppTitle() {
  return (
    <div className="title-container">
      <div className="title-text">Find The Sequence Game</div>
      <div className="text">
        Click on number 1 to start. Click the numbers in correct order as fast
        as you can! You win when you click on number 50.
      </div>
    </div>
  );
}
