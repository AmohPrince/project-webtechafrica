export const BASIC_FEATURES: {
  category: "Web Development" | "Social Media and Ads" | "Online business";
  text: string;
}[] = [
  {
    category: "Web Development",
    text: "<sp>Unlimited customer support",
  },
  {
    category: "Web Development",
    text: "Custom domain name",
  },
  {
    category: "Web Development",
    text: "Hosting",
  },
  {
    category: "Web Development",
    text: "<sp>Completed website <sp>design and development",
  },
  {
    category: "Web Development",
    text: "Free <sp>SSL certificate",
  },
  {
    category: "Online business",
    text: "Fully <sp>designed and <sp>deployed web shop",
  },
  {
    category: "Online business",
    text: "Free <sp>one month <sp>ad designs",
  },
];

export const PREMIUM_FEATURES: {
  category: "Web Development" | "Social Media and Ads" | "Online business";
  text: string;
}[] = [
  ...BASIC_FEATURES,
  {
    category: "Social Media and Ads",
    text: "Social <sp>media management",
  },
  {
    category: "Online business",
    text: "Fully <sp>managed online sales and <sp>delivery",
  },
  {
    category: "Online business",
    text: "<sp>Payments covered!",
  },
];

export const inProduction = process.env.NEXT_PUBLIC_IN_PRODUCTION === "true";

export const backendURL = inProduction
  ? "https://webtechafrica.herokuapp.com"
  : "http://localhost:8080";

export const email = "webtechnologiesafrica@gmail.com";

export const getBaseUrl = (pathname: string): string => {
  let baseUrl: string = "/";

  for (let i = 1; i < pathname.length; i++) {
    const char = pathname[i];
    if (char !== "/") {
      baseUrl = baseUrl + char;
    } else {
      return baseUrl;
    }
  }

  return pathname;
};

export const getNoSpaceLowerCaseString = (str: string): string => {
  return str.replace(/\s/g, "").toLowerCase();
};

export function extractHostname(url: string): string {
  const startIndex = url.indexOf("://") + 3;
  const endIndex = url.indexOf("/", startIndex);
  return url.substring(startIndex, endIndex);
}

export function getLighterColor(hexColor: string): string {
  hexColor = hexColor.substring(1);

  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  const newR = Math.round(r + (255 - r) * 0.8);
  const newG = Math.round(g + (255 - g) * 0.8);
  const newB = Math.round(b + (255 - b) * 0.8);

  return (
    "#" + ((newR << 16) | (newG << 8) | newB).toString(16).padStart(6, "0")
  );
}

export const isSmallScreen = () => {
  return window.innerWidth <= 768;
};

export const getCardTypeIcon = (type: string): string => {
  if (type.toLowerCase() === "mastercard") {
    return "/MasterCard.svg";
  }
  return "";
};

export const formatDateFromTimestamp = (
  timestamp: string | undefined
): string => {
  if (!timestamp) {
    return "unknown date";
  }
  const date = new Date(timestamp);
  const day = date.toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });
  const ordinal = getOrdinalSuffix(date.getDate());
  return `${ordinal} ${day}`;
};

function getOrdinalSuffix(day: number): string {
  if (day > 3 && day < 21) {
    return `${day}th`;
  } else {
    switch (day % 10) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  }
}

export const LOCAL_STORAGE_KEYS = {
  USER: "user",
  LAST_SIGN_IN_DATE: "last-sign-in-date",
  USER_DATA: "user-data",
  COUNTRIES: "countries",
};

export const getTimestampForThreeDaysFromNow = (): number => {
  const currentTimeStamp = new Date().getTime();

  const threeDaysInMilliseconds = 3 * 24 * 60 * 60 * 1000;
  const timestampForThreeDaysFromNow =
    currentTimeStamp + threeDaysInMilliseconds;

  return timestampForThreeDaysFromNow;
};

export const getYearly = (amount: number) => {
  return ((80 / 100) * (amount * 12)).toFixed(0);
};

export const scrollToTop = () => {
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: 0,
  });
};

export const formatDate = (timestamp: string | number): string => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  let daySuffix = "th";
  if (day === 1 || day === 21 || day === 31) {
    daySuffix = "st";
  } else if (day === 2 || day === 22) {
    daySuffix = "nd";
  } else if (day === 3 || day === 23) {
    daySuffix = "rd";
  }

  return `${day}${daySuffix} ${month} ${year}`;
};

export const formatTime = (timestamp: string | number): string => {
  var date = new Date(timestamp);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var formattedHours = hours < 10 ? "0" + hours : hours;
  var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  var time = formattedHours + ":" + formattedMinutes;

  return time;
};

export const toTheNearestHundredth = (num: number): number => {
  return Math.ceil(num / 100) * 100;
};
