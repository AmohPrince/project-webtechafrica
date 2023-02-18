import React, { useState } from "react";
import { ThemeBox } from "./ThemeBox";
import themes from "../Util/themes.json";
import ThemePreview from "./ThemePreview";
import { Theme } from "../Types/Global";
//TODO add some sort of topic for each dashboard page

const WebsiteBuilderForm = () => {
  const [previewTheme, setPreviewTheme] = useState<Theme>(themes[0]);
  return (
    <div className="bg-white h-screen overflow-y-scroll px-6">
      <p>Lets get you hooked up with a website!</p>
      <div className="text-sm mt-5">
        <p className="font-semibold mb-5">SELECT THEME</p>
        <div className="flex flex-wrap justify-center gap-3">
          {themes.map((theme) => (
            <ThemeBox
              theme={theme}
              setPreviewTheme={setPreviewTheme}
              activeThemeId={previewTheme.id}
            />
          ))}
        </div>
        <ThemePreview theme={previewTheme} />
      </div>
    </div>
  );
};

export default WebsiteBuilderForm;

// Purpose and goals of the website: Ask your client what they hope to achieve with their website. This will help you determine the design, features, and functionality of the website.

// Target audience: Ask your client about their target audience. This information will help you create a website that is tailored to their audience's preferences, needs, and interests.

// Content: Find out if your client already has content available for the website or if they will need you to create the content. Also, ask them if they have any specific requirements for the tone, style, or voice of the content.

// Visual style and branding: Ask your client if they have any specific design preferences or if they have branding guidelines that you should follow.

// Functionality and features: Ask your client about the features and functionality they want on their website. For example, do they need a contact form, a blog, or an e-commerce store?

// Technical requirements: Find out if your client has any specific technical requirements. For example, do they need the website to be optimized for search engines, or do they need the website to be accessible to users with disabilities?

// Budget and timeline: Finally, ask your client about their budget and timeline for the project. This will help you determine the scope of the project and set realistic expectations for both parties.
