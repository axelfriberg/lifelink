import { useEffect, useState } from "react";
import "./life-counter.css";
import { CurrentLifeChange } from "../CurrentLifeChange/CurrentLifeChange";

type LifeCounterProps = {
  className?: string;
  startingLifeTotal: number;
  playerName: string;
};

export function LifeCounter({
  className,
  startingLifeTotal,
  playerName,
}: LifeCounterProps) {
  const [life, setLife] = useState<number>(startingLifeTotal);
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
    setLife(startingLifeTotal);
    setLifeHistory([]);
  };

  return (
    <div className={className}>
      <div className="life-counter">
        <div className="action-row">
          <p className="player-name">{playerName}</p>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
        <div>{lifeHistory.join(", ")}</div>
        <button
          className="life-button"
          type="button"
          onClick={handleLifeIncrease}
        >
          +
        </button>
        <div className="action-row">
          <p className="life text">{life}</p>
          <CurrentLifeChange currentLifeChange={currentLifeChange} />
        </div>
        <button
          className="life-button"
          type="button"
          onClick={handleLifeDecrease}
        >
          -
        </button>
      </div>
    </div>
  );
}
