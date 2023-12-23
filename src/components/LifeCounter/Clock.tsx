import "./clock.css";

export function Clock({
  minutes,
  seconds,
}: {
  minutes: number;
  seconds: number;
}) {
  return (
    <div className="clock text">
      {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0",
      )}`}
    </div>
  );
}
