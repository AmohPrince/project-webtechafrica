import { useContext, useEffect } from "react";
import { useAuth } from "../../../Hooks/UseAuth";
import { globalData } from "../../../Pages/DashBoard";
import PrimaryButton from "../../PrimaryButton";
import { CardInfo } from "./CardInfo";

export const Cards = ({
  setShowPaymentMethodsModal,
  setActiveSmallScreenTab,
}: {
  setShowPaymentMethodsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveSmallScreenTab: React.Dispatch<
    React.SetStateAction<"cards" | "payment-methods" | "transactions">
  >;
}) => {
  const { user } = useAuth();
  const { setDashBoardTitleInfo } = useContext(globalData);

  useEffect(() => {
    setDashBoardTitleInfo({
      h1: "Payments",
      sub: "Card Management",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col w-full sm:w-1/4">
      <div className="w-full bg-white rounded-xl border pb-4 flex flex-col">
        <p className="font-semibold border-b text-center py-4 px-3">Cards</p>
        {user?.cards ? (
          user.cards.map((card) => <CardInfo card={card} />)
        ) : (
          <p className="text-sm text-gray-500 text-center mx-4 my-4">
            You’ve not added any payment method yet
          </p>
        )}
        <PrimaryButton
          text="Add Payment Method"
          className="hover:scale-100 mx-auto sm:ml-auto mt-5"
          onClick={() =>
            window.innerWidth < 768
              ? setActiveSmallScreenTab("payment-methods")
              : setShowPaymentMethodsModal(true)
          }
        />
      </div>
    </div>
  );
};
