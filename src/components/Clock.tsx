import clsx from "clsx";

export function Clock({
  minutes,
  seconds,
  className,
}: {
  minutes: number;
  seconds: number;
  className?: string;
}) {
  return (
    <div className={clsx("text-xl font-bold", className)}>
      {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0",
      )}`}
    </div>
  );
}
