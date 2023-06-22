import { motion } from "framer-motion";
import React from "react";

export function GreyButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <motion.h1
      className={`text-xs bg-gray-200 text-primaryOne py-4 px-11 rounded-full w-max font-bold ${
        className ? className : "mx-auto"
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {text}
    </motion.h1>
  );
}
