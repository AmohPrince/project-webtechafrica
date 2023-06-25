import React from "react";
import BlogArticle from "../BlogArticle";
import { GreyButton } from "../buttons/GreyButton";
import blogs from "../../json/Blogs.json";

export const Blogs = () => {
  return (
    <section className="mt-[10%] px-[5%] md:px-[12%]">
      <GreyButton text="Blog" />
      <h3 className="h3 text-center md:text-left my-5 md:my-0">
        Most popular articles
      </h3>
      <div className="md:flex justify-between gap-x-2">
        {blogs.slice(0, 2).map((article, index) => (
          <BlogArticle article={article} key={index} />
        ))}
      </div>
    </section>
  );
};
