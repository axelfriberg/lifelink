import { useState } from "react";
import { useSettings } from "@/hooks/useSettings.ts";
import { useInterval } from "usehooks-ts";

const useMatchTimer = () => {
  const [{ matchTimeLimit }] = useSettings();
  const [time, setTime] = useState<number>(matchTimeLimit);
  const [isRunning, setIsRunning] = useState(false);
  useInterval(() => {
    if (isRunning) {
      setTime((prevTime) => prevTime - 1000);
    }
  }, 1000);

  const date = new Date(time);

  const minutes = date.getUTCMinutes();
  const seconds = date.getSeconds();
  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const stop = () => {
    setTime(matchTimeLimit);
    setIsRunning(false);
  };

  return {
    minutes,
    seconds,
    start,
    stop,
    isRunning,
    pause,
  };
};

export { useMatchTimer };
