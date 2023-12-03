import "./App.css";
import { LifeCounter } from "./components/LifeCounter.tsx";

const STARTING_LIFE_TOTAL = 20;

function App() {
  return (
    <>
      <LifeCounter
        className="flip"
        startingLifeTotal={STARTING_LIFE_TOTAL}
        playerName="Player 1"
      />
      <hr />
      <LifeCounter
        startingLifeTotal={STARTING_LIFE_TOTAL}
        playerName="Player 2"
      />
    </>
  );
}

export default App;
