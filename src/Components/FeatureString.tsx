import React from "react";

export const FeatureString = ({
  feature,
  source,
}: {
  feature: string;
  source: "Premium" | "Basic";
}) => {
  return (
    <p
      className={`${
        feature.includes("<sp>") &&
        `font-semibold ${
          source === "Basic" ? "text-black" : "text-primaryOne"
        } mx-[3px] whitespace-nowrap`
      }`}
    >
      {feature.replace(/<\/?sp>/g, "")}
    </p>
  );
};
