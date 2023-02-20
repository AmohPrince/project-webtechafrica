import React from "react";
import { Theme } from "../Types/Global";
import LVLogo from "./LVLogo";

const ThemePreview = ({ theme }: { theme: Theme }) => {
  return (
    <div
      className="mt-6 border-t py-[5%] px-[2%] border rounded-md shadow transition-all duration-150"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <LVLogo color={theme.colors.primary} />
          <p>Louis Vuitton</p>
        </div>
        <div className="flex gap-x-4">
          <p className="font-semibold pb-2">
            <span className="font-bold">01</span> home
          </p>
          <p
            className="font-semibold pb-2 border-b-4"
            style={{ borderColor: theme.colors.primary }}
          >
            <span className="font-bold">02</span> writing
          </p>
          <p className="font-semibold pb-2">
            <span className="font-bold">03</span> notes
          </p>
          <p className="font-semibold pb-2">
            <span className="font-bold">04</span> about
          </p>
        </div>
      </div>
      <h1 className="text-center mt-14 playfair text-5xl">
        Discover <span style={{ color: theme.colors.primary }}>Luxury</span> and
        Elegance with Louis{" "}
        <span style={{ color: theme.colors.primary }}>Vuitton</span>
      </h1>
      <div className="flex items-center mt-6 justify-center">
        <p className="mr-4 text-gray-500">29 Apr 2020. FASHION, DESIGN</p>
        <p
          className="text-xs py-3 px-2 rounded-sm text-white"
          style={{ backgroundColor: theme.colors.primary }}
        >
          View Demo
        </p>
      </div>
      <p className="w-1/2 mx-auto text-center mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        repudiandae dolore in soluta ab tenetur cum expedita ratione voluptas
        inventore?
      </p>
    </div>
  );
};

export default ThemePreview;
