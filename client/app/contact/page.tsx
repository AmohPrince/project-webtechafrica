import { CircleBackGround } from "@/components/CircleBackGround";
import { ContactForm } from "@/components/ContactForm";
import Faq from "@/components/Faq";
import { assets } from "@/public/assets";
import { email } from "@/util/utilities";
import { Metadata } from "next";
import Image from "next/image";
import Location from "../../components/Location";
import Faqs from "../../json/Faqs.json";

export const metadata: Metadata = {
  description:
    "Get in touch! Email us at webtechnologiesafrica@gmail.com or call us +254719428019",
  title: "Contact us",
  twitter: {
    description:
      "Get in touch! Email us at webtechnologiesafrica@gmail.com or call us +254719428019",
  },
};

const Contact = () => {
  return (
    <main className="px-[5%] md:px-[12%]">
      <CircleBackGround />
      <Image
        src={assets.contactBlob}
        alt="blob"
        className="absolute right-0 z-0 w-1/3 overflow-hidden"
      />
      <div className="relative z-10">
        <h1 className="h2 md:h1 text-center">Get in touch today!</h1>
        <section className="flex flex-wrap md:flex-nowrap justify-between mt-10 items-stretch md:items-center w-full mx-auto text-sm gap-4 text-center">
          <div className="flex flex-col md:flex-row rounded-[28px] justify-between items-center p-4 md:p-6 shadow-xl border bg-white w-full">
            <Image
              src={assets.MailLarge}
              alt="Mail"
              className="w-12 h-12 mr-2"
            />
            <div className="md:flex mt-3 md:mt-0 items-center">
              <p className="font-semibold md:mr-2">Mail Us</p>
              <a
                className="text-secondaryFour ml-auto text-ellipsis whitespace-nowrap overflow-hidden"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row rounded-[28px] items-center p-4 md:p-6 bg-white shadow-xl border w-[48%] md:w-full">
            <Image src={assets.Phone} alt="Mail" className="w-12 h-12 mr-2" />
            <div className="md:flex mt-3 md:mt-0">
              <p className="font-semibold mr-2">Call Us</p>
              <p className="text-secondaryFour ml-auto text-ellipsis whitespace-nowrap overflow-hidden">
                +254 7194 280 19
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row rounded-[28px] items-center p-4 md:p-6 bg-white shadow-xl border w-[48%] md:w-full">
            <Image
              src="/icons8-whatsapp.svg"
              alt="Mail"
              className="w-12 h-12 mr-2"
              width={144}
              height={144}
            />
            <div className="md:flex mt-3 md:mt-0">
              <p className="font-semibold mr-2">Text Us</p>
              <p className="text-secondaryFour ml-auto text-ellipsis whitespace-nowrap overflow-hidden">
                +254 9789 03 55
              </p>
            </div>
          </div>
        </section>
        <ContactForm />
        <section className="mt-[10%]">
          <h3 className="h3 md:w-3/4 text-center mx-auto">
            We help small businesses with big hearts find clients they didn't
            even know they had.
          </h3>
          <div className="w-2/3 md:w-1/4 flex flex-col items-center border rounded-3xl py-9 mx-auto mt-10 shadow-xl">
            <Location color="#FAD5E9" />
            <h4 className="font-bold h4 text-base mt-3">Nairobi</h4>
            <p className="default-paragraph text-center text-sm">
              00100 Moi avenue,
              <br /> Nairobi
            </p>
            <p className="bg-purple rounded-full py-3 px-7 mt-2 font-semibold text-purpleText">
              (071) 942 – 8019
            </p>
          </div>
        </section>
        <section className="bg-primaryOne mt-[10%] faqs py-[10%]" id="#faqs">
          <h3 className="h3 text-white text-center mb-10">
            Frequently Asked Questions
          </h3>
          <div className="w-2/3 md:w-1/2 mx-auto">
            {Faqs.map((faq, i) => (
              <Faq answer={faq.answer} question={faq.Question} key={i} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
