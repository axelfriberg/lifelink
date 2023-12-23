import { useEffect, useState } from "react";
import { CurrentLifeChange } from "../CurrentLifeChange/CurrentLifeChange";
import LifeHistory from "./LifeHistory";

type LifeCounterProps = {
  className?: string;
  startingLifeTotal: number;
};

export function LifeCounter({
  className,
  startingLifeTotal,
}: LifeCounterProps) {
  const [life, setLife] = useState<number>(startingLifeTotal);
  const [currentLifeChange, setCurrentLifeChange] = useState<number>(0);
  const [lifeHistory, setLifeHistory] = useState<number[]>([]);
  const [showLifeHistory, setShowLifeHistory] = useState<boolean>(false);

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
    setLife(startingLifeTotal);
    setLifeHistory([]);
  };

  return (
    <div className={className}>
      <div className="flex flex-col w-full gap-4 items-center">
        <div className="flex content-between items-center gap-4">
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="button" onClick={() => setShowLifeHistory((l) => !l)}>
            {showLifeHistory ? "Hide history" : "Show history"}
          </button>
        </div>
        {showLifeHistory && <LifeHistory lifeHistory={lifeHistory} />}
        <button
          className="text-4xl max-w-52 w-full border-2"
          type="button"
          onClick={handleLifeIncrease}
        >
          +
        </button>
        <div className="flex content-between items-center gap-4">
          <p className="text-xl font-bold">{life}</p>
          <CurrentLifeChange currentLifeChange={currentLifeChange} />
        </div>
        <button
          className="text-4xl max-w-52 w-full border-2"
          type="button"
          onClick={handleLifeDecrease}
        >
          -
        </button>
      </div>
    </div>
  );
}
