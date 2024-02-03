import { FaBars } from "react-icons/fa6";
import { Dialog } from "@/components/Dialog.tsx";
import { IconButton } from "@radix-ui/themes";
import { useState } from "react";
import { GameOver } from "@/pages/Match/MenuDialog/GameOver.tsx";
import { Home } from "@/pages/Match/MenuDialog/Home.tsx";

type MenuDialogProps = {
  stopTimer: () => void;
};

export type MenuScreen = "home" | "game_over";

export function MenuDialog({ stopTimer }: MenuDialogProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [menuScreen, setMenuScreen] = useState<MenuScreen>("home");

  const handleCloseDialog = () => {
    setOpen(false);
    setMenuScreen("home");
  };

  const handleOpenDialog = (open: boolean) => {
    setOpen(open);
    if (!open) {
      setMenuScreen("home");
    }
  };

  const title = () => {
    return menuScreen === "home" ? "Match menu" : "Who won?";
  };

  const renderBody = () => {
    if (menuScreen === "game_over") {
      return <GameOver onCloseDialog={handleCloseDialog} />;
    }

    return (
      <Home
        onCloseDialog={handleCloseDialog}
        onSwitchScreen={(screen) => setMenuScreen(screen)}
        onStopTimer={stopTimer}
      />
    );
  };

  return (
    <Dialog
      trigger={
        <IconButton size="4">
          <FaBars title="Match menu" size={24} />
        </IconButton>
      }
      title={title()}
      open={open}
      onOpenChange={handleOpenDialog}
    >
      {renderBody()}
    </Dialog>
  );
}
