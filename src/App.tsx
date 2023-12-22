import "./App.css";
import { LifeCounter } from "./components/LifeCounter.tsx";

const STARTING_LIFE_TOTAL = 20;

function App() {
  return (
    <div>
      <LifeCounter
        className="flip"
        startingLifeTotal={STARTING_LIFE_TOTAL}
        playerName="Player 2"
      />
      <hr className="divider" />
      <LifeCounter
        startingLifeTotal={STARTING_LIFE_TOTAL}
        playerName="Player 1"
      />
    </div>
  );
}

export default App;
