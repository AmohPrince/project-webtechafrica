import React from "react";
export function GreyButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <h1
      className={`text-xs bg-gray-200 text-primaryOne py-4 px-11 rounded-full w-max font-bold ${
        className ? className : "mx-auto"
      }`}
    >
      {text}
    </h1>
  );
}
