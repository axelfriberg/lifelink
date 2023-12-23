import { Clock } from "./components/LifeCounter/Clock.tsx";
import { LifeCounter } from "./components/LifeCounter/LifeCounter.tsx";
import useRoundTimer from "./useRoundTimer.ts";

export const STARTING_LIFE_TOTAL = 20;

function App() {
  const { minutes, seconds, start, stop, isRunning } = useRoundTimer();
  const toggleTimer = () => {
    if (isRunning) {
      stop();
    } else {
      start();
    }
  };
  return (
    <div className="bg-plains min-h-screen">
      <div className="rotate-180">
        <div className="flex">
          <div className="ml-auto">
            <Clock minutes={minutes} seconds={seconds} />
            <button type="button" onClick={toggleTimer}>
              {isRunning ? "Stop timer" : "Start timer"}
            </button>
          </div>
        </div>
        <LifeCounter startingLifeTotal={STARTING_LIFE_TOTAL} />
      </div>
      <hr className="my-4" />
      <div>
        <div className="flex">
          <div className="ml-auto">
            <Clock minutes={minutes} seconds={seconds} />
            <button type="button" onClick={toggleTimer}>
              {isRunning ? "Stop timer" : "Start timer"}
            </button>
          </div>
        </div>
        <LifeCounter startingLifeTotal={STARTING_LIFE_TOTAL} />
      </div>
    </div>
  );
}

export default App;
