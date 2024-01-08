import { FaTimeline } from "react-icons/fa6";
import { LifeHistory } from "../../components/LifeHistory.tsx";

import { Dialog } from "../../components/Dialog.tsx";
import { Button, IconButton } from "@radix-ui/themes";

export function LifeHistoryDialog({
  player1LifeHistory,
  player2LifeHistory,
}: {
  player1LifeHistory: number[];
  player2LifeHistory: number[];
}) {
  return (
    <Dialog
      trigger={
        <IconButton size="4">
          <FaTimeline size={24} title="View history" />
        </IconButton>
      }
      title="Life history"
      closeButton={<Button>Close</Button>}
    >
      <div className="flex justify-between">
        <div>
          <p className="font-semibold">Player 1</p>
          <LifeHistory lifeHistory={player1LifeHistory} />
        </div>
        <div>
          <p className="font-semibold">Player 2</p>
          <LifeHistory lifeHistory={player2LifeHistory} />
        </div>
      </div>
    </Dialog>
  );
}
