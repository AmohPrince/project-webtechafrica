import axios from "axios";

export const checkDomainAvailability = async (
  domainName: string
): Promise<boolean> => {
  const options = {
    method: "GET",
    url: "https://domain-checker7.p.rapidapi.com/whois",
    params: {
      domain: domainName,
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "domain-checker7.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.available;
  } catch (error) {
    return await checkWithOptionTwo(domainName);
  }
};

const checkWithOptionTwo = async (domainName: string): Promise<boolean> => {
  const options = {
    method: "GET",
    url: "https://whois40.p.rapidapi.com/whois",
    params: {
      q: domainName,
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "whois40.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    if (Object.keys(response.data).length === 1) {
      return true;
    }
  } catch (error) {
    return false;
  }
  return false;
};
