import React from "react";

export const SecondaryButton = ({
  text,
  onClick,
  style,
  className,
  disabled,
}: {
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
}) => {
  const buttonStyles: React.CSSProperties = {
    ...style,
    backgroundColor: disabled
      ? getLighterColor(style!.backgroundColor!)
      : style?.backgroundColor,
  };
  return (
    <button
      className={`py-3 px-7 rounded-full border transition-all text-sm font-bold hover:scale-105 hover:bg-orange hover:border-orange disabled:cursor-not-allowed ${className}`}
      onClick={onClick}
      style={buttonStyles}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

function getLighterColor(color: string): string {
  // Convert the hex color to RGB
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the lighter color
  const factor = 0.5; // change this to adjust the lightness
  const newR = Math.floor((255 - r) * factor + r);
  const newG = Math.floor((255 - g) * factor + g);
  const newB = Math.floor((255 - b) * factor + b);

  // Convert the new RGB color back to hex
  const newColor = `#${(newR << 16) | (newG << 8) | newB}`;
  return newColor;
}
