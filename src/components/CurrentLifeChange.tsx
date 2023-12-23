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
      className={`text-xl ${
        currentLifeChange > 0 ? "text-green-600" : "text-red-600"
      }`}
    >
      {currentLifeChange > 0 && "+"}
      {currentLifeChange}
    </p>
  );
}
