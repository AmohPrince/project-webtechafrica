import React from "react";
import { DevWebsite } from "../Types/Global";
import { extractHostname } from "../Util/Utilities";
import { Button } from "./Button";

const DevWebsiteComponent = ({ website }: { website: DevWebsite }) => {
  return (
    <div className="px-[10%] border-t mt-5">
      <div className="flex justify-between">
        <div>
          <a href={website.previewUrl}>
            <Button text="Preview site" />
          </a>
          {website.hasShop && (
            <a href={website.shopUrl}>
              <Button text="View shop" />
            </a>
          )}
        </div>
        <img src={website.websiteScreenShot} alt="overdue" className="w-1/3" />
      </div>
      <p>{extractHostname(website.previewUrl)}</p>
      <p>Expected Completion: 24th May 2023</p>
    </div>
  );
};

export default DevWebsiteComponent;
