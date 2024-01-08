import { FaArrowRotateRight } from "react-icons/fa6";
import { Dialog } from "../../components/Dialog.tsx";
import { Button, IconButton } from "@radix-ui/themes";

export function ResetGameDialog({ handleReset }: { handleReset: () => void }) {
  return (
    <Dialog
      trigger={
        <IconButton size="4">
          <FaArrowRotateRight title="Reset game" size={24} />
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
  );
}
