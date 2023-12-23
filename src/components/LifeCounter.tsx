import { CurrentLifeChange } from "./CurrentLifeChange";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

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
          className="text-4xl w-full max-w-xl flex justify-center px-16 py-4 bg-slate-600 text-white rounded-lg active:bg-slate-500"
          type="button"
          onClick={onLifeIncrease}
        >
          <FaPlus />
        </button>
        <div className="flex content-between items-center gap-4 text-5xl font-bold">
          <p>{life}</p>
          <CurrentLifeChange currentLifeChange={currentLifeChange} />
        </div>
        <button
          className="text-4xl w-full max-w-xl flex justify-center px-16 py-4 bg-slate-600 text-white rounded-lg active:bg-slate-500"
          type="button"
          onClick={onLifeDecrease}
        >
          <FaMinus />
        </button>
      </div>
    </div>
  );
}
