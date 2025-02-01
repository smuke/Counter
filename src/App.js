import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    let it;

    if (!isRunning) return () => clearInterval(it);

    it = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 12) return 0;

        return prevTime + 1;
      });
    }, 1000);

    return () => clearInterval(it);
  }, [isRunning]);

  useEffect(() => {
    if (time >= 6) setIsDarkMode(true);
    else setIsDarkMode(false);
  }, [time]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <center>
      <p>{time}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>

      <div
        style={{
          color: "red",
          border: "1px solid gray",
          margin: "20px",
          padding: "20px",
          background: isDarkMode ? "black" : "white",
        }}
      >
        Dark Mode: {isDarkMode ? "ON" : "OFF"}
      </div>
    </center>
  );
}
