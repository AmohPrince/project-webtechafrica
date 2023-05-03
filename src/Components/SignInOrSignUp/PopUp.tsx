import { motion } from "framer-motion";

export type PopUpInfo = {
  showing: boolean;
  text: null | string;
  type: null | "success" | "error";
};

//TODO Add close button
export const PopUp = ({ popUpInfo }: { popUpInfo: PopUpInfo }) => {
  return (
    <motion.div
      className={`border font-medium rounded-sm py-3 px-3 shadow-sm text-sm text-center mt-5 ${
        popUpInfo.type === "success"
          ? "border-green-500 bg-green-50"
          : "border-red-500 bg-red-50"
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, type: "spring" }}
    >
      <p>
        {popUpInfo.type === "success"
          ? "Hello " + popUpInfo.text + "!"
          : popUpInfo.text}
      </p>
      <div className="h-[2px] transition" />
    </motion.div>
  );
};
