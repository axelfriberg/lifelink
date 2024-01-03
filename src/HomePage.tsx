import lifeLinkLogo from "./assets/lifelink_logo.svg";
import { Link } from "./components/Link";

export function HomePage() {
  return (
    <div className="p-2 flex h-full">
      <div className="mx-auto my-auto flex flex-col items-center gap-4">
        <img src={lifeLinkLogo} alt="Lifelink logo" width={100} height={100} />
        <h1 className="text-5xl font-bold">Lifelink</h1>
        <p>Magic: The Gathering life counter </p>
        <Link asButton to="/life-counter">
          Start Game
        </Link>
      </div>
    </div>
  );
}
