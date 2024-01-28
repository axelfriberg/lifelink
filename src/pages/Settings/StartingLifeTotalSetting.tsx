import { useSettings } from "@/hooks/useSettings.ts";
import { type ChangeEvent } from "react";

type StartingLifeTotalSettingProps = {
  className?: string;
};

export function StartingLifeTotalSetting({
  className,
}: StartingLifeTotalSettingProps) {
  const [{ startingLifeTotal }, setSettings] = useSettings();

  const handleStartingLifeTotalChange = (
    event: ChangeEvent<HTMLSelectElement>,
  ) => {
    setSettings((prev) => ({
      ...prev,
      startingLifeTotal: Number(event.target.value),
    }));
  };

  return (
    <div className={className}>
      <label>
        Starting life total
        <select
          value={startingLifeTotal}
          onChange={handleStartingLifeTotalChange}
        >
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
      </label>
    </div>
  );
}
