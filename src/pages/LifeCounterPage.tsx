import { Clock } from "../components/Clock.tsx";
import { LifeCounter } from "../components/LifeCounter.tsx";
import useRoundTimer from "../useRoundTimer.ts";
import { useLifeCounter } from "../useLifeCounter.ts";
import {
  FaArrowRotateRight,
  FaPlay,
  FaPause,
  FaTimeline,
  FaStop,
} from "react-icons/fa6";
import { LifeHistory } from "../components/LifeHistory.tsx";
import { Dialog } from "../components/Dialog.tsx";
import { useState } from "react";

const ICON_SIZE = 36;
const iconButton = "border-2 border-sky-800 p-2 rounded-md";

function LifeCounterPage() {
  const player1 = useLifeCounter("player1");
  const player2 = useLifeCounter("player2");
  const timer = useRoundTimer();
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [showResetConfirmation, setShowResetConfirmation] =
    useState<boolean>(false);

  const toggleTimer = () => {
    if (timer.isRunning) {
      timer.pause();
    } else {
      timer.start();
    }
  };

  const handleReset = () => {
    player1.handleReset();
    player2.handleReset();
    timer.stop();
    setShowResetConfirmation(false);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 flex flex-col my-auto">
        <div className="flex flex-col w-full max-w-xl h-full mx-auto gap-8">
          <LifeCounter
            className="rotate-180 my-auto"
            life={player1.life}
            onLifeIncrease={player1.handleLifeIncrease}
            onLifeDecrease={player1.handleLifeDecrease}
            currentLifeChange={player1.currentLifeChange}
          />
          <div className="flex">
            <div className="flex gap-2 items-center">
              <button
                type="button"
                onClick={() => setShowResetConfirmation(true)}
                className={iconButton}
              >
                <FaArrowRotateRight size={ICON_SIZE} title="Reset game" />
              </button>
              <button
                type="button"
                className={iconButton}
                onClick={() => setShowHistory(true)}
              >
                <FaTimeline size={ICON_SIZE} title="View history" />
              </button>
            </div>
            <Clock
              minutes={timer.minutes}
              seconds={timer.seconds}
              className="m-auto items-center justify-center text-center"
            />
            <div className="flex gap-2 items-center">
              <button
                type="button"
                onClick={toggleTimer}
                className={iconButton}
              >
                {timer.isRunning ? (
                  <FaPause size={ICON_SIZE} title="Pause timer" />
                ) : (
                  <FaPlay size={ICON_SIZE} title="Start timer" />
                )}
              </button>
              <button type="button" onClick={timer.stop} className={iconButton}>
                <FaStop size={ICON_SIZE} title="Stop timer" />
              </button>
            </div>
          </div>
          <LifeCounter
            life={player2.life}
            onLifeIncrease={player2.handleLifeIncrease}
            onLifeDecrease={player2.handleLifeDecrease}
            currentLifeChange={player2.currentLifeChange}
            className="my-auto"
          />
        </div>
        <Dialog
          isOpen={showHistory}
          title="History"
          onClose={() => setShowHistory(false)}
        >
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">Player 1</p>
              <LifeHistory lifeHistory={player1.lifeHistory} />
            </div>
            <div>
              <p className="font-semibold">Player 2</p>
              <LifeHistory lifeHistory={player2.lifeHistory} />
            </div>
          </div>
        </Dialog>
        <Dialog
          isOpen={showResetConfirmation}
          title="Reset game"
          onClose={() => setShowResetConfirmation(false)}
          description="Are you sure you want reset the game? All life history will be reset
        and the timer will be stopped."
          actionButtons={
            <>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                onClick={handleReset}
              >
                Reset game
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={() => setShowResetConfirmation(false)}
              >
                Cancel
              </button>
            </>
          }
        />
      </div>
    </div>
  );
}

export { LifeCounterPage };
