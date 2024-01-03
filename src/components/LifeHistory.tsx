import { useStartingLifeTotal } from "../useStartingLifeTotal";

type LifeHistoryProps = {
  lifeHistory: number[];
};

export function LifeHistory({ lifeHistory }: LifeHistoryProps) {
  const [startingLifeTotal] = useStartingLifeTotal();
  function calculateChanges() {
    const result = [startingLifeTotal];
    let currentNumber = startingLifeTotal;

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
              ? startingLifeTotal
              : `${array[index - 1]}${isPositive ? "+" : ""}${
                  lifeHistory[index - 1]
                } = ${value}`}
          </li>
        );
      })}
    </ul>
  );
}
