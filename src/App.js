import React from "react";
import AppTitle from "./components/AppTitle";
import Game from "./components/Game";
import Credits from "./components/Credits";

import "./global.css";

function App() {
  return (
    <>
      <div className="app-container">
        <AppTitle />
        <Game />
        <Credits />
      </div>
    </>
  );
}

export default App;
