import React, { useState } from "react";
import { ThemeBox } from "./ThemeBox";
import themes from "../Util/themes.json";
import ThemePreview from "./ThemePreview";
import { Theme } from "../Types/Global";
import DashBoardTitle from "./DashBoardTitle";

const WebsiteBuilderForm = () => {
  const [previewTheme, setPreviewTheme] = useState<Theme>(themes[0]);
  return (
    <div className="mt-5">
      <DashBoardTitle
        h1="New Website"
        sub="Lets get you hooked up with a website!"
      />
      <ThemePreview theme={previewTheme} />
      <div className="text-sm my-5">
        <p className="mb-5">Select Theme</p>
        <div className="flex flex-wrap justify-center gap-3">
          {themes.map((theme) => (
            <ThemeBox
              theme={theme}
              setPreviewTheme={setPreviewTheme}
              activeThemeId={previewTheme.id}
            />
          ))}
        </div>
        <div className="mb-5">
          <p>Website Type</p>
          <select>
            <option value="E-commerce websites">E-commerce websites</option>
            <option value="Social media websites">Social media websites</option>
            <option value="Blog and personal websites">
              Blog and personal websites
            </option>
            <option value="Portfolio websites">Portfolio websites</option>
            <option value="Corporate websites">Corporate websites</option>
            <option value="Educational websites">Educational websites</option>
            <option value="News websites">News websites</option>
            <option value="Entertainment websites">
              Entertainment websites
            </option>
            <option value="Government websites">Government websites</option>
            <option value="Medical and healthcare websites">
              Medical and healthcare websites
            </option>
            <option value="Travel websites">Travel websites</option>
            <option value="Job search websites">Job search websites</option>
            <option value="Review websites">Review websites</option>
            <option value="Forum and community websites">
              Forum and community websites
            </option>
            <option value="Auction websites">Auction websites</option>
            <option value="Crowdfunding websites">Crowdfunding websites</option>
          </select>
        </div>
        <div className="mb-5">
          <p>Pages</p>
          <p>Choose the pages you might need to be included in your website</p>
        </div>
        <div className="mb-5">
          <p>
            Describe the purpose and goals of the website? This will help us
            understand your specific niche and target audience to create a
            website that will be sure to fit your needs
          </p>
          <input type="text" className="w-full" />
        </div>
        <div className="mb-5">
          <p>
            Do you have any content or would you like our AI to generate
            everything for you? You are allowed to change anything you want
            later
          </p>
          <div className="flex">
            <input type="checkbox" />
            <p>I have my own</p>
            <input type="checkbox" className="ml-6" />
            <p>Find out what might seem right for me.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteBuilderForm;

// Content: Find out if your client already has content available for the website or if they will need you to create the content. Also, ask them if they have any specific requirements for the tone, style, or voice of the content.

// Functionality and features: Ask your client about the features and functionality they want on their website. For example, do they need a contact form, a blog, or an e-commerce store?

// Technical requirements: Find out if your client has any specific technical requirements. For example, do they need the website to be optimized for search engines, or do they need the website to be accessible to users with disabilities?

// Budget and timeline: Finally, ask your client about their budget and timeline for the project. This will help you determine the scope of the project and set realistic expectations for both parties.
