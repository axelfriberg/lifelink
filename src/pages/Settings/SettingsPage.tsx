import { Link } from "@/components/Link";
import { FaArrowLeft } from "react-icons/fa";
import { StartingLifeTotalSetting } from "./StartingLifeTotalSetting.tsx";
import { MatchTimeLimitSetting } from "./MatchTimeLimitSetting.tsx";

export function SettingsPage() {
  return (
    <div className="p-2 h-full">
      <Link to="/" className="flex items-center gap-2">
        <FaArrowLeft />
        Back
      </Link>
      <StartingLifeTotalSetting />
      <MatchTimeLimitSetting />
    </div>
  );
}
