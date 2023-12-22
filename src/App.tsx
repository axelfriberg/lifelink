import "./App.css";
import { LifeCounter } from "./components/LifeCounter/LifeCounter.tsx";
import useRoundTimer from "./useRoundTimer.ts";

export const STARTING_LIFE_TOTAL = 20;

function App() {
  const { minutes, seconds } = useRoundTimer();
  return (
    <div>
      <div className="flip">
        <p className="round-timer">
          {minutes}:{seconds}
        </p>
        <LifeCounter
          startingLifeTotal={STARTING_LIFE_TOTAL}
          playerName="Player 2"
        />
      </div>
      <hr className="divider" />
      <div>
        <p className="round-timer">
          {minutes}:{seconds}
        </p>
        <LifeCounter
          startingLifeTotal={STARTING_LIFE_TOTAL}
          playerName="Player 1"
        />
      </div>
    </div>
  );
}

export default App;
