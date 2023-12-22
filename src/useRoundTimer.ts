import { useState, useEffect } from "react";

const useRoundTimer = () => {
  const [time, setTime] = useState(50 * 60 * 1000); // 50 minutes in ms

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1000);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const date = new Date(time);

  const minutes = date.getUTCMinutes();
  const seconds = date.getSeconds();

  return {
    minutes: minutes,
    seconds: seconds,
  };
};

export default useRoundTimer;
