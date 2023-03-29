import React from "react";
import PrimaryButton from "./PrimaryButton";
import PrivacyPolicy from "./PrivacyPolicy";

// const ProductDisplay = () => (
//   <section>
//     <div className="product">
//       <Logo />
//       <div className="description">
//         <h3>Starter plan</h3>
//         <h5>$20.00 / month</h5>
//       </div>
//     </div>
//     <form action="/create-checkout-session" method="POST">
//       {/* Add a hidden field with the lookup_key of your Price */}
//       <input type="hidden" name="lookup_key" value="{{PRICE_LOOKUP_KEY}}" />
//       <button id="checkout-and-portal-button" type="submit">
//         Checkout
//       </button>
//     </form>
//   </section>
// );

// const SuccessDisplay = ({ sessionId }: any) => {
//   return (
//     <section>
//       <div className="product Box-root">
//         <Logo />
//         <div className="description Box-root">
//           <h3>Subscription to starter plan successful!</h3>
//         </div>
//       </div>
//       <form action="/create-portal-session" method="POST">
//         <input
//           type="hidden"
//           id="session-id"
//           name="session_id"
//           value={sessionId}
//         />
//         <button id="checkout-and-portal-button" type="submit">
//           Manage your billing information
//         </button>
//       </form>
//     </section>
//   );
// };
// const Message = ({ message }: any) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );

// export function Main() {
//   let [message, setMessage] = useState("");
//   let [success, setSuccess] = useState(false);
//   let [sessionId, setSessionId] = useState("");

//   useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);

//     if (query.get("success")) {
//       setSuccess(true);
//       setSessionId(query.get("session_id")!);
//     }

//     if (query.get("canceled")) {
//       setSuccess(false);
//       setMessage(
//         "Order canceled -- continue to shop around and checkout when you're ready."
//       );
//     }
//   }, [sessionId]);

//   if (!success && message === "") {
//     return <ProductDisplay />;
//   } else if (success && sessionId !== "") {
//     return <SuccessDisplay sessionId={sessionId} />;
//   } else {
//     return <Message message={message} />;
//   }
// }

// const Logo = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     xmlnsXlink="http://www.w3.org/1999/xlink"
//     width="14px"
//     height="16px"
//     viewBox="0 0 14 16"
//     version="1.1"
//   >
//     <defs />
//     <g id="Flow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
//       <g
//         id="0-Default"
//         transform="translate(-121.000000, -40.000000)"
//         fill="#E184DF"
//       >
//         <path
//           d="M127,50 L126,50 C123.238576,50 121,47.7614237 121,45 C121,42.2385763 123.238576,40 126,40 L135,40 L135,56 L133,56 L133,42 L129,42 L129,56 L127,56 L127,50 Z M127,48 L127,42 L126,42 C124.343146,42 123,43.3431458 123,45 C123,46.6568542 124.343146,48 126,48 L127,48 Z"
//           id="Pilcrow"
//         />
//       </g>
//     </g>
//   </svg>
// );
const CreditCardInput = () => {
  return (
    <div className="px-5">
      <p className="mt-2 text-sm font-semibold">Card Name</p>
      <p className="text-xs text-gray-500">Enter the name on the card</p>
      <input
        type="text"
        className="w-full bg-gray-100 text-sm px-3 py-2 rounded-sm outline-none mt-2"
      />
      <p className="mt-2 text-sm font-semibold">Card Number</p>
      <p className="text-xs text-gray-500">
        Enter the 16-digit number on the card
      </p>
      <input
        type="text"
        className="w-full bg-gray-100 text-sm px-3 py-2 rounded-sm outline-none mt-2"
      />
      <div className="mt-2 flex justify-between">
        <div className="w-[48%]">
          <p className="mt-2 text-sm font-semibold">Expiry Date</p>
          <p className="text-gray-500 text-xs">
            Enter the expiration date on the card
          </p>
          <div className="flex justify-between">
            <input
              type="number"
              className="w-[48%] bg-gray-100 text-sm px-3 py-2 rounded-sm outline-none mt-2"
            />
            <input
              type="number"
              className="w-[48%] bg-gray-100 text-sm px-3 py-2 rounded-sm outline-none mt-2"
            />
          </div>
        </div>
        <div className="w-[48%]">
          <p className="mt-2 text-sm font-semibold">CVV</p>
          <p className="text-gray-500 text-xs">
            Enter the 3-4 digit on the card
          </p>
          <input
            type="number"
            className="w-full bg-gray-100 text-sm px-3 py-2 rounded-sm outline-none mt-2"
          />
        </div>
      </div>
      <PrivacyPolicy />
      <PrimaryButton
        text="Add Payment Method"
        className="w-full my-6 hover:scale-100"
      />
    </div>
  );
};

export default CreditCardInput;
