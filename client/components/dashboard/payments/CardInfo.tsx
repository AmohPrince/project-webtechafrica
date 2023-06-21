import { useAuth } from "@/hooks/useAuth";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { addOrUpdateUserDataInDB } from "../../../Firebase/firestore";
import { Card, UserData } from "../../../Types/Global";
import { getCardTypeIcon } from "../../../Util/Utilities";

export const CardInfo = ({ card }: { card: Card }) => {
  const { user, userData } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleRemovingCard = async () => {
    const updatedUser: UserData = {
      ...userData!,
      cards: userData?.cards?.filter(
        (savedCard) => savedCard.endsIn !== card.endsIn
      ),
    };
    setIsLoading(true);
    await addOrUpdateUserDataInDB(updatedUser, user?.uid!);
    setIsLoading(false);
  };
  return (
    <div className="py-4 px-2 mx-2 shadow-md my-4 flex flex-col rounded-md">
      <div className="flex items-start">
        <Image src={getCardTypeIcon(card.type)} alt={`${card.type}'s logo `} />
        <div className="ml-3 text-sm">
          <p>
            {card.type} ending in {card.endsIn}
          </p>
          <p className="text-gray-500 text-xs">Expiry date {card.expiryDate}</p>
        </div>
      </div>
      <button
        className="text-xs py-2 px-4 rounded-full border border-primaryOne mt-3 ml-auto transition-all"
        onClick={handleRemovingCard}
        disabled={isLoading}
      >
        {isLoading ? (
          <FontAwesomeIcon
            icon={faCircleNotch}
            spin
            className="text-primaryOne"
          />
        ) : (
          "Remove Card"
        )}
      </button>
    </div>
  );
};
