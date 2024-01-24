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
          className="text-4xl w-full flex justify-center py-6 bg-slate-600 text-white rounded-lg active:bg-slate-500"
          type="button"
          onClick={onLifeIncrease}
        >
          <FaPlus title="Increase life" />
        </button>
        <div className="grid grid-cols-3 text-5xl font-bold min-w-80 justify-items-center">
          <div className="col-start-2">{life}</div>
          <CurrentLifeChange currentLifeChange={currentLifeChange} />
        </div>
        <button
          className="text-4xl w-full flex justify-center py-6 bg-slate-600 text-white rounded-lg active:bg-slate-500"
          type="button"
          onClick={onLifeDecrease}
        >
          <FaMinus title="Decrease life" />
        </button>
      </div>
    </div>
  );
}
