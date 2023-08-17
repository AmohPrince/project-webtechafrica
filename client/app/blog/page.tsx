import BlogArticle from "@/components/BlogArticle";
import { CircleBackGround } from "@/components/CircleBackGround";
import { Metadata } from "next";
import blogs from "../../json/Blogs.json";

export const metadata: Metadata = {
  description:
    "Read our blog! Stay up to date with hiring cycles and company updates",
  title: "blog",
  twitter: {
    description:
      "Read our blog! Stay up to date with hiring cycles and company updates",
  },
};

const page = () => {
  // const schema = {
  //   "@context": "https://schema.org",
  //   "@type": "WebPage",
  //   name: "Blog",
  //   description:
  //     "Read our blog! Stay up to date with hiring cycles and company updates",
  // };
  return (
    <main className="px-[5%] md:px-[12%]">
      <CircleBackGround />
      <div className="z-10 relative">
        <section className="text-center">
          <h1 className="h2 md:h1">News & Articles</h1>
          <p className="default-paragraph">
            Stay informed and up-to-date with our collection of informative news
            and informative articles.
          </p>
        </section>
        <section className="flex justify-between mt-10 gap-x-4 flex-col md:flex-row">
          {blogs.map((blog, i) => (
            <BlogArticle article={blog} key={i} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default page;
