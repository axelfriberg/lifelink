import "./App.css";
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
    <div>
      <div className="flip">
        <div className="round-timer">
          <Clock minutes={minutes} seconds={seconds} />
          <button type="button" onClick={toggleTimer}>
            {isRunning ? "Stop timer" : "Start timer"}
          </button>
        </div>
        <LifeCounter startingLifeTotal={STARTING_LIFE_TOTAL} />
      </div>
      <hr className="divider" />
      <div>
        <div className="round-timer">
          <Clock minutes={minutes} seconds={seconds} />
          <button type="button" onClick={toggleTimer}>
            {isRunning ? "Stop timer" : "Start timer"}
          </button>
        </div>
        <LifeCounter startingLifeTotal={STARTING_LIFE_TOTAL} />
      </div>
    </div>
  );
}

export default App;
