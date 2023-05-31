import GooglePayButton from "@google-pay/button-react";

export const GooglePay = () => {
  return (
    <>
      <p className="mt-2 text-sm font-semibold">G-PAY</p>
      <p className="text-xs text-gray-500 mb-2">
        Pay with your google account using your credit card, simple fast and
        secure!
      </p>
      <GooglePayButton
        environment="TEST"
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
            merchantId: "12345678901234567890",
            merchantName: "Demo Merchant",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "100.00",
            currencyCode: "USD",
            countryCode: "US",
          },
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log("load payment data", paymentRequest);
        }}
        buttonSizeMode="fill"
      />
    </>
  );
};
