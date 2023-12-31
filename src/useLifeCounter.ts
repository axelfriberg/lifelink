import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { STARTING_LIFE_TOTAL } from "./STARTING_LIFE_TOTAL";

export function useLifeCounter(name: string) {
  const [life, setLife] = useLocalStorage<number>(
    `${name}-life`,
    STARTING_LIFE_TOTAL,
  );
  const [lifeHistory, setLifeHistory] = useLocalStorage<number[]>(
    `${name}-life-history`,
    [],
  );
  const [currentLifeChange, setCurrentLifeChange] = useState<number>(0);

  useEffect(() => {
    const resetTimeout = setTimeout(() => {
      if (currentLifeChange === 0) return;
      setLifeHistory((lifeHistory) => [...lifeHistory, currentLifeChange]);
      handleResetCurrentLifeChange();
    }, 1000);

    return () => clearTimeout(resetTimeout);
  }, [currentLifeChange, setLifeHistory]);

  const handleResetCurrentLifeChange = () => setCurrentLifeChange(0);

  const handleLifeIncrease = () => {
    setLife(life + 1);
    setCurrentLifeChange(currentLifeChange + 1);
  };

  const handleLifeDecrease = () => {
    setLife(life - 1);
    setCurrentLifeChange(currentLifeChange - 1);
  };

  const handleReset = () => {
    setLife(STARTING_LIFE_TOTAL);
    setLifeHistory([]);
  };

  return {
    life,
    lifeHistory,
    handleLifeIncrease,
    handleLifeDecrease,
    handleReset,
    currentLifeChange,
  };
}
