import React from "react";
import { Theme } from "../Types/Global";

export const ThemeBox = ({
  activeThemeId,
  theme,
  setPreviewTheme,
}: {
  activeThemeId: string;
  theme: Theme;
  setPreviewTheme: React.Dispatch<React.SetStateAction<Theme>>;
}) => {
  return (
    <div
      style={{
        backgroundColor: theme.colors.background,
        outlineColor: theme.colors.primary,
      }}
      className={`w-max py-3 px-2 rounded-md cursor-pointer shadow-md hover:scale-105 transition-all ${
        theme.id === activeThemeId ? "outline" : ""
      }`}
      onClick={() => setPreviewTheme(theme)}
    >
      <p style={{ color: theme.colors.text }} className="text-center text-sm">
        {theme.name}
      </p>
      <div className="flex">
        {Object.values(theme.colors).map((color, i) => (
          <div
            style={{ backgroundColor: color }}
            className={`h-5 w-5 rounded-full ${i !== 0 ? "-ml-1" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};
