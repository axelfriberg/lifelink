import { useSettings } from "@/hooks/useSettings.ts";
import { useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";

export function usePlayerLife() {
  const [{ startingLifeTotal }] = useSettings();
  const [life, setLife] = useState(startingLifeTotal);
  const [currentLifeChange, setCurrentLifeChange] = useState<number>(0);
  const debouncedLifeChange = useDebounce<number>(currentLifeChange, 1000);
  const [lifeHistory, setLifeHistory] = useState<number[]>([]);

  useEffect(() => {
    setCurrentLifeChange(0);
    if (debouncedLifeChange === 0) return;
    setLifeHistory((lifeHistory) => [...lifeHistory, debouncedLifeChange]);
  }, [debouncedLifeChange]);

  const increaseLife = () => {
    setLife((lifeChange) => lifeChange + 1);
    setCurrentLifeChange((life) => life + 1);
  };

  const decreaseLife = () => {
    setLife((lifeChange) => lifeChange - 1);
    setCurrentLifeChange((life) => life - 1);
  };

  const reset = () => {
    setLifeHistory([]);
    setLife(startingLifeTotal);
  };

  return {
    life,
    currentLifeChange,
    lifeHistory,
    increaseLife,
    decreaseLife,
    reset,
  };
}
