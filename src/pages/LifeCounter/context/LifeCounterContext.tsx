import React, { createContext, useEffect, useState } from "react";
import {
  useSettings,
  DEFAULT_STARTING_LIFE_TOTAL,
} from "../../../hooks/useSettings.ts";
import { useDebounce } from "usehooks-ts";

type PlayerLife = {
  life: number;
  increaseLife: () => void;
  decreaseLife: () => void;
  resetLife: () => void;
  lifeHistory: number[];
  currentLifeChange: number;
};

export type LifeCounterContextType = {
  player1: PlayerLife;
  player2: PlayerLife;
};

export const LifeCounterContext = createContext<LifeCounterContextType>({
  player1: {
    life: DEFAULT_STARTING_LIFE_TOTAL,
    increaseLife: () => {},
    decreaseLife: () => {},
    resetLife: () => {},
    lifeHistory: [],
    currentLifeChange: 0,
  },
  player2: {
    life: DEFAULT_STARTING_LIFE_TOTAL,
    increaseLife: () => {},
    decreaseLife: () => {},
    resetLife: () => {},
    lifeHistory: [],
    currentLifeChange: 0,
  },
});

export function LifeCounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [{ startingLifeTotal }] = useSettings();
  const [player1Life, setPlayer1Life] = useState(startingLifeTotal);
  const [player2Life, setPlayer2Life] = useState(startingLifeTotal);
  const [currentLifeChangePlayer1, setCurrentLifeChangePlayer1] =
    useState<number>(0);
  const [currentLifeChangePlayer2, setCurrentLifeChangePlayer2] =
    useState<number>(0);
  const debouncedValue1 = useDebounce<number>(currentLifeChangePlayer1, 1000);
  const debouncedValue2 = useDebounce<number>(currentLifeChangePlayer2, 1000);
  const [lifeHistoryPlayer1, setLifeHistoryPlayer1] = useState<number[]>([]);
  const [lifeHistoryPlayer2, setLifeHistoryPlayer2] = useState<number[]>([]);

  useEffect(() => {
    if (debouncedValue1 === 0) return;
    setLifeHistoryPlayer1((lifeHistory) => [...lifeHistory, debouncedValue1]);
    setCurrentLifeChangePlayer1(0);
  }, [debouncedValue1]);

  useEffect(() => {
    if (debouncedValue2 === 0) return;
    setLifeHistoryPlayer2((lifeHistory) => [...lifeHistory, debouncedValue2]);
    setCurrentLifeChangePlayer2(0);
  }, [debouncedValue2]);

  const handleIncreasePlayer1Life = () => {
    setCurrentLifeChangePlayer1((lifeChange) => lifeChange + 1);
    setPlayer1Life(player1Life + 1);
  };

  const handleIncreasePlayer2Life = () => {
    setCurrentLifeChangePlayer2((lifeChange) => lifeChange + 1);
    setPlayer2Life(player2Life + 1);
  };

  const handleDecreasePlayer1Life = () => {
    setCurrentLifeChangePlayer1((lifeChange) => lifeChange - 1);
    setPlayer1Life(player1Life - 1);
  };

  const handleDecreasePlayer2Life = () => {
    setCurrentLifeChangePlayer2((lifeChange) => lifeChange - 1);
    setPlayer2Life(player2Life - 1);
  };

  const handleResetPlayer1Life = () => {
    setLifeHistoryPlayer1([]);
    setPlayer1Life(startingLifeTotal);
  };

  const handleResetPlayer2Life = () => {
    setLifeHistoryPlayer2([]);
    setPlayer2Life(startingLifeTotal);
  };

  return (
    <LifeCounterContext.Provider
      value={{
        player1: {
          life: player1Life,
          increaseLife: handleIncreasePlayer1Life,
          decreaseLife: handleDecreasePlayer1Life,
          resetLife: handleResetPlayer1Life,
          lifeHistory: lifeHistoryPlayer1,
          currentLifeChange: currentLifeChangePlayer1,
        },
        player2: {
          life: player2Life,
          increaseLife: handleIncreasePlayer2Life,
          decreaseLife: handleDecreasePlayer2Life,
          resetLife: handleResetPlayer2Life,
          lifeHistory: lifeHistoryPlayer2,
          currentLifeChange: currentLifeChangePlayer2,
        },
      }}
    >
      {children}
    </LifeCounterContext.Provider>
  );
}
