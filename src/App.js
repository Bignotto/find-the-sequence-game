import React from "react";
import AppTitle from "./components/AppTitle";
import Time from "./components/Time";
import Game from "./components/Game";
import Buttons from "./components/Buttons";

import "./global.css";

function App() {
  return (
    <>
      <AppTitle />
      {/* <Time /> */}
      <Game />
      {/* <Buttons /> */}
    </>
  );
}

export default App;
