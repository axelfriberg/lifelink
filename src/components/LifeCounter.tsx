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
      <div className="life-counter">
        <div className="action-row">
          <p className="player-name">{playerName}</p>
          <button type="button" onClick={() => setLife(startingLifeTotal)}>
            Reset
          </button>
        </div>
        <button
          className="life-button"
          type="button"
          onClick={handleLifeIncrease}
        >
          +
        </button>
        <div className="action-row">
          <p className="life text">{life}</p>
          {currentLifeChange !== 0 ? (
            <p
              className={`text ${
                currentLifeChange > 0 ? "positive-life" : "negative-life"
              }`}
            >
              {currentLifeChange > 0 && "+"}
              {currentLifeChange}
            </p>
          ) : null}
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
