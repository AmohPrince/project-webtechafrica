import React from "react";

export const Logo = ({
  color,
  className,
}: {
  color: string;
  className?: string;
}) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 191.000000 172.000000"
      preserveAspectRatio="xMidYMid meet"
      className={`w-10 h-10 ${className}`}
    >
      <g
        transform="translate(0.000000,172.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M1190 1248 l0 -240 108 101 c59 55 168 159 242 230 l135 129 -65 6
    c-36 3 -145 7 -242 10 l-178 4 0 -240z"
        />
        <path
          d="M1069 1368 c-42 -46 -140 -150 -219 -233 l-144 -150 219 -3 c120 -1
    220 -1 222 1 2 2 2 108 1 236 l-3 232 -76 -83z"
        />
        <path
          d="M1584 1324 c-74 -70 -70 -70 64 11 46 27 60 40 50 46 -27 18 -47 7
    -114 -57z"
        />
        <path
          d="M420 1160 l0 -180 113 0 113 0 53 54 53 53 -114 126 -113 126 -52 1
    -53 0 0 -180z"
        />
        <path
          d="M325 1265 l-49 -45 52 0 52 0 0 45 c0 25 -1 45 -2 45 -2 -1 -25 -21
    -53 -45z"
        />
        <path
          d="M601 778 c277 -291 347 -363 351 -358 5 6 188 507 188 515 0 3 -156
    5 -346 5 l-346 0 153 -162z"
        />
        <path
          d="M1037 531 c-59 -162 -106 -295 -105 -296 23 -17 211 -116 214 -112 2
    2 3 161 2 353 l-3 349 -108 -294z"
        />
      </g>
    </svg>
  );
};
