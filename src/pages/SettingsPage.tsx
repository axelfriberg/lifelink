import { Link } from "../components/Link";
import { FaArrowLeft } from "react-icons/fa";
import { useStartingLifeTotal } from "../useStartingLifeTotal";

export function SettingsPage() {
  const [startingLifeTotal, setStartingLifeTotal] = useStartingLifeTotal();

  const handleStartingLifeTotalChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setStartingLifeTotal(Number(event.target.value));
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
