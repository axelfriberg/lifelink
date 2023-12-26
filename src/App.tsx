import { Clock } from "./components/Clock.tsx";
import { LifeCounter } from "./components/LifeCounter.tsx";
import useRoundTimer from "./useRoundTimer.ts";
import { useLifeCounter } from "./useLifeCounter.ts";

export const STARTING_LIFE_TOTAL = 20;

function App() {
  const player1 = useLifeCounter();
  const player2 = useLifeCounter();
  const { minutes, seconds, start, stop, isRunning, reset } = useRoundTimer();

  const toggleTimer = () => {
    if (isRunning) {
      stop();
    } else {
      start();
    }
  };

  const handleReset = () => {
    player1.handleReset();
    player2.handleReset();
    reset();
  };

  return (
    <div className="bg-plains min-h-screen px-4 flex flex-col">
      <div className="my-auto">
        <LifeCounter
          className="rotate-180"
          life={player1.life}
          onLifeIncrease={player1.handleLifeIncrease}
          onLifeDecrease={player1.handleLifeDecrease}
          currentLifeChange={player1.currentLifeChange}
        />
        <hr className="my-4 -mx-4 h-[2px] bg-slate-600 border-none" />
        <button type="button" onClick={handleReset}>
          Reset game
        </button>
        <div>
          <div className="flex">
            <div className="ml-auto">
              <Clock minutes={minutes} seconds={seconds} />
              <button type="button" onClick={toggleTimer}>
                {isRunning ? "Stop timer" : "Start timer"}
              </button>
            </div>
          </div>
          <LifeCounter
            life={player2.life}
            onLifeIncrease={player2.handleLifeIncrease}
            onLifeDecrease={player2.handleLifeDecrease}
            currentLifeChange={player2.currentLifeChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
