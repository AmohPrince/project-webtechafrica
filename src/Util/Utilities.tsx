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
