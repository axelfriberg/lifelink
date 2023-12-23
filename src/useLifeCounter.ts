import { useEffect, useState } from "react";

export const STARTING_LIFE_TOTAL = 20;

export function useLifeCounter() {
  const [life, setLife] = useState<number>(STARTING_LIFE_TOTAL);
  const [currentLifeChange, setCurrentLifeChange] = useState<number>(0);
  const [lifeHistory, setLifeHistory] = useState<number[]>([]);

  useEffect(() => {
    const resetTimeout = setTimeout(() => {
      if (currentLifeChange === 0) return;
      setLifeHistory((lifeHistory) => [...lifeHistory, currentLifeChange]);
      handleResetCurrentLifeChange();
    }, 1000);

    return () => clearTimeout(resetTimeout);
  }, [currentLifeChange]);

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
