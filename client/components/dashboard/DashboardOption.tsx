import {
  faCreditCard,
  faGear,
  faGears,
  faHourglassHalf,
  faLaptop,
  faWallet,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardOption = ({
  name,
  className,
  onClick,
}: {
  name: string;
  className?: string;
  onClick: () => void;
}) => {
  const pathname = usePathname();
  const lastPathNameSegment = getLastPathSegment(pathname);

  const isPurpleBg =
    lastPathNameSegment === name ||
    (pathname === "/dashboard" && name === "new-website");

  return (
    <Link
      className={`flex items-center py-3 px-4 ${
        isPurpleBg && "bg-primaryOne rounded-l-lg"
      } transition-all cursor-pointer ${className}`}
      href={`/dashboard/${name === "new-website" ? "" : name}`}
    >
      <div onClick={onClick}>
        <DashboardOptionLogo
          isActive={lastPathNameSegment === name}
          name={name}
        />
        <p
          className={`ml-2 font-semibold text-sm ${
            lastPathNameSegment === name && "text-white"
          }`}
        >
          {capitalizeName(name)}
        </p>
      </div>
    </Link>
  );
};

export default DashboardOption;

const capitalizeName = (str: string): string => {
  return str
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

const DashboardOptionLogo = ({
  name,
  isActive,
}: {
  name: string;
  isActive: boolean;
}) => {
  if (name === "dev-websites") {
    return (
      <FontAwesomeIcon
        icon={faGears}
        className={`w-5 mr-2 ${isActive ? "text-white" : ""}`}
      />
    );
  } else if (name === "active-websites") {
    return (
      <FontAwesomeIcon
        icon={faWandMagicSparkles}
        className={`w-5 mr-2 ${isActive ? "text-white" : ""}`}
      />
    );
  } else if (name === "payment") {
    return (
      <FontAwesomeIcon
        icon={faCreditCard}
        className={`w-5 mr-2 ${isActive ? "text-white" : ""}`}
      />
    );
  } else if (name === "new-website") {
    return (
      <FontAwesomeIcon
        icon={faLaptop}
        className={`w-5 mr-2 ${isActive ? "text-white" : ""}`}
      />
    );
  } else if (name === "pending-verification") {
    return (
      <FontAwesomeIcon
        icon={faHourglassHalf}
        className={`w-5 mr-2 ${isActive ? "text-white" : ""}`}
      />
    );
  } else if (name === "settings") {
    return (
      <FontAwesomeIcon
        icon={faGear}
        className={`w-5 mr-2 ${isActive ? "text-white" : ""}`}
      />
    );
  } else {
    return (
      <FontAwesomeIcon
        icon={faWallet}
        className={`w-5 mr-2 ${isActive ? "text-white" : ""}`}
      />
    );
  }
};

const getLastPathSegment = (pathname: string): string => {
  const segments = pathname.split("/");
  return segments[segments.length - 1];
};
