import React from "react";

const About = () => {
  return (
    <div>
      <section className="text-center mt-[8%]">
        <h1 className="h2 mb-4">About our company</h1>
        <p className="default-paragraph">
          At our company, we specialize in providing comprehensive web
          development solutions for businesses of all sizes. From custom website
          design and development to hosting and domain name registration, we
          have everything you need to establish a professional online presence.
          Our team of experts also offers unlimited customer support, social
          media management, and custom ads management to help you promote your
          brand and sell products online. Let us help you take your business to
          the next level with our comprehensive web development services.
        </p>
        <div className="flex mt-9 mb-[3%] justify-between h-96">
          <img
            alt="Three Woman in Front of Laptop Computer"
            src="https://images.pexels.com/photos/3182780/pexels-photo-3182780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-[64%] rounded-3xl object-cover"
          />
          <img
            src="https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="people looking at a web design"
            className="w-1/3 object-cover rounded-3xl"
          />
        </div>
        <div className="flex justify-between">
          <h3 className="h3 whitespace-nowrap mr-9">What we do</h3>
          <div className="text-left">
            <p className="default-paragraph">
              Our custom website design and development service will create a
              unique and professional website tailored to your business needs.
              We also provide hosting options to ensure your website is always
              live and accessible to your customers
            </p>
            <p className="default-paragraph mt-6">
              Our social media management service will help you establish a
              strong online presence across multiple platforms, increase brand
              awareness and engage with your target audience. We will create a
              content strategy, design graphics, and manage your accounts to
              ensure that your social media presence is consistent, effective
              and aligned with your business objectives. Our custom ads
              management service will create and run effective campaigns to
              drive traffic, increase conversions and help you reach your target
              audience. We will use our expertise to create, launch, and monitor
              campaigns across different platforms to help you achieve your
              business goals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
