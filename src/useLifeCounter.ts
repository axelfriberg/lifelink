import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useStartingLifeTotal } from "./useStartingLifeTotal";

export function useLifeCounter(name: string) {
  const [startingLifeTotal] = useStartingLifeTotal();
  const [life, setLife] = useLocalStorage<number>(
    `${name}-life`,
    startingLifeTotal,
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
    setLife(startingLifeTotal);
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
