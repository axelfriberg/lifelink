import { useSettings } from "@/hooks/useSettings.ts";
import { type ChangeEvent } from "react";

type MatchTimeLimitSettingProps = {
  className?: string;
};

const FORTY_MIN = String(40 * 60 * 1000);
const FIFTY_MIN = String(50 * 60 * 1000);

export function MatchTimeLimitSetting({
  className,
}: MatchTimeLimitSettingProps) {
  const [{ matchTimeLimit }, setSettings] = useSettings();

  const handleMatchTimeLimitChange = (
    event: ChangeEvent<HTMLSelectElement>,
  ) => {
    setSettings((prev) => ({
      ...prev,
      matchTimeLimit: Number(event.target.value),
    }));
  };

  return (
    <div className={className}>
      <label>
        Match Time Limit
        <select value={matchTimeLimit} onChange={handleMatchTimeLimitChange}>
          <option value={FORTY_MIN}>40 Minutes</option>
          <option value={FIFTY_MIN}>50 Minutes</option>
        </select>
      </label>
    </div>
  );
}
