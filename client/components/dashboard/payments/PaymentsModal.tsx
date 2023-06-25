import { Overlay } from "@/components/Overlay";
import { useGlobalData } from "@/hooks/useGlobalData";
import { assets } from "@/public/assets";
import { isSmallScreen } from "@/util/utilities";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useContext, useEffect } from "react";
import { GooglePay } from "./GooglePay";
import { PayPalInput } from "./PayPalInput";

export const PaymentsModal = ({
  setShowPaymentMethodsModal,
  className,
  websiteURL,
}: {
  setShowPaymentMethodsModal: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  websiteURL: string;
}) => {
  const [selectingPaymentMethod, setSelectingPaymentMethod] = useState<
    "credit-card" | "paypal"
  >("paypal");

  const { setDashBoardTitleInfo } = useGlobalData();
  const { showNotification } = useGlobalData();

  useEffect(() => {
    if (isSmallScreen()) {
      setDashBoardTitleInfo({
        h1: "Payments",
        sub: "Add your preferred payment method",
      });
    }
  }, [setDashBoardTitleInfo]);

  return (
    <Overlay>
      <motion.div
        className={`flex flex-col flex-grow bg-white rounded-xl absolute center-absolutely border-primaryOne border-2 z-10 transition-all px-5 pb-2 w-4/5 md:w-1/2 ${className}`}
        // initial={{ y: -1000 }}
        // animate={{ y: 0 }}
        // exit={{ y: -1000 }}
        // transition={{ duration: 0.5, type: "spring" }}
      >
        <div className="py-3 border-b flex justify-between items-center">
          <p className="font-semibold">Payments</p>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setShowPaymentMethodsModal(false)}
            className="cursor-pointer text-white bg-primaryOne py-1 px-[6px] rounded-full"
            size="xs"
          />
        </div>
        <div className="py-2">
          <p className="text-sm font-semibold">Select payment method</p>
          <div className="flex gap-x-4 md:gap-x-2 mt-2">
            <div
              className={`border-primaryOne p-2 border rounded-sm flex items-center justify-center cursor-pointer w-1/2 ${
                selectingPaymentMethod === "paypal"
                  ? "text-white bg-primaryOne shadow-lg"
                  : ""
              }`}
              onClick={() => setSelectingPaymentMethod("paypal")}
            >
              <FontAwesomeIcon
                icon={faPaypal}
                className="transition-all duration-300"
              />
              <p className="text-xs ml-2 font-medium">Paypal</p>
            </div>
            <div
              onClick={() => showNotification("G-PAY coming soon", "error")}
              className={`border-primaryOne p-2 border rounded-sm flex items-center justify-center cursor-not-allowed w-1/2 ${
                selectingPaymentMethod === "credit-card"
                  ? "text-white bg-primaryOne shadow-lg"
                  : ""
              }`}
            >
              <Image src={assets.google} alt="Google" className="h-4 w-4" />
              <p className="text-xs ml-2 font-medium">G Pay</p>
            </div>
          </div>
        </div>
        {selectingPaymentMethod === "credit-card" ? (
          <GooglePay />
        ) : (
          <PayPalInput websiteURL={websiteURL} />
        )}
      </motion.div>
    </Overlay>
  );
};
