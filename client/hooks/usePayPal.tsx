import { inProduction } from "@/util/utilities";
import { useEffect, useState } from "react";

type ClientTokenResponse = {
  client_token: string;
  expires_in: number;
};

const urls = {
  sandbox: "https://api-m.sandbox.paypal.com",
  production: "https://api-m.paypal.com",
};

let baseURL = urls.sandbox;

if (inProduction) {
  baseURL = urls.production;
}

export const usePaypal = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [clientTokenResponse, setClientTokenResponse] =
    useState<ClientTokenResponse | null>(null);
  const [errors, setErrors] = useState<any>(null);

  const fetchClientToken = async () => {
    setIsLoading(true);
    try {
      const token = await getClientToken();
      setClientTokenResponse(token);
    } catch (err) {
      setErrors(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchClientToken();
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    if (clientTokenResponse) {
      const delay = clientTokenResponse.expires_in * 1000; // Convert to milliseconds
      timeoutId = setTimeout(fetchClientToken, delay);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [clientTokenResponse]);

  return {
    isLoading,
    clientTokenResponse,
    errors,
  };
};

const getClientToken = async (): Promise<ClientTokenResponse> => {
  const paypalApiUrl = `${baseURL}/v1/identity/generate-token`;
  const accessToken = await getAccessToken();

  try {
    const response = await fetch(paypalApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.error("Error retrieving client token:", error);
    throw error;
  }
};

const getAccessToken = async (): Promise<string> => {
  const paypalApiUrl = `${baseURL}
  `;
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const secret = process.env.NEXT_PUBLIC_PAYPAL_SECRET;

  const requestBody = "grant_type=client_credentials";
  const authString = `${clientId}:${secret}`;
  const encodedAuthString = btoa(authString);

  try {
    const response = await fetch(paypalApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        "Accept-Language": "en_US",
        Authorization: `Basic ${encodedAuthString}`,
      },
      body: requestBody,
    });

    const responseData = await response.json();
    return responseData.access_token;
  } catch (error) {
    console.error("Error retrieving access token:", error);
    throw error;
  }
};
