import { Clock } from "../../components/Clock.tsx";
import { LifeCounter } from "../../components/LifeCounter.tsx";
import useRoundTimer from "../../useRoundTimer.ts";
import { useLifeCounter } from "./context/useLifeCounter.ts";
import { FaPlay, FaPause, FaStop } from "react-icons/fa6";
import { IconButton } from "@radix-ui/themes";
import { ResetGameDialog } from "./ResetGameDialog.tsx";
import { LifeHistoryDialog } from "./LifeHistoryDialog.tsx";

const ICON_SIZE = 24;

export function LifeCounterPage() {
  const { player1, player2 } = useLifeCounter();
  const timer = useRoundTimer();

  const toggleTimer = () => {
    if (timer.isRunning) {
      timer.pause();
    } else {
      timer.start();
    }
  };

  const handleReset = () => {
    player1.setLife(20);
    player2.setLife(20);
    timer.stop();
  };

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 flex flex-col my-auto">
        <div className="flex flex-col w-full max-w-xl h-full mx-auto gap-8">
          <LifeCounter
            className="rotate-180 my-auto"
            life={player1.life}
            onLifeIncrease={player1.increaseLife}
            onLifeDecrease={player1.decreaseLife}
            currentLifeChange={0} // TODO: Implement
          />
          <div className="flex">
            <div className="flex gap-2 items-center">
              <ResetGameDialog handleReset={handleReset} />
              <LifeHistoryDialog
                player1LifeHistory={[]} // TODO: Implement
                player2LifeHistory={[]} // TODO: Implement
              />
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
            onLifeIncrease={player2.increaseLife}
            onLifeDecrease={player2.decreaseLife}
            currentLifeChange={0} // TODO: Implement
            className="my-auto"
          />
        </div>
      </div>
    </div>
  );
}
