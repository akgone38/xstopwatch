import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (isRunning) {
      timerId = setInterval(() => {
        console.log("timer", timer);
        setTimer((prevTimer) => {
          console.log(prevTimer);
          return prevTimer + 1;
        });
      }, 1000);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [isRunning]);
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? "0" : ""}${remainingSecs}`;
  };
  const startStop = () => {
    setIsRunning(!isRunning);
  };
  const reset = () => {
    setTimer(0);
    setIsRunning(false);
  };
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(timer)}</p>
      <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}