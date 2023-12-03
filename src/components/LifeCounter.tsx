import { useState } from "react";
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

  return (
    <div className={`life-counter ${className}`}>
      <p className="player-name text">{playerName}</p>
      <button
        className="increase-life-button"
        type="button"
        onClick={() => setLife(life + 1)}
      >
        +
      </button>
      <p className="life text">{life}</p>
      <button
        className="decrease-life-button"
        type="button"
        onClick={() => setLife(life - 1)}
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
