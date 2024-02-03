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

  const date = new Date(Math.abs(time));

  const minutes = date.getUTCMinutes();
  const seconds = date.getSeconds();
  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const stop = () => {
    setTime(matchTimeLimit);
    setIsRunning(false);
  };

  const timeValue = `${time < 0 ? "-" : ""}${String(minutes).padStart(
    2,
    "0",
  )}:${String(seconds).padStart(2, "0")}`;

  return {
    start,
    stop,
    isRunning,
    pause,
    time: timeValue,
  };
};

export { useMatchTimer };
