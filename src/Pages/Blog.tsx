import React from "react";
import BlogArticle from "../Components/BlogArticle";
import { CircleBackGround } from "../Components/CircleBackGround";
import blogs from "../Json/Blogs.json";

const Blog = () => {
  return (
    <>
      <CircleBackGround />
      <div className="z-10 relative">
        <section className="mt-[10%] text-center">
          <h1 className="h1">News & Articles</h1>
          <p className="default-paragraph">
            Stay informed and up-to-date with our collection of informative news
            and informative articles.
          </p>
        </section>
        <section className="flex justify-between flex-wrap mt-10">
          {blogs.map((blog, i) => (
            <BlogArticle article={blog} key={i} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Blog;
