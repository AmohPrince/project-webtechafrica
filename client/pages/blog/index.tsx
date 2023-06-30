import BlogArticle from "@/components/BlogArticle";
import { CircleBackGround } from "@/components/CircleBackGround";
import Layout from "@/components/Layout";
import { NextHead } from "@/components/NextHead";
import { motion } from "framer-motion";
import React from "react";
import blogs from "../../json/Blogs.json";

const Blog = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Blog",
    description:
      "Read our blog! Stay up to date with hiring cycles and company updates",
  };
  return (
    <>
      <NextHead
        canonical="www.webtechafrica.com/blog"
        description="Read our blog! Stay up to date with hiring cycles and company updates"
        title="blog"
        twitterDescription="Read our blog! Stay up to date with hiring cycles and company updates"
        schemaJSON={schema}
      />
      <Layout>
        <motion.main className="px-[5%] md:px-[12%]">
          <CircleBackGround />
          <div className="z-10 relative">
            <section className="text-center">
              <h1 className="h2 md:h1">News & Articles</h1>
              <p className="default-paragraph">
                Stay informed and up-to-date with our collection of informative
                news and informative articles.
              </p>
            </section>
            <section className="flex justify-between mt-10 gap-x-4 flex-col md:flex-row">
              {blogs.map((blog, i) => (
                <BlogArticle article={blog} key={i} />
              ))}
            </section>
          </div>
        </motion.main>
      </Layout>
    </>
  );
};

export default Blog;
