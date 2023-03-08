import React from "react";
import { PendingVerificationWebsite } from "../Types/Global";

const PendingVerification = ({
  website,
}: {
  website: PendingVerificationWebsite;
}) => {
  return <p>{website.websiteUrl}</p>;
};

export default PendingVerification;
