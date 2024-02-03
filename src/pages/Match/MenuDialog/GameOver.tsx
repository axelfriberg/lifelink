import { Button } from "@radix-ui/themes";
import { useLifeCounter } from "@/pages/Match/context/useLifeCounter.ts";

export function GameOver({ onCloseDialog }: { onCloseDialog: () => void }) {
  const { player1, player2, startNewGame } = useLifeCounter();

  const handleStartNewGame = () => {
    startNewGame();
    onCloseDialog();
  };

  return (
    <div className="flex flex-col gap-6">
      <Button
        onClick={() => {
          player1.addGameWin();
          handleStartNewGame();
        }}
      >
        Player 1
      </Button>
      <Button
        onClick={() => {
          player2.addGameWin();
          handleStartNewGame();
        }}
      >
        Player 2
      </Button>
    </div>
  );
}
