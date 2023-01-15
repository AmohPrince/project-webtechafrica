import React from "react";
export function GreyButton({ text }: { text: string }) {
  return (
    <p className="text-xs bg-gray-200 text-primaryOne py-4 px-11 rounded-full w-max mx-auto font-bold">
      {text}
    </p>
  );
}
