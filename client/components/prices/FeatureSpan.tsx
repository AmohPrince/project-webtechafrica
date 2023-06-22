import React from "react";

export const FeatureSpan = ({
  text,
  source,
}: {
  text: string;
  source: "Premium" | "Basic";
}) => {
  return (
    <span
      className={`text-sm ${
        text.includes("<sp>") && source === "Premium"
          ? "text-primaryOne font-semibold"
          : text.includes("<sp>") && source === "Basic"
          ? "text-primaryTwo font-semibold"
          : ""
      }`}
    >
      {text.replace(/<\/?sp>/g, "") + " "}
    </span>
  );
};
