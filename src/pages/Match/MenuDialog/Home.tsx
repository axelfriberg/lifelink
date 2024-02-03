import { Button, Text } from "@radix-ui/themes";
import { Link } from "@tanstack/react-router";
import { MenuScreen } from "./MenuDialog.tsx";
import { useLifeCounter } from "@/pages/Match/context/useLifeCounter.ts";

export function Home({
  onCloseDialog,
  onSwitchScreen,
  onStopTimer,
}: {
  onCloseDialog: () => void;
  onSwitchScreen: (screen: MenuScreen) => void;
  onStopTimer: () => void;
}) {
  const { startNewMatch } = useLifeCounter();

  const handleNewMatch = () => {
    onStopTimer();
    startNewMatch();
    onCloseDialog();
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Text className="mb-1">
          Resets life totals and life history but keeps the timer running
        </Text>
        <Button className="w-full" onClick={() => onSwitchScreen("game_over")}>
          New game
        </Button>
      </div>
      <div>
        <Text className="mb-1">Resets life totals and resets the timer</Text>
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
      <Button variant="soft" onClick={onCloseDialog}>
        Close menu
      </Button>
    </div>
  );
}
