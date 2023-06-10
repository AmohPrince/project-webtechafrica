import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect } from "react";

export type PopUpInfo = {
  showing: boolean;
  text: null | string;
  type: null | "success" | "error";
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
        text: "An error occurred",
        type: "error",
      });
    }, 3000);

    return clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <motion.div
      className={`border font-medium rounded-sm py-3 px-3 shadow-sm text-sm text-center mt-5 flex items-center absolute top-0 right-0 z-50 ${
        popUpInfo.type === "success"
          ? "border-green-500 bg-green-50"
          : "border-red-500 bg-red-50"
      } ${className}`}
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, type: "spring" }}
    >
      <FontAwesomeIcon
        icon={faXmark}
        className="cursor-pointer mr-3"
        onClick={() =>
          setPopUp({
            showing: false,
            text: null,
            type: null,
          })
        }
      />
      <p>
        {popUpInfo.type === "success"
          ? "Hello " + popUpInfo.text + "!"
          : popUpInfo.text}
      </p>
      <div className="h-[2px] transition" />
    </motion.div>
  );
};
