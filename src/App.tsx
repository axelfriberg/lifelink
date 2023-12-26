import { Clock } from "./components/Clock.tsx";
import { LifeCounter } from "./components/LifeCounter.tsx";
import useRoundTimer from "./useRoundTimer.ts";
import { useLifeCounter } from "./useLifeCounter.ts";
import Modal from "react-modal";
import {
  FaArrowRotateRight,
  FaPlay,
  FaPause,
  FaTimeline,
} from "react-icons/fa6";
import { useState } from "react";
import LifeHistory from "./components/LifeHistory.tsx";

export const STARTING_LIFE_TOTAL = 20;

const iconButton = "border-2 border-sky-800 p-4 rounded-md";

function App() {
  const player1 = useLifeCounter();
  const player2 = useLifeCounter();
  const { minutes, seconds, start, stop, isRunning, reset } = useRoundTimer();
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);

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
      <div className="m-auto w-full max-w-xl">
        <LifeCounter
          className="rotate-180"
          life={player1.life}
          onLifeIncrease={player1.handleLifeIncrease}
          onLifeDecrease={player1.handleLifeDecrease}
          currentLifeChange={player1.currentLifeChange}
        />
        <div className="flex my-6">
          <button
            type="button"
            onClick={handleReset}
            aria-label="Reset game"
            className={iconButton}
          >
            <FaArrowRotateRight />
          </button>
          <div className="ml-auto flex gap-2 items-center">
            <Clock minutes={minutes} seconds={seconds} />
            <button
              type="button"
              onClick={toggleTimer}
              className={iconButton}
              aria-label={isRunning ? "Pause timer" : "Start timer"}
            >
              {isRunning ? <FaPause /> : <FaPlay />}
            </button>
            <button
              type="button"
              onClick={() => setIsHistoryOpen(true)}
              className={iconButton}
              aria-label="View history"
            >
              <FaTimeline />
            </button>
          </div>
        </div>
        <div>
          <LifeCounter
            life={player2.life}
            onLifeIncrease={player2.handleLifeIncrease}
            onLifeDecrease={player2.handleLifeDecrease}
            currentLifeChange={player2.currentLifeChange}
          />
        </div>
      </div>
      <Modal
        isOpen={isHistoryOpen}
        onRequestClose={() => setIsHistoryOpen(false)}
        contentLabel="Example Modal"
      >
        <div className="flex">
          <button
            onClick={() => setIsHistoryOpen(false)}
            type="button"
            className="ml-auto mb-4"
          >
            Close
          </button>
        </div>
        <div className="flex justify-between">
          <div>
            <p>Player 1</p>
            <LifeHistory lifeHistory={player1.lifeHistory} />
          </div>
          <div>
            <p>Player 2</p>
            <LifeHistory lifeHistory={player2.lifeHistory} />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
