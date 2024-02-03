import React, { createContext } from "react";
import { DEFAULT_STARTING_LIFE_TOTAL } from "../../../hooks/useSettings.ts";
import { usePlayerLife } from "./usePlayerLife.ts";
import { useGameWins } from "./useGameWins.ts";

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

const initialState = {
  life: DEFAULT_STARTING_LIFE_TOTAL,
  increaseLife: () => {},
  decreaseLife: () => {},
  resetLife: () => {},
  resetGameWins: () => {},
  addGameWin: () => {},
  lifeHistory: [],
  currentLifeChange: 0,
  gameWins: 0,
};

export const LifeCounterContext = createContext<LifeCounterContextType>({
  player1: initialState,
  player2: initialState,
});

export function LifeCounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const player1Life = usePlayerLife();
  const player2Life = usePlayerLife();
  const player1GameWins = useGameWins();
  const player2GameWins = useGameWins();

  return (
    <LifeCounterContext.Provider
      value={{
        player1: {
          life: player1Life.life,
          increaseLife: player1Life.increaseLife,
          decreaseLife: player1Life.decreaseLife,
          resetLife: player1Life.reset,
          lifeHistory: player1Life.lifeHistory,
          currentLifeChange: player1Life.currentLifeChange,
          gameWins: player1GameWins.gameWins,
          addGameWin: player1GameWins.addGameWin,
          resetGameWins: player1GameWins.reset,
        },
        player2: {
          life: player2Life.life,
          increaseLife: player2Life.increaseLife,
          decreaseLife: player2Life.decreaseLife,
          resetLife: player2Life.reset,
          lifeHistory: player2Life.lifeHistory,
          currentLifeChange: player2Life.currentLifeChange,
          gameWins: player2GameWins.gameWins,
          addGameWin: player2GameWins.addGameWin,
          resetGameWins: player2GameWins.reset,
        },
      }}
    >
      {children}
    </LifeCounterContext.Provider>
  );
}
