import { FaBars } from "react-icons/fa6";
import { Dialog } from "../../components/Dialog.tsx";
import { Button, IconButton, Text } from "@radix-ui/themes";
import { useLifeCounter } from "./context/useLifeCounter.ts";
import { useState } from "react";
import { Link } from "@tanstack/react-router";

type MenuDialogProps = {
  stopTimer: () => void;
};
export function MenuDialog({ stopTimer }: MenuDialogProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [showGameOverScreen, setShowGameOverScreen] = useState<boolean>(false);
  const { player1, player2 } = useLifeCounter();

  const handleNewGame = () => {
    player1.resetLife();
    player2.resetLife();
    setOpen(false);
    setShowGameOverScreen(false);
  };

  const handlePlayer1Win = () => {
    player1.addGameWin();
    handleNewGame();
  };

  const handlePlayer2Win = () => {
    player2.addGameWin();
    handleNewGame();
  };

  const handleNewMatch = () => {
    player1.resetLife();
    player1.resetGameWins();
    player2.resetLife();
    player2.resetGameWins();
    stopTimer();
    setOpen(false);
  };

  return (
    <Dialog
      trigger={
        <IconButton size="4">
          <FaBars title="Match menu" size={24} />
        </IconButton>
      }
      title={!showGameOverScreen ? "Match menu" : "Who won?"}
      open={open}
      onOpenChange={setOpen}
    >
      {!showGameOverScreen ? (
        <div className="flex flex-col gap-4">
          <div>
            <Text className="mb-1">
              Resets life totals and life history but keeps the timer running
            </Text>
            <Button
              className="w-full"
              onClick={() => setShowGameOverScreen(true)}
            >
              New game
            </Button>
          </div>
          <div>
            <Text className="mb-1">
              Resets life totals and resets the timer
            </Text>
            <Button className="w-full" onClick={handleNewMatch}>
              New match
            </Button>
          </div>
          <hr />
          <Link to="/">
            <Button variant="soft" className="w-full">
              Home screen
            </Button>
          </Link>
          <Button variant="soft" onClick={() => setOpen(false)}>
            Close menu
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          <Button onClick={handlePlayer1Win}>Player 1</Button>
          <Button onClick={handlePlayer2Win}>Player 2</Button>
        </div>
      )}
    </Dialog>
  );
}
