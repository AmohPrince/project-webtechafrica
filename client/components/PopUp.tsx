import {
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import { useEffect } from "react";

export type PopUpInfoType = null | "success" | "error";

export type PopUpInfo = {
  showing: boolean;
  text: null | string;
  type: PopUpInfoType;
};

export const PopUp = ({
  popUpInfo,
  setPopUp,
  className,
}: {
  popUpInfo: PopUpInfo;
  setPopUp: React.Dispatch<React.SetStateAction<PopUpInfo>>;
  className?: string;
}) => {
  useEffect(() => {
    const id = setTimeout(() => {
      setPopUp({
        showing: false,
        text: null,
        type: null,
      });
    }, 3000);

    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <motion.div
      className={`border font-medium rounded-sm py-3 px-3 shadow-sm text-sm text-center mt-5 flex items-center fixed top-0 right-0 z-50 ${
        popUpInfo.type === "success"
          ? "border-green-500 bg-green-50"
          : "border-red-500 bg-red-50"
      } ${className}`}
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "keyframes" }}
      exit={{ x: 1000, opacity: 0 }}
    >
      <FontAwesomeIcon
        icon={
          popUpInfo.type === "success" ? faCircleCheck : faCircleExclamation
        }
        className={`cursor-pointer mr-3 h-5 ${
          popUpInfo.type === "success" ? "text-green-500" : "text-red-500"
        }`}
        onClick={() =>
          setPopUp({
            showing: false,
            text: null,
            type: null,
          })
        }
      />
      <p>{popUpInfo.text}</p>
      <div className="h-[2px] transition" />
    </motion.div>
  );
};
