import { useEffect, useState } from "react";
import "./life-counter.css";

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

  useEffect(() => {
    const resetTimeout = setTimeout(() => {
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

  return (
    <div className={className}>
      <button type="button" onClick={() => setLife(startingLifeTotal)}>
        Reset
      </button>
      <div className="life-counter">
        <p className="player-name text">{playerName}</p>
        <button
          className="life-button increase-life-button"
          type="button"
          onClick={handleLifeIncrease}
        >
          +
        </button>
        <p className="life text">{life}</p>
        {currentLifeChange !== 0 ? (
          <p
            className={`text current-life-change ${
              currentLifeChange > 0 ? "positive-life" : "negative-life"
            }`}
          >
            {currentLifeChange > 0 && "+"}
            {currentLifeChange}
          </p>
        ) : null}
        <button
          className="life-button decrease-life-button"
          type="button"
          onClick={handleLifeDecrease}
        >
          -
        </button>
      </div>
    </div>
  );
}
