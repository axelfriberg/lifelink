import { Link } from "../components/Link";
import { FaArrowLeft } from "react-icons/fa";
import { useSettings } from "../hooks/useSettings.ts";
import { type ChangeEvent } from "react";

export function SettingsPage() {
  const [{ startingLifeTotal }, setSettings] = useSettings();

  const handleStartingLifeTotalChange = (
    event: ChangeEvent<HTMLSelectElement>,
  ) => {
    setSettings({ startingLifeTotal: Number(event.target.value) });
  };

  return (
    <div className="p-2 h-full">
      <Link to="/" className="flex items-center gap-2">
        <FaArrowLeft />
        Back
      </Link>
      <div className="flex">
        <div className="mx-auto">
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
      </div>
    </div>
  );
}
