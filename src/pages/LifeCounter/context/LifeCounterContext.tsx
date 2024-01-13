import React, { createContext, useState } from "react";
import {
  DEFAULT_STARTING_LIFE_TOTAL,
  useStartingLifeTotal,
} from "../../../useStartingLifeTotal";

type PlayerLife = {
  life: number;
  setLife: (life: number) => void;
  increaseLife: () => void;
  decreaseLife: () => void;
  resetLife: () => void;
};

export type LifeCounterContextType = {
  player1: PlayerLife;
  player2: PlayerLife;
};

export const LifeCounterContext = createContext<LifeCounterContextType>({
  player1: {
    life: DEFAULT_STARTING_LIFE_TOTAL,
    setLife: () => {},
    increaseLife: () => {},
    decreaseLife: () => {},
    resetLife: () => {},
  },
  player2: {
    life: DEFAULT_STARTING_LIFE_TOTAL,
    setLife: () => {},
    increaseLife: () => {},
    decreaseLife: () => {},
    resetLife: () => {},
  },
});

export function LifeCounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [startingLifeTotal] = useStartingLifeTotal();
  const [player1Life, setPlayer1Life] = useState(startingLifeTotal);
  const [player2Life, setPlayer2Life] = useState(startingLifeTotal);

  const handleSetPlayer1Life = (life: number) => {
    setPlayer1Life(life);
  };

  const handleSetPlayer2Life = (life: number) => {
    setPlayer2Life(life);
  };

  const handleIncreasePlayer1Life = () => {
    setPlayer1Life(player1Life + 1);
  };

  const handleIncreasePlayer2Life = () => {
    setPlayer2Life(player2Life + 1);
  };

  const handleDecreasePlayer1Life = () => {
    setPlayer1Life(player1Life - 1);
  };

  const handleDecreasePlayer2Life = () => {
    setPlayer2Life(player2Life - 1);
  };

  const handleResetPlayer1Life = () => {
    setPlayer1Life(startingLifeTotal);
  };

  const handleResetPlayer2Life = () => {
    setPlayer2Life(startingLifeTotal);
  };

  return (
    <LifeCounterContext.Provider
      value={{
        player1: {
          life: player1Life,
          setLife: handleSetPlayer1Life,
          increaseLife: handleIncreasePlayer1Life,
          decreaseLife: handleDecreasePlayer1Life,
          resetLife: handleResetPlayer1Life,
        },
        player2: {
          life: player2Life,
          setLife: handleSetPlayer2Life,
          increaseLife: handleIncreasePlayer2Life,
          decreaseLife: handleDecreasePlayer2Life,
          resetLife: handleResetPlayer2Life,
        },
      }}
    >
      {children}
    </LifeCounterContext.Provider>
  );
}
