import { Clock } from "../../components/Clock.tsx";
import { LifeCounter } from "../../components/LifeCounter.tsx";
import { useLifeCounter } from "./context/useLifeCounter.ts";
import { FaPlay, FaPause, FaStop } from "react-icons/fa6";
import { IconButton } from "@radix-ui/themes";
import { LifeHistoryDialog } from "./LifeHistoryDialog.tsx";
import { MenuDialog } from "./MenuDialog.tsx";
import { useMatchTimer } from "@/pages/LifeCounter/useMatchTimer.ts";

const ICON_SIZE = 24;
const BUTTON_SIZE = "4";

export function LifeCounterPage() {
  const { player1, player2 } = useLifeCounter();
  const timer = useMatchTimer();

  const toggleTimer = () => {
    if (timer.isRunning) {
      timer.pause();
    } else {
      timer.start();
    }
  };

  const stopTimer = () => {
    timer.stop();
  };

  return (
    <div className="my-auto flex flex-col h-full gap-8">
      <LifeCounter
        className="rotate-180 my-auto"
        life={player1.life}
        onLifeIncrease={player1.increaseLife}
        onLifeDecrease={player1.decreaseLife}
        currentLifeChange={player1.currentLifeChange}
      />
      <div className="flex">
        <div className="flex gap-2 items-center">
          <MenuDialog stopTimer={stopTimer} />
          <LifeHistoryDialog
            player1LifeHistory={player1.lifeHistory}
            player2LifeHistory={player2.lifeHistory}
          />
        </div>
        <Clock
          minutes={timer.minutes}
          seconds={timer.seconds}
          className="m-auto items-center justify-center text-center"
        />
        <div className="flex gap-2 items-center">
          <IconButton size={BUTTON_SIZE} onClick={toggleTimer}>
            {timer.isRunning ? (
              <FaPause size={ICON_SIZE} title="Pause timer" />
            ) : (
              <FaPlay size={ICON_SIZE} title="Start timer" />
            )}
          </IconButton>
          <IconButton onClick={timer.stop} size={BUTTON_SIZE}>
            <FaStop size={ICON_SIZE} title="Stop timer" />
          </IconButton>
        </div>
      </div>
      <LifeCounter
        life={player2.life}
        onLifeIncrease={player2.increaseLife}
        onLifeDecrease={player2.decreaseLife}
        currentLifeChange={player2.currentLifeChange}
        className="my-auto"
      />
    </div>
  );
}
