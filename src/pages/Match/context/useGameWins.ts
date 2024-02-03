import { useState } from "react";

export function useGameWins() {
  const [gameWins, setGameWins] = useState<number>(0);

  const addGameWin = () => {
    setGameWins((wins) => wins + 1);
  };

  const reset = () => {
    setGameWins(0);
  };

  return { gameWins, addGameWin, reset };
}
