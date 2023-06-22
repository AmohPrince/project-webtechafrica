import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex mt-2 items-center">
      <input type="checkbox" />
      <p className="ml-2 text-xs">
        I accept the Fare Rules , the{" "}
        <span className="cursor-pointer text-sky-600">Privacy Policy</span>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
