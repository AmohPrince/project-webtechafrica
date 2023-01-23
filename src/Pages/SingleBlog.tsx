import React from "react";
import { useParams } from "react-router";
import Blogs from "../Json/Blogs.json";
import { BlogArticleType } from "../Types/Global";

const SingleBlog = () => {
  const { title } = useParams();
  const article: BlogArticleType = Blogs.find(
    (article) => article.title === title
  )!;

  return (
    <section className="mt-12">
      <img
        src={article.img}
        alt={title}
        className="w-full rounded-3xl h-[70vh] object-cover"
      />
      <div className="flex justify-between mt-10 pr-7">
        <h1 className="h2">{article.title}</h1>
        <div className="w-[1px] bg-gray-200 mr-5" />
        <div>
          <div className="flex items-center">
            <img
              src={article.writerImage}
              alt={article.writer}
              className="rounded-full w-10 h-10 mr-2 object-cover"
            />
            <div className="text-sm">
              <p className="font-bold">{article.writer}</p>
              <p className="capitalize text-secondaryFour">
                {article.position}
              </p>
            </div>
          </div>
          <p className="text-secondaryFour text-sm font-semibold my-5">
            <span className="text-black">Post : </span>
            {article.date}{" "}
          </p>
          <div className="flex flex-wrap gap-1">
            {article.categories.map((category) => (
              <p className="text-white px-6 py-3 rounded-full text-xs bg-primaryOne">
                {category}
              </p>
            ))}
          </div>
        </div>
      </div>
      <section className="mt-[5%] border-t pt-5 px-[8%]">
        <p className="default-paragraph mb-6">{article.introduction}</p>
        {article.points?.map((point, index) => (
          <p className="default-paragraph mb-5">
            {" "}
            <span className="text-black font-semibold mr-3">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            {point}
          </p>
        ))}
        <img
          src={article.blogBodyImage}
          alt=""
          className="w-full h-[35vh] object-cover mb-5 rounded-[30px]"
        />
        {article.conclusions?.map((conclusion) => (
          <p className="default-paragraph mb-3">{conclusion}</p>
        ))}
      </section>
    </section>
  );
};

export default SingleBlog;
