import lifeLinkLogo from "../assets/lifelink_logo.svg";
import { Link } from "../components/Link";
import { FaGithub } from "react-icons/fa";

export function HomePage() {
  return (
    <div className="p-2 flex h-full">
      <div className="mx-auto my-auto flex flex-col items-center gap-4">
        <img src={lifeLinkLogo} alt="Lifelink logo" width={100} height={100} />
        <h1 className="text-5xl font-bold">Lifelink</h1>
        <p>Magic: The Gathering life counter </p>
        <Link asButton to="/match">
          Start Match
        </Link>
        <Link asButton to="/settings">
          Settings
        </Link>
      </div>
      <a
        href="https://github.com/axelfriberg/lifelink"
        aria-label="Github page"
        className="absolute bottom-0 right-0 p-2"
      >
        <FaGithub size={36} />
      </a>
    </div>
  );
}
