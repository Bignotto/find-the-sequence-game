import React, { useState, useEffect } from "react";

import "./index.css";

export default function Time(props) {
  //   const [timeElapsed, setTimeElapsed] = useState(0);

  //   useEffect(() => {
  //     setTimeElapsed(props.timeElapsed);
  //   }, []);

  const leftPad = (width, n) => {
    if ((n + "").length > width) {
      return n;
    }
    const padding = new Array(width).join("0");
    return (padding + n).slice(-width);
  };

  function getUnits(timeElapsed) {
    const seconds = timeElapsed / 1000;
    return {
      min: Math.floor(seconds / 60).toString(),
      sec: Math.floor(seconds % 60).toString(),
      msec: (seconds % 1).toFixed(3).substring(2),
    };
  }

  const units = getUnits(props.timeElapsed);

  return (
    <div className="time-container">
      <p>
        {leftPad(2, units.min)}:{leftPad(2, units.sec)}.{units.msec}
      </p>
    </div>
  );
}
