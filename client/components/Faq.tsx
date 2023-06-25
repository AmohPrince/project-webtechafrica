import { motion } from "framer-motion";
import React, { useState } from "react";

const Faq = ({ question, answer }: { question: string; answer: string }) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="bg-white rounded-xl py-4 px-4 cursor-pointer mb-4"
      onClick={() => setShowAnswer((prev) => !prev)}
    >
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg mr-2">{question}</p>
        <div className="w-5 md:w-9 h-5 md:h-9 rounded-full bg-primaryOne"></div>
      </div>
      {showAnswer && (
        <motion.p
          className="default-paragraph pl-6 py-4"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          {answer}
        </motion.p>
      )}
    </div>
  );
};

export default Faq;
