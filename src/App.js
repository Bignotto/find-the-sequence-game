import React from "react";
import AppTitle from "./components/AppTitle";
import Game from "./components/Game";
import Credits from "./components/Credits";

import "./global.css";

function App() {
  return (
    <>
      <AppTitle />
      <Game />
      <Credits />
    </>
  );
}

export default App;
