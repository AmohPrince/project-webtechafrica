import React from "react";
import { PendingVerificationWebsite } from "../Types/Global";

const PendingVerificationComponent = ({
  website,
}: {
  website: PendingVerificationWebsite;
}) => {
  return <p>{website.url}</p>;
};

export default PendingVerificationComponent;
