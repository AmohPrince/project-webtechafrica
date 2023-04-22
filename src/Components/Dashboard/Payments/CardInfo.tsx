import { assets } from "../../../Assets/assets";
import { Card } from "../../../Types/Global";

export const CardInfo = ({ card }: { card: Card }) => {
  return (
    <div className="py-4 px-2 mx-2 shadow-md my-4 flex flex-col rounded-md">
      <div className="flex items-start">
        <img src={getCardTypeIcon(card.type)} alt={`${card.type}'s logo `} />
        <div className="ml-3 text-sm">
          <p>
            {card.type} ending in {card.endsIn}
          </p>
          <p className="text-gray-500 text-xs">Expiry date {card.expiryDate}</p>
        </div>
      </div>
      <button className="text-xs py-2 px-3 rounded-full border border-primaryOne mt-3 ml-auto">
        Remove Card
      </button>
    </div>
  );
};

const getCardTypeIcon = (type: string): string | undefined => {
  if (type.toLowerCase() === "mastercard") {
    return assets.mastercard;
  }
};
