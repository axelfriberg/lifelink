import "./current-life-change.css"

type CurrentLifeChangeProps = {
  currentLifeChange: number;
};

export function CurrentLifeChange({
  currentLifeChange,
}: CurrentLifeChangeProps) {
  if (currentLifeChange === 0) {
    return null;
  }

  return (
    <p
      className={`text current-life-change ${
        currentLifeChange > 0 ? "positive-life" : "negative-life"
      }`}
    >
      {currentLifeChange > 0 && "+"}
      {currentLifeChange}
    </p>
  );
}
