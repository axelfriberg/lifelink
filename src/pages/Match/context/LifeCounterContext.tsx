import React, { createContext, useState } from "react";
import { DEFAULT_STARTING_LIFE_TOTAL } from "../../../hooks/useSettings.ts";
import { usePlayerLife } from "./usePlayerLife.ts";

type PlayerState = {
  life: number;
  increaseLife: () => void;
  decreaseLife: () => void;
  resetLife: () => void;
  resetGameWins: () => void;
  lifeHistory: number[];
  currentLifeChange: number;
  gameWins: number;
  addGameWin: () => void;
};

export type LifeCounterContextType = {
  player1: PlayerState;
  player2: PlayerState;
};

export const LifeCounterContext = createContext<LifeCounterContextType>({
  player1: {
    life: DEFAULT_STARTING_LIFE_TOTAL,
    increaseLife: () => {},
    decreaseLife: () => {},
    resetLife: () => {},
    resetGameWins: () => {},
    addGameWin: () => {},
    lifeHistory: [],
    currentLifeChange: 0,
    gameWins: 0,
  },
  player2: {
    life: DEFAULT_STARTING_LIFE_TOTAL,
    increaseLife: () => {},
    decreaseLife: () => {},
    resetLife: () => {},
    resetGameWins: () => {},
    addGameWin: () => {},
    lifeHistory: [],
    currentLifeChange: 0,
    gameWins: 0,
  },
});

export function LifeCounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const player1 = usePlayerLife();
  const player2 = usePlayerLife();

  const [player1GameWin, setPlayer1GameWin] = useState<number>(0);
  const [player2GameWin, setPlayer2GameWin] = useState<number>(0);

  const handlePlayer1GameWin = () => {
    setPlayer1GameWin((prev) => prev + 1);
  };

  const handlePlayer2GameWin = () => {
    setPlayer2GameWin((prev) => prev + 1);
  };

  const handlePlayer1GameWinReset = () => {
    setPlayer1GameWin(0);
  };

  const handlePlayer2GameWinReset = () => {
    setPlayer2GameWin(0);
  };

  return (
    <LifeCounterContext.Provider
      value={{
        player1: {
          life: player1.life,
          increaseLife: player1.increaseLife,
          decreaseLife: player1.decreaseLife,
          resetLife: player1.reset,
          lifeHistory: player1.lifeHistory,
          currentLifeChange: player1.currentLifeChange,
          gameWins: player1GameWin,
          addGameWin: handlePlayer1GameWin,
          resetGameWins: handlePlayer1GameWinReset,
        },
        player2: {
          life: player2.life,
          increaseLife: player2.increaseLife,
          decreaseLife: player2.decreaseLife,
          resetLife: player2.reset,
          lifeHistory: player2.lifeHistory,
          currentLifeChange: player2.currentLifeChange,
          gameWins: player2GameWin,
          addGameWin: handlePlayer2GameWin,
          resetGameWins: handlePlayer2GameWinReset,
        },
      }}
    >
      {children}
    </LifeCounterContext.Provider>
  );
}
