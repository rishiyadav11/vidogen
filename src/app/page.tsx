import Hero from "@/components/Hero";
import Collaboration from "@/components/Collaboration";
import Services from "@/components/Services";

import Cta from "@/components/Cta";
import { HowItWorks } from "../components/HowItWorks";
import Hero1 from "@/components/Hero1";
import { Skiper49 } from "../components/skiper49";
import FAQPage from "../components/Faq";

export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
        <Hero1 />
        <Services />
        <HowItWorks />
        <Collaboration />

        <Cta />
        {/* <Story /> */}
        <Skiper49 />
        <FAQPage />
        {/* <ContactPage/> */}
      </div>
    </>
  );
}
