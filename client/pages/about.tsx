import { CircleBackGround } from "@/components/CircleBackGround";
import { GreyButton } from "@/components/buttons/GreyButton";
import { NextHead } from "@/components/NextHead";
import Layout from "@/components/Layout";
import { assets } from "@/public/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const description =
  "WebTech Africa is a startup that provides comprehensive web development solutions to businesses of all sizes in africa and beyond. From custom website design and development to hosting and domain name registration, we have everything you need to establish a professional online presence.";

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Us",
  description: description,
};

const About = () => {
  return (
    <>
      <NextHead
        title="about us"
        canonical="www.webtechafrica.com/about"
        description={description}
        twitterDescription="At our company, we specialize in providing comprehensive web
        development solutions for businesses of all sizes."
        schemaJSON={schema}
      />
      <Layout>
        <motion.main className="px-[5%] md:px-[12%]">
          <CircleBackGround />
          <section className="text-center">
            <h1 className="h3 md:h2 mb-8 md:mb-4">About our company</h1>
            <p className="default-paragraph bg-white">
              At our company, we specialize in providing comprehensive web
              development solutions for businesses of all sizes. From custom
              website design and development to hosting and domain name
              registration, we have everything you need to establish a
              professional online presence. Our team of experts also offers
              unlimited customer support, social media management, and custom
              ads management to help you promote your brand and sell products
              online. Let us help you take your business to the next level with
              our comprehensive web development services.
            </p>
            <div className="flex mt-9 mb-[3%] justify-between h-96">
              <Image
                alt="Three Woman in Front of Laptop Computer"
                src="https://images.pexels.com/photos/3182780/pexels-photo-3182780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-[64%] rounded-3xl object-cover"
                width={1260}
                height={750}
              />
              <Image
                src="https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="people looking at a web design"
                className="w-1/3 object-cover rounded-3xl"
                width={1260}
                height={750}
              />
            </div>
            <div className="flex justify-between">
              <h2 className="h3 whitespace-nowrap mr-9 hidden md:block">
                What we do
              </h2>
              <div className="text-left">
                <h2 className="h4 my-3 whitespace-nowrap mr-9 block md:hidden text-center">
                  What we do
                </h2>
                <p className="default-paragraph">
                  Our custom website design and development service will create
                  a unique and professional website tailored to your business
                  needs. We also provide hosting options to ensure your website
                  is always live and accessible to your customers
                </p>
                <p className="default-paragraph mt-6">
                  Our social media management service will help you establish a
                  strong online presence across multiple platforms, increase
                  brand awareness and engage with your target audience. We will
                  create a content strategy, design graphics, and manage your
                  accounts to ensure that your social media presence is
                  consistent, effective and aligned with your business
                  objectives. Our custom ads management service will create and
                  run effective campaigns to drive traffic, increase conversions
                  and help you reach your target audience. We will use our
                  expertise to create, launch, and monitor campaigns across
                  different platforms to help you achieve your business goals.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-gray-50 rounded-md md:rounded-[40px] py-7 md:py-14 px-6 md:px-12 flex justify-between mt-[10%] flex-wrap [&>*]:w-1/2 [&>*]:md:w-auto gap-y-5">
            <div className="w-1/4">
              <p className="text-2xl md:text-5xl font-extrabold">
                100<span className="text-primaryOne"> M</span>
              </p>
              <p className="font-semibold text-xl">Client Satisfaction</p>
            </div>
            <div className="w-1/4">
              <p className="text-2xl md:text-5xl font-extrabold">
                24<span className="text-primaryOne"> h</span>
              </p>
              <p className="font-semibold text-xl">Expert Support Team</p>
            </div>
            <div className="w-1/4">
              <p className="text-2xl md:text-5xl font-extrabold">
                72<span className="text-primaryOne"> k+</span>
              </p>
              <p className="font-semibold text-xl">Sales Count</p>
            </div>
            <div className="w-1/4">
              <p className="text-2xl md:text-5xl font-extrabold">
                335<span className="text-primaryOne"> +</span>
              </p>
              <p className="font-semibold text-xl">Client Worldwide</p>
            </div>
          </section>
          <section className="mt-[10%] flex justify-between">
            <div className="pr-3">
              <h2 className="h2">Our Mission</h2>
              <p className="default-paragraph mt-[2%]">
                Our mission is to provide businesses with comprehensive web
                development and social media management services that will help
                them establish a strong online presence and reach their target
                audience. We aim to empower our clients to achieve their
                business goals by providing them with the tools and resources
                they need to succeed in the digital world.
              </p>
              <p className="default-paragraph mt-[2%]">
                We strive to deliver exceptional service and support, and to
                build lasting relationships with our clients. We are committed
                to staying at the forefront of the latest industry trends and
                technologies, and to delivering solutions that are innovative,
                effective and affordable. Our ultimate goal is to help our
                clients achieve their business objectives and grow their online
                presence
              </p>
            </div>
            <Image
              src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="yellow tie"
              className="w-1/5 md:w-2/5 object-cover rounded-2xl"
              width={1260}
              height={750}
            />
          </section>
          <section className="mt-[10%]">
            <GreyButton text="Our values" />
            <h3 className="h2 text-center mt-[3%]">
              The story and values behind <br />
              our company
            </h3>
            <div className="flex flex-wrap mt-[1%] gap-4 text-xs">
              <div className="bg-gray-50 py-6 px-4 flex items-start rounded-3xl w-full md:w-[49%]">
                <Image
                  src={assets.Bulb}
                  alt="Bulb"
                  className="mr-4 w-16 h-20"
                />
                <div>
                  <h4 className="h4">Innovation</h4>
                  <p className="default-paragraph mt-2">
                    We are constantly pushing the boundaries to deliver
                    cutting-edge solutions that will help our clients stay ahead
                    of the competition.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 py-6 px-4 flex items-start rounded-3xl w-full md:w-[49%]">
                <Image
                  src={assets.teamwork}
                  alt="Bulb"
                  className="mr-4 w-16 h-20"
                />
                <div>
                  <h4 className="h4">Team work</h4>
                  <p className="default-paragraph mt-2">
                    We believe that by working together, we can achieve more. We
                    foster a collaborative environment where everyone's ideas
                    and contributions are valued.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 py-6 px-4 flex items-start rounded-3xl w-full md:w-[49%]">
                <Image
                  src={assets.Award}
                  alt="Bulb"
                  className="mr-4 w-16 h-20"
                  width={1260}
                  height={750}
                />
                <div>
                  <h4 className="h4">Excellence</h4>
                  <p className="default-paragraph mt-2">
                    We are committed to delivering the highest quality service
                    and support to our clients.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 py-6 px-4 flex items-start rounded-3xl w-full md:w-[49%]">
                <Image
                  src={assets.Paper}
                  alt="Bulb"
                  className="mr-4 w-16 h-20"
                  width={1260}
                  height={750}
                />
                <div>
                  <h4 className="h4">Responsibility</h4>
                  <p className="default-paragraph mt-2">
                    We take responsibility for our actions and are committed to
                    conducting business in an ethical and responsible manner.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </motion.main>
      </Layout>
    </>
  );
};

export default About;
