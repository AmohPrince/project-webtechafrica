import { writeFile } from "fs/promises";
import { globby } from "globby";
import path from "path";
import blogs from "../json/Blogs.json";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }: { res: any }) => {
  const BASE_URL = "https://www.webtechafrica.com";

  const staticPaths = await globby([
    "pages/**/*.{ts,tsx}",
    "!pages/dashboard/**",
  ])
    .then((files) =>
      files
        .filter(
          (file) =>
            ![
              "pages/api",
              "pages/_app.tsx",
              "pages/_document.tsx",
              "pages/404.tsx",
              "pages/sitemap.xml.tsx",
              "pages/blog/[id].tsx",
              "pages/dashboard",
            ].some((excludedPath) => file.includes(excludedPath))
        )
        .map((file) => {
          let filename = file;
          if (filename.includes("index")) {
            const directory = path
              .dirname(file)
              .replace("pages", "")
              .replace(/^\//, "");

            filename = directory;
          }
          return `${BASE_URL}/${filename.replace(/^pages\/|\.tsx?$/g, "")}`;
        })
    )
    .catch((error) => {
      console.error("Error retrieving static paths:", error);
      return [];
    });

  const dynamicPaths = blogs.map((blog) => `${BASE_URL}/blog/${blog.title}`);

  const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  try {
    const sitemapPath = "./public/sitemap.xml";
    await writeFile(sitemapPath, sitemap, "utf8");
    console.log("Sitemap generated successfully.");
  } catch (error) {
    console.error("Error writing sitemap:", error);
  }

  return {
    props: {},
  };
};

export default Sitemap;
