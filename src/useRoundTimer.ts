import { useState, useEffect } from "react";

const useRoundTimer = () => {
  const [time, setTime] = useState(50 * 60 * 1000); // 50 minutes in ms
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: number;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1000);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const date = new Date(time);

  const minutes = date.getUTCMinutes();
  const seconds = date.getSeconds();
  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);

  return {
    minutes,
    seconds,
    start,
    stop,
    isRunning,
  };
};

export default useRoundTimer;
