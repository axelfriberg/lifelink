import React, { createContext, useState } from "react";

type PlayerLife = {
  life: number;
  setLife: (life: number) => void;
  increaseLife: () => void;
  decreaseLife: () => void;
};

export type LifeCounterContextType = {
  player1: PlayerLife;
  player2: PlayerLife;
};

export const LifeCounterContext = createContext<LifeCounterContextType>({
  player1: {
    life: 20,
    setLife: () => {},
    increaseLife: () => {},
    decreaseLife: () => {},
  },
  player2: {
    life: 20,
    setLife: () => {},
    increaseLife: () => {},
    decreaseLife: () => {},
  },
});

export function LifeCounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [player1Life, setPlayer1Life] = useState(20);
  const [player2Life, setPlayer2Life] = useState(20);

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

  return (
    <LifeCounterContext.Provider
      value={{
        player1: {
          life: player1Life,
          setLife: handleSetPlayer1Life,
          increaseLife: handleIncreasePlayer1Life,
          decreaseLife: handleDecreasePlayer1Life,
        },
        player2: {
          life: player2Life,
          setLife: handleSetPlayer2Life,
          increaseLife: handleIncreasePlayer2Life,
          decreaseLife: handleDecreasePlayer2Life,
        },
      }}
    >
      {children}
    </LifeCounterContext.Provider>
  );
}
