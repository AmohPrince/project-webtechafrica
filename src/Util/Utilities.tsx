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
