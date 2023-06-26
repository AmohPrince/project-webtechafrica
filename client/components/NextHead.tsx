import React from "react";

import Head from "next/head";

export const NextHead = ({
  title,
  description,
  canonical,
  twitterDescription,
  schemaJSON,
}: {
  title: string;
  description: string;
  canonical: string;
  twitterDescription: string;
  schemaJSON?: object;
}) => {
  let upperCaseTitle = title.charAt(0).toUpperCase() + title.substring(1);
  return (
    <Head>
      <title>{title ? upperCaseTitle : "WebTech Africa"}</title>
      <meta charSet="UTF-8" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Amos Machora" />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={upperCaseTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/logowithdescription.png" />
      <meta name="twitter:title" content={upperCaseTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content="/logowithdescription.png" />
      <link rel="canonical" href={canonical} />
      <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      <script type="application/ld+json">
        {JSON.stringify(schemaJSON ?? {})}
      </script>
    </Head>
  );
};

{
  /* <title>: Specifies the title of the webpage. It should accurately and concisely describe the content of the page.

<meta name="description">: Provides a brief description of the webpage. This description may be displayed in search engine results, so make it compelling and relevant to the page content.

<meta name="keywords">: Specifies a list of comma-separated keywords related to the webpage's content. Note that the importance of keywords for SEO has diminished over time, and search engines often prioritize other factors.

<meta name="viewport">: Sets the viewport properties for mobile responsiveness. For example: <meta name="viewport" content="width=device-width, initial-scale=1.0">.

<link rel="canonical">: Specifies the canonical URL for the webpage. It helps indicate the preferred URL version of a page when there are multiple versions available.

<link rel="alternate">: Specifies alternate language versions of the page using hreflang attributes. Useful for multilingual websites.

<meta name="robots">: Controls search engine crawler behavior. Common directives include "index" (allow indexing), "noindex" (prevent indexing), "follow" (follow links on the page), and "nofollow" (do not follow links on the page).

<link rel="stylesheet">: Links to external CSS stylesheets required for the page's presentation.

<link rel="icon"> or <link rel="shortcut icon">: Specifies the favicon (icon displayed in the browser tab) for the website. It can be an .ico file or a link to an image file (e.g., .png, .svg).

<meta property="og:title">, <meta property="og:description">, <meta property="og:image">: Open Graph meta tags used for sharing content on social media platforms. They provide title, description, and image information that is displayed when the page is shared.

<meta name="twitter:title">, <meta name="twitter:description">, <meta name="twitter:image">: Twitter-specific meta tags for sharing content on Twitter. Similar to Open Graph meta tags, they provide title, description, and image information for shared content.  */
}
