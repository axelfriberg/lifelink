export function Clock({
  minutes,
  seconds,
}: {
  minutes: number;
  seconds: number;
}) {
  return (
    <div className="text-lg font-bold">
      {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0",
      )}`}
    </div>
  );
}
