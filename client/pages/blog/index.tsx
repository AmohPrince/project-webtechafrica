import BlogArticle from "@/components/BlogArticle";
import { CircleBackGround } from "@/components/CircleBackGround";
import Layout from "@/components/Layout";
import { NextHead } from "@/components/NextHead";
import { motion } from "framer-motion";
import React from "react";

import blogs from "../../Json/Blogs.json";

const Blog = () => {
  return (
    <>
      <NextHead
        canonical="www.webtechafrica.com/blog"
        description="Read our blog! Stay up to date with hiring cycles and company updates"
        title="blog"
        twitterDescription="Read our blog! Stay up to date with hiring cycles and company updates"
      />
      <Layout>
        <motion.section className="px-[5%] sm:px-[12%]">
          <CircleBackGround />
          <div className="z-10 relative">
            <section className="mt-[10%] text-center">
              <h1 className="h2 sm:h1">News & Articles</h1>
              <p className="default-paragraph">
                Stay informed and up-to-date with our collection of informative
                news and informative articles.
              </p>
            </section>
            <section className="flex justify-between mt-10 gap-x-4">
              {blogs.map((blog, i) => (
                <BlogArticle article={blog} key={i} />
              ))}
            </section>
          </div>
        </motion.section>
      </Layout>
    </>
  );
};

export default Blog;
