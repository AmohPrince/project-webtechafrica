import axios from "axios";

export const checkDomainAvailability = async (domainName: string) => {
  const options = {
    method: "GET",
    url: "https://whois-by-api-ninjas.p.rapidapi.com/v1/whois",
    params: {
      domain: domainName,
    },
    headers: {
      "X-RapidAPI-Key": "6445ce28c1msh4b2afb9dc1a38bbp17a68bjsn97511bcb4bbf",
      "X-RapidAPI-Host": "whois-by-api-ninjas.p.rapidapi.com",
    },
  };
  const response = await axios.request(options);
  return response.data;
};
