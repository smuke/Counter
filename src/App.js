import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  // Update time
  useEffect(() => {
    let it;

    if (isRunning) {
      it = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(it);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleLap = () => {
    // const newLaps = laps;
    // newLaps.push(time);
    // setLaps(newLaps);
    setLaps([...laps, time]);
  };

  return (
    <center>
      <p>{time}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleLap}>Lap</button>
      {laps?.map((item, index) => (
        <p>
          {index + 1} : {item}
        </p>
      ))}
    </center>
  );
}
