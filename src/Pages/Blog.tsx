import { motion } from "framer-motion";
import React from "react";
import BlogArticle from "../Components/BlogArticle";
import { CircleBackGround } from "../Components/CircleBackGround";
import { pageTransition } from "../FramerMotion/PageTransitions";
import blogs from "../Json/Blogs.json";

const Blog = () => {
  return (
    <motion.div variants={pageTransition} className="px-[5%] sm:px-[12%]">
      <CircleBackGround />
      <div className="z-10 relative">
        <section className="mt-[10%] text-center">
          <h1 className="h2 sm:h1">News & Articles</h1>
          <p className="default-paragraph">
            Stay informed and up-to-date with our collection of informative news
            and informative articles.
          </p>
        </section>
        <section className="flex justify-between mt-10 gap-x-4">
          {blogs.map((blog, i) => (
            <BlogArticle article={blog} key={i} />
          ))}
        </section>
      </div>
    </motion.div>
  );
};

export default Blog;
