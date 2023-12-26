import { STARTING_LIFE_TOTAL } from "../App";

type LifeHistoryProps = {
  lifeHistory: number[];
};

export function LifeHistory({ lifeHistory }: LifeHistoryProps) {
  function calculateChanges() {
    const result = [STARTING_LIFE_TOTAL];
    let currentNumber = STARTING_LIFE_TOTAL;

    for (let i = 0; i < lifeHistory.length; i++) {
      currentNumber += lifeHistory[i];
      result.push(currentNumber);
    }

    return result;
  }

  return (
    <ul>
      {calculateChanges().map((value, index, array) => {
        const lifeChange = lifeHistory[index - 1];
        const isPositive = lifeChange > 0;
        return (
          <li key={index}>
            {index === 0
              ? STARTING_LIFE_TOTAL
              : `${array[index - 1]}${isPositive ? "+" : ""}${
                  lifeHistory[index - 1]
                } = ${value}`}
          </li>
        );
      })}
    </ul>
  );
}
