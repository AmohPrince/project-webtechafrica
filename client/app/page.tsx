import Background from "@/components/home/Background";
import { Blogs } from "@/components/home/Blogs";
import { CheapAndPowerful } from "@/components/home/CheapAndPowerful";
import { FeaturesComponent } from "@/components/home/FeaturesComponent";
import FreeTrial from "@/components/home/FreeTrial";
import { HomeMain } from "@/components/home/HomeMain";
import { HowWeWork } from "@/components/home/HowWeWork";
import { Pricing } from "@/components/home/Pricing";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {
  return (
    <main>
      <Background />
      <HomeMain />
      <FeaturesComponent className="px-[5%] md:px-[12%]" />
      <CheapAndPowerful />
      <HowWeWork />
      <Testimonial />
      <Pricing />
      <FreeTrial className="mx-[5%] md:mx-[12%]" />
      <Blogs />
    </main>
  );
}
