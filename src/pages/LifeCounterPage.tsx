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
import { Button, IconButton } from "@radix-ui/themes";

const ICON_SIZE = 24;

function LifeCounterPage() {
  const player1 = useLifeCounter("player1");
  const player2 = useLifeCounter("player2");
  const timer = useRoundTimer();

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
              <Dialog
                trigger={
                  <IconButton size="4">
                    <FaArrowRotateRight title="Reset game" size={ICON_SIZE} />
                  </IconButton>
                }
                title="Reset game"
                description="Are you sure you want reset the game? All life history will be reset
        and the timer will be stopped."
                confirmButton={
                  <Button onClick={handleReset} color="red">
                    Reset game
                  </Button>
                }
                closeButton={
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                }
              />
              <Dialog
                trigger={
                  <IconButton size="4">
                    <FaTimeline size={ICON_SIZE} title="View history" />
                  </IconButton>
                }
                title="Life history"
                closeButton={<Button>Close</Button>}
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
            </div>
            <Clock
              minutes={timer.minutes}
              seconds={timer.seconds}
              className="m-auto items-center justify-center text-center"
            />
            <div className="flex gap-2 items-center">
              <IconButton size="4" onClick={toggleTimer}>
                {timer.isRunning ? (
                  <FaPause size={ICON_SIZE} title="Pause timer" />
                ) : (
                  <FaPlay size={ICON_SIZE} title="Start timer" />
                )}
              </IconButton>
              <IconButton onClick={timer.stop} size="4">
                <FaStop size={ICON_SIZE} title="Stop timer" />
              </IconButton>
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
      </div>
    </div>
  );
}

export { LifeCounterPage };
