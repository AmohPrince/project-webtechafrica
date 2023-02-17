import React from "react";
import { Link, useLocation } from "react-router-dom";

const DashboardOption = ({ name }: { name: string }) => {
  const { pathname } = useLocation();
  const lastPathNameSegment = getLastPathSegment(pathname);

  return (
    <Link
      className={`flex items-center py-3 px-4 ${
        lastPathNameSegment === name && "bg-primaryOne rounded-l-lg"
      } transition-all cursor-pointer`}
      to={name}
    >
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
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196 17.021 0 16.55 0 16V2C0 1.45 0.196 0.979 0.588 0.587C0.979333 0.195667 1.45 0 2 0H16C16.55 0 17.021 0.195667 17.413 0.587C17.8043 0.979 18 1.45 18 2V4H20V6H18V8H20V10H18V12H20V14H18V16C18 16.55 17.8043 17.021 17.413 17.413C17.021 17.8043 16.55 18 16 18H2ZM4 14H9V10H4V14ZM10 7H14V4H10V7ZM4 9H9V4H4V9ZM10 14H14V8H10V14Z"
          fill={isActive ? "white" : "#525063"}
        />
      </svg>
    );
  } else if (name === "active-websites") {
    return (
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 15.5C2.9 15.5 1.95833 15.1083 1.175 14.325C0.391667 13.5417 0 12.6 0 11.5C0 10.4 0.391667 9.45833 1.175 8.675C1.95833 7.89167 2.9 7.5 4 7.5C5.1 7.5 6.04167 7.89167 6.825 8.675C7.60833 9.45833 8 10.4 8 11.5C8 12.6 7.60833 13.5417 6.825 14.325C6.04167 15.1083 5.1 15.5 4 15.5ZM13.5 11.5C11.9667 11.5 10.6667 10.9667 9.6 9.9C8.53333 8.83333 8 7.53333 8 6C8 4.46667 8.53333 3.16667 9.6 2.1C10.6667 1.03333 11.9667 0.5 13.5 0.5C15.0333 0.5 16.3333 1.03333 17.4 2.1C18.4667 3.16667 19 4.46667 19 6C19 7.53333 18.4667 8.83333 17.4 9.9C16.3333 10.9667 15.0333 11.5 13.5 11.5ZM11.5 18.5C10.6667 18.5 9.95833 18.2083 9.375 17.625C8.79167 17.0417 8.5 16.3333 8.5 15.5C8.5 14.6667 8.79167 13.9583 9.375 13.375C9.95833 12.7917 10.6667 12.5 11.5 12.5C12.3333 12.5 13.0417 12.7917 13.625 13.375C14.2083 13.9583 14.5 14.6667 14.5 15.5C14.5 16.3333 14.2083 17.0417 13.625 17.625C13.0417 18.2083 12.3333 18.5 11.5 18.5Z"
          fill={isActive ? "white" : "#525063"}
        />
      </svg>
    );
  } else if (name === "payment") {
    return (
      <svg
        width="20"
        height="17"
        viewBox="0 0 20 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 16.5C1.45 16.5 0.979333 16.3043 0.588 15.913C0.196 15.521 0 15.05 0 14.5V2.5C0 1.95 0.196 1.47933 0.588 1.088C0.979333 0.696 1.45 0.5 2 0.5H18C18.55 0.5 19.021 0.696 19.413 1.088C19.8043 1.47933 20 1.95 20 2.5V14.5C20 15.05 19.8043 15.521 19.413 15.913C19.021 16.3043 18.55 16.5 18 16.5H2ZM2 8.5H18V4.5H2V8.5Z"
          fill={isActive ? "white" : "#525063"}
        />
      </svg>
    );
  } else {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.45 12.975L11.75 14.275C11.9333 14.4583 12.1667 14.55 12.45 14.55C12.7333 14.55 12.9667 14.4583 13.15 14.275L16 11.425V12.025C16 12.3083 16.096 12.5417 16.288 12.725C16.4793 12.9083 16.7167 13 17 13C17.2833 13 17.5207 12.904 17.712 12.712C17.904 12.5207 18 12.2833 18 12V9C18 8.71667 17.904 8.479 17.712 8.287C17.5207 8.09567 17.2833 8 17 8H13.975C13.6917 8 13.4583 8.09567 13.275 8.287C13.0917 8.479 13 8.71667 13 9C13 9.28333 13.096 9.52067 13.288 9.712C13.4793 9.904 13.7167 10 14 10H14.575L12.45 12.15L11.15 10.85C10.9667 10.65 10.7333 10.55 10.45 10.55C10.1667 10.55 9.93333 10.65 9.75 10.85L6.7 13.9C6.5 14.0833 6.4 14.3167 6.4 14.6C6.4 14.8833 6.5 15.1167 6.7 15.3C6.88333 15.5 7.11667 15.6 7.4 15.6C7.68333 15.6 7.91667 15.5 8.1 15.3L10.45 12.975ZM5 21C4.45 21 3.979 20.8043 3.587 20.413C3.19567 20.021 3 19.55 3 19V5C3 4.45 3.19567 3.979 3.587 3.587C3.979 3.19567 4.45 3 5 3H19C19.55 3 20.021 3.19567 20.413 3.587C20.8043 3.979 21 4.45 21 5V19C21 19.55 20.8043 20.021 20.413 20.413C20.021 20.8043 19.55 21 19 21H5Z"
          fill={isActive ? "white" : "#525063"}
        />
      </svg>
    );
  }
};

const getLastPathSegment = (pathname: string): string => {
  const segments = pathname.split("/");
  return segments[segments.length - 1];
};
