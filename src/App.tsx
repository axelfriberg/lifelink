import "./App.css";
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
          <p className="clock">{`${String(minutes).padStart(2, "0")}:${String(
            seconds,
          ).padStart(2, "0")}`}</p>
          <button type="button" onClick={toggleTimer}>
            {isRunning ? "Stop timer" : "Start timer"}
          </button>
        </div>
        <LifeCounter
          startingLifeTotal={STARTING_LIFE_TOTAL}
          playerName="Player 2"
        />
      </div>
      <hr className="divider" />

      <div>
        <div className="round-timer">
          <p className="clock">
            {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
              2,
              "0",
            )}`}
          </p>
          <button type="button" onClick={toggleTimer}>
            {isRunning ? "Stop timer" : "Start timer"}
          </button>
        </div>
        <LifeCounter
          startingLifeTotal={STARTING_LIFE_TOTAL}
          playerName="Player 1"
        />
      </div>
    </div>
  );
}

export default App;
