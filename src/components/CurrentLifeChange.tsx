type CurrentLifeChangeProps = {
  currentLifeChange?: number;
};

export function CurrentLifeChange({
  currentLifeChange,
}: CurrentLifeChangeProps) {
  if (currentLifeChange === 0 || !currentLifeChange) {
    return null;
  }

  return (
    <p className={currentLifeChange > 0 ? "text-green-600" : "text-red-600"}>
      {currentLifeChange > 0 && "+"}
      {currentLifeChange}
    </p>
  );
}
