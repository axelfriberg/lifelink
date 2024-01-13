import { useEffect, useState } from "react";
import { useStartingLifeTotal } from "./useStartingLifeTotal";

export function useLifeCounter() {
  const [startingLifeTotal] = useStartingLifeTotal();
  const [life, setLife] = useState<number>(startingLifeTotal);
  const [lifeHistory, setLifeHistory] = useState<number[]>([]);
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
