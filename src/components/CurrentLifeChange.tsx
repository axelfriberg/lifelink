import clsx from "clsx";

type CurrentLifeChangeProps = {
  currentLifeChange?: number;
  className?: string;
};

export function CurrentLifeChange({
  currentLifeChange,
  className,
}: CurrentLifeChangeProps) {
  if (currentLifeChange === 0 || !currentLifeChange) {
    return null;
  }

  return (
    <div
      className={clsx(
        className,
        currentLifeChange > 0 && "text-green-600",
        currentLifeChange < 0 && "text-red-600",
      )}
    >
      {currentLifeChange > 0 && "+"}
      {currentLifeChange}
    </div>
  );
}
