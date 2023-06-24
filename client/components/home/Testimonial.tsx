import React from "react";
import Image from "next/image";
import { assets } from "@/public/assets";

function Testimonial() {
  return (
    <section className="mt-[10%] bg-primaryOne text-white text-center py-[8%] overflow-hidden relative">
      <p className="text-xs px-6 py-2 w-max mx-auto testimonial-title rounded-full">
        Testimonial
      </p>
      <h3 className="h3">Trusted by thousands of businesses.</h3>
      <p className="text-7xl">“</p>
      <p className="w-3/4 mx-auto">
        I have to say, I was a bit skeptical at first about working with WebTech
        Africa for my website development needs. But I have to admit, I was
        blown away by the entire process. Not only was it incredibly
        cost-effective, but the speed at which my website was built was nothing
        short of impressive. The team at WebTech Africa was extremely
        professional and dedicated to ensuring that my website was exactly what
        I wanted. They were also very responsive to my questions and made sure
        that I was completely satisfied with the final product. I would highly
        recommend WebTech Africa to anyone looking for a reliable, efficient and
        cost-effective web development solution
      </p>
      <Image
        src={"/shirleen.jpeg"}
        alt="Shirleen Annika"
        className="rounded-full w-24 h-24 object-cover mx-auto mt-8 mb-4 z-10 relative"
        width={96}
        height={96}
      />
      <p className="text-2xl font-semibold">Shirleen Annika</p>
      <p className="text-xs">Developer, South Africa</p>
      <Image src={assets.FiveStar} alt="Five star" className="mx-auto w-[8%]" />
      <Image
        src={assets.CircleOne}
        alt="circle"
        className="absolute -right-1/4 -bottom-[60%] rotate-90"
      />
      <Image
        src={assets.CircleOne}
        alt="circle"
        className="absolute -right-[40%] -bottom-3/4 rotate-[95deg]"
      />
      <Image
        src={assets.CircleTwo}
        alt="circle"
        className="absolute -top-3/4 -left-1/2 rotate-[270deg]"
      />
    </section>
  );
}

export default Testimonial;
