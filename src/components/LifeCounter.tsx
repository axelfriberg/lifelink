import { CurrentLifeChange } from "./CurrentLifeChange";

type LifeCounterProps = {
  className?: string;
  onLifeIncrease: () => void;
  onLifeDecrease: () => void;
  currentLifeChange: number;
  life: number;
};

export function LifeCounter({
  className,
  onLifeDecrease,
  onLifeIncrease,
  life,
  currentLifeChange,
}: LifeCounterProps) {
  return (
    <div className={className}>
      <div className="flex flex-col w-full gap-4 items-center">
        <button
          className="text-4xl max-w-52 w-full border-2"
          type="button"
          onClick={onLifeIncrease}
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
          onClick={onLifeDecrease}
        >
          -
        </button>
      </div>
    </div>
  );
}
