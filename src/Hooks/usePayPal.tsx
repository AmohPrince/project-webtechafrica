import { useEffect, useState } from "react";

type ClientTokenResponse = {
  client_token: string;
  expires_in: number;
};

export const usePaypal = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [clientTokenResponse, setClientTokenResponse] =
    useState<ClientTokenResponse | null>(null);
  const [errors, setErrors] = useState<any[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const token = await getAccessToken();
        setAccessToken(token);
      } catch (err) {
        setErrors((prevErrors) => [...prevErrors, err]);
      }
    };

    fetchAccessToken();
  }, []);

  useEffect(() => {
    const fetchClientToken = async () => {
      if (accessToken) {
        setIsLoading(true);
        try {
          const token = await getClientToken(accessToken);
          setClientTokenResponse(token);
        } catch (err) {
          setErrors((prevErrors) => [...prevErrors, err]);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchClientToken();
  }, [accessToken]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const fetchClientToken = async () => {
      if (accessToken) {
        setIsLoading(true);
        try {
          const token = await getClientToken(accessToken);
          setClientTokenResponse(token);
          const delay = token.expires_in * 1000; // Convert to milliseconds
          timeoutId = setTimeout(fetchClientToken, delay);
        } catch (err) {
          setErrors((prevErrors) => [...prevErrors, err]);
        } finally {
          setIsLoading(false);
        }
      }
    };

    if (clientTokenResponse) {
      const delay = clientTokenResponse.expires_in * 1000; // Convert to milliseconds
      timeoutId = setTimeout(fetchClientToken, delay);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [accessToken, clientTokenResponse]);

  return {
    isLoading,
    clientTokenResponse,
    errors,
  };
};

const getClientToken = async (
  accessToken: string
): Promise<ClientTokenResponse> => {
  const paypalApiUrl =
    "https://api-m.sandbox.paypal.com/v1/identity/generate-token";
  const customerId = "YOUR_CUSTOMER_ID"; // Replace with your actual customer ID
  const actorId = "YOUR_ACTOR_ID"; // Replace with your actual actor ID

  const requestBody = {
    customer_id: customerId,
    actor_id: actorId,
  };

  try {
    const response = await fetch(paypalApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error("Failed to retrieve client token");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error retrieving client token:", error);
    throw error;
  }
};

const getAccessToken = async (): Promise<string> => {
  const paypalApiUrl = "https://api-m.sandbox.paypal.com/v1/oauth2/token";
  const clientId = process.env.REACT_APP_PAYPAL_CLIENT_ID;
  const secret = process.env.REACT_APP_PAYPAL_SECRET;

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

    if (!response.ok) {
      throw new Error("Failed to retrieve access token");
    }

    const responseData = await response.json();
    const accessToken = responseData.access_token;
    return accessToken;
  } catch (error) {
    console.error("Error retrieving access token:", error);
    throw error;
  }
};
