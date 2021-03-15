import "./App.css";
import React from "react";
import Stopwatch from "./Components/StopwatchRxjs/stopwatch";

const App = (props) => {
  return (
      <div className="app-wrapper">
        <Stopwatch/>
      </div>
  );
};

export default App;