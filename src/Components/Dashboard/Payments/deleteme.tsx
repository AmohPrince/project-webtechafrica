// import {
//   PayPalScriptProvider,
//   PayPalHostedFieldsProvider,
//   PayPalHostedField,
//   usePayPalHostedFields,
// } from "@paypal/react-paypal-js";

// const SubmitPayment = () => {
//   // Here declare the variable containing the hostedField instance
//   const hostedFields = usePayPalHostedFields();

// //   const submitHandler = () => {
// //     if (!typeof hostedFields.submit !== "function") return; // validate that `submit()` exists before using it
// //     hostedFields
// //       .submit({
// //         // The full name as shown in the card and billing address
// //         cardholderName: "John Wick",
// //       })
// //       .then((order) => {
// //         fetch("/your-server-side-integration-endpoint/capture-payment-info")
// //           .then((response) => response.json())
// //           .then((data) => {
// //             // Inside the data you can find all the information related to the payment
// //           })
// //           .catch((err) => {
// //             // Handle any error
// //           });
// //       });
// //   };

//   return <button onClick={submitHandler}>Pay</button>;
// };

// export default function App() {
//   return (
//     // <PayPalScriptProvider
//     //   options={{
//     //     "client-id": "your-client-id",
//     //     "data-client-token": "your-data-client-token",
//     //   }}
//     // >
//     //   <PayPalHostedFieldsProvider
//     //     createOrder={() => {
//     //       // Here define the call to create and order
//     //       return fetch("/your-server-side-integration-endpoint/orders")
//     //         .then((response) => response.json())
//     //         .then((order) => order.id)
//     //         .catch((err) => {
//     //           // Handle any error
//     //         });
//     //     }}
//     //   >
//     //     <PayPalHostedField
//     //       id="card-number"
//     //       hostedFieldType="number"
//     //       options={{ selector: "#card-number" }}
//     //     />
//     //     <PayPalHostedField
//     //       id="cvv"
//     //       hostedFieldType="cvv"
//     //       options={{ selector: "#cvv" }}
//     //     />
//     //     <PayPalHostedField
//     //       id="expiration-date"
//     //       hostedFieldType="expirationDate"
//     //       options={{
//     //         selector: "#expiration-date",
//     //         placeholder: "MM/YY",
//     //       }}
//     //     />
//     //     <SubmitPayment />
//     //   </PayPalHostedFieldsProvider>
//     // </PayPalScriptProvider>
//   );
// }

// <div className="px-5">
//   <p className="mt-2 text-sm font-semibold">Card Name</p>
//   <p className="text-xs text-gray-500">Enter the name on the card</p>
//   <input
//     type="text"
//     className="w-full bg-gray-100 text-sm px-3 py-2 rounded-sm outline-none mt-2"
//   />
//   <p className="mt-2 text-sm font-semibold">Card Number</p>
//   <p className="text-xs text-gray-500">
//     Enter the 16-digit number on the card
//   </p>
//   <input
//     type="text"
//     className="w-full bg-gray-100 text-sm px-3 py-2 rounded-sm outline-none mt-2"
//   />
//   <div className="mt-2 flex justify-between">
//     <div className="w-[48%]">
//       <p className="mt-2 text-sm font-semibold">Expiry Date</p>
//       <p className="text-gray-500 text-xs">
//         Enter the expiration date on the card
//       </p>
//       <div className="flex justify-between">
//         <input
//           type="number"
//           className="w-[48%] bg-gray-100 text-sm px-3 py-2 rounded-sm outline-none mt-2"
//         />
//         <input
//           type="number"
//           className="w-[48%] bg-gray-100 text-sm px-3 py-2 rounded-sm outline-none mt-2"
//         />
//       </div>
//     </div>
//     <div className="w-[48%]">
//       <p className="mt-2 text-sm font-semibold">CVV</p>
//       <p className="text-gray-500 text-xs">
//         Enter the 3-4 digit on the card
//       </p>
//       <input
//         type="number"
//         className="w-full bg-gray-100 text-sm px-3 py-2 rounded-sm outline-none mt-2"
//       />
//     </div>
//   </div>
//   <PrivacyPolicy />
//   <PrimaryButton
//     text="Add Payment Method"
//     className="w-full my-6 hover:scale-100"
//   />
// </div>
