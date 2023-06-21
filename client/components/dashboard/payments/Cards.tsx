import { useAuth } from "@/hooks/useAuth";
import { useGlobalData } from "@/hooks/useGlobalData";
import { useContext, useEffect } from "react";
import { CardInfo } from "./CardInfo";

export const Cards = () => {
  const { userData } = useAuth();
  const { setDashBoardTitleInfo } = useGlobalData();

  useEffect(() => {
    setDashBoardTitleInfo({
      h1: "Payments",
      sub: "Card Management",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full sm:w-1/4 bg-white rounded-xl border pb-4 flex flex-col">
      <p className="font-semibold border-b text-center py-4 px-3">Cards</p>
      {userData?.cards ? (
        userData.cards.map((card, i) => <CardInfo card={card} key={i} />)
      ) : (
        <p className="text-sm text-gray-500 text-center mx-4 my-4">
          You’ve not added any payment method yet
        </p>
      )}
    </div>
  );
};
