import GooglePayButton from "@google-pay/button-react";
import { useGlobalData } from "../../../Hooks/useGlobalData";

export const GooglePay = () => {
  const { showNotification } = useGlobalData();
  const { price } = useGlobalData();

  return (
    <>
      <p className="mt-2 text-sm font-semibold">G-PAY</p>
      <p className="text-xs text-gray-500 mb-2">
        Pay with your google account using your credit card, simple fast and
        secure!
      </p>
      <GooglePayButton
        environment="PRODUCTION"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "BCR2DN4TRLJKV6IB",
            merchantName: "WebTech Africa",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: price.basic.toString(),
            currencyCode: "USD",
            countryCode: "US",
          },
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log("load payment data", paymentRequest);
        }}
        buttonSizeMode="fill"
        onCancel={() =>
          showNotification("You cancelled the GPay subscription", "error")
        }
        onError={() =>
          showNotification("An error might have occurred :-(", "error")
        }
      />
    </>
  );
};
