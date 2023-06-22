import Layout from "@/components/Layout";
import { NextHead } from "@/components/NextHead";
import { Blog } from "@/types/Global";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import blogs from "../../json/Blogs.json";

const SingleBlog = () => {
  const router = useRouter();
  const { id } = router.query;

  const article: Blog | undefined = blogs.find(
    (article) => article.title === id
  );

  if (!id) {
    return <div>Article not found.</div>;
  }

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <>
      <NextHead
        canonical={`www.webtechafrica.com/blog/${id}`}
        description={article.preText}
        title={article.title}
        twitterDescription={article.preText}
      />
      <Layout>
        <section className="mt-12 mx-[5%] sm:mx-[12%]">
          <Image
            src={article.img}
            alt={id as string}
            className="w-full rounded-3xl h-[70vh] object-cover"
            width={1260}
            height={750}
          />
          <div className="flex justify-between mt-10 pr-7">
            <h1 className="h2">{article.title}</h1>
            <div className="w-[1px] bg-gray-200 mr-5" />
            <div>
              <div className="flex items-center">
                <Image
                  src={article.writerImage}
                  alt={article.writer}
                  className="rounded-full w-10 h-10 mr-2 object-cover"
                  width={100}
                  height={100}
                />
                <div className="text-sm">
                  <p className="font-bold">{article.writer}</p>
                  <p className="capitalize text-secondaryFour">
                    {article.position}
                  </p>
                </div>
              </div>
              <p className="text-secondaryFour text-sm font-semibold my-5">
                <span className="text-black">Post: </span>
                {article.date}{" "}
              </p>
              <div className="flex flex-wrap gap-1 justify-end">
                {article.categories.map((category, i) => (
                  <p
                    className="text-white px-3 sm:px-6 py-3 rounded-full text-xs bg-primaryOne w-full sm:w-auto"
                    key={i}
                  >
                    {category}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <section className="mt-[5%] border-t pt-5 px-[8%]">
            <p className="default-paragraph mb-6">{article.introduction}</p>
            {article.points?.map((point, index) => (
              <p className="default-paragraph mb-5" key={index}>
                {" "}
                <span className="text-black font-semibold mr-3">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                {point}
              </p>
            ))}
            <Image
              src={article.blogBodyImage}
              alt=""
              className="w-full h-[35vh] object-cover mb-5 rounded-[30px]"
              width={1260}
              height={750}
            />
            {article.conclusions?.map((conclusion, i) => (
              <p className="default-paragraph mb-3" key={i}>
                {conclusion}
              </p>
            ))}
          </section>
        </section>
      </Layout>
    </>
  );
};

export default SingleBlog;
