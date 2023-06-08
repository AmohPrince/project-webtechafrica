import { assets } from "../Assets/assets";

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

// export function getLighterColor(hexColor: string): string {
//   // Convert the hex color code to RGB format
//   let r = parseInt(hexColor.slice(1, 3), 16);
//   let g = parseInt(hexColor.slice(3, 5), 16);
//   let b = parseInt(hexColor.slice(5, 7), 16);

//   // Calculate the lighter RGB values (increase each channel by the same amount)
//   r = Math.min(r + 30, 255);
//   g = Math.min(g + 30, 255);
//   b = Math.min(b + 30, 255);

//   // Convert the new RGB values back to hex format
//   const newHexColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

//   return newHexColor;
// }

export function getLighterColor(hexColor: string): string {
  // Remove the leading "#" character from the input string
  hexColor = hexColor.substring(1);

  // Convert the hex color code to an RGB value
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Compute a new RGB value that is 80% of the original value
  const newR = Math.round(r + (255 - r) * 0.8);
  const newG = Math.round(g + (255 - g) * 0.8);
  const newB = Math.round(b + (255 - b) * 0.8);

  // Convert the new RGB value back to a hex color code and return it
  return (
    "#" + ((newR << 16) | (newG << 8) | newB).toString(16).padStart(6, "0")
  );
}

export const isSmallScreen = () => {
  return window.innerWidth <= 768;
};

export const getCardTypeIcon = (type: string): string | undefined => {
  if (type.toLowerCase() === "mastercard") {
    return assets.mastercard;
  }
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
  // Get the current time as a timestamp
  const currentTimeStamp = new Date().getTime();

  // Calculate the timestamp for three days from now (in milliseconds)
  const threeDaysInMilliseconds = 3 * 24 * 60 * 60 * 1000;
  const timestampForThreeDaysFromNow =
    currentTimeStamp + threeDaysInMilliseconds;

  // Return the timestamp for three days from now
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

export const formatDate = (timestamp: number): string => {
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

export const formatTime = (timestamp: number): string => {
  // Convert timestamp to milliseconds
  var date = new Date(timestamp);

  // Extract time components
  var hours = date.getHours();
  var minutes = date.getMinutes();

  // Pad single-digit hours and minutes with leading zeros if necessary
  var formattedHours = hours < 10 ? "0" + hours : hours;
  var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  // Construct the time string in "HH:MM" format
  var time = formattedHours + ":" + formattedMinutes;

  return time;
};

export const toTheNearestHundredth = (num: number): number => {
  return Math.ceil(num / 100) * 100;
};
