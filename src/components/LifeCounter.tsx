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
    <div className={`life-counter ${className}`}>
      <p className="player-name text">{playerName}</p>
      <button
        className="increase-life-button"
        type="button"
        onClick={handleLifeIncrease}
      >
        +
      </button>
      <p className="life text">{life}</p>
      {currentLifeChange !== 0 ? <p>{currentLifeChange}</p> : null}
      <button
        className="decrease-life-button"
        type="button"
        onClick={handleLifeDecrease}
      >
        -
      </button>
      <button
        className="reset-life-button"
        type="button"
        onClick={() => setLife(startingLifeTotal)}
      >
        Reset
      </button>
    </div>
  );
}
