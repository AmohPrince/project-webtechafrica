import React, { Dispatch, SetStateAction } from "react";
import { assets } from "../Assets/assets";

const WebsiteBuilderForm = ({
  closeFn,
}: {
  closeFn: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="w-1/2 bg-white p-7 rounded-md shadow-lg center-sticky">
      <img
        src={assets.Close}
        alt="close"
        className="absolute right-4 top-4 w-6 h-6 object-cover cursor-pointer"
        onClick={() => closeFn(false)}
      />
      <p>Fill in the below form and lets start working together!</p>
      <p>Pick theme</p>
    </div>
  );
};

export default WebsiteBuilderForm;
