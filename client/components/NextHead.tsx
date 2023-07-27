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
      <script type="application/ld+json">
        {JSON.stringify(schemaJSON ?? {})}
      </script>
    </Head>
  );
};
