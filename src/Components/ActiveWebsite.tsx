import React from "react";
import { ActiveWebsiteType } from "../Types/Global";
import { Button } from "./Button";

const ActiveWebsite = ({ website }: { website: ActiveWebsiteType }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="h3">{extractHostname(website.websiteUrl)}</h3>
        {website.hasShop && (
          <a href={website.shopUrl}>
            <Button text="View Shop" className="mt-0" />
          </a>
        )}
        <a href={website.websiteUrl}>
          <Button text="View site" className="mt-0" />
        </a>
      </div>
      <img src={website.websiteScreenShot} alt="test" className="w-1/2" />
    </div>
  );
};

export default ActiveWebsite;

export function extractHostname(url: string): string {
  const startIndex = url.indexOf("://") + 3;
  const endIndex = url.indexOf("/", startIndex);
  return url.substring(startIndex, endIndex);
}
