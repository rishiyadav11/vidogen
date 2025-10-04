import Section from "./Section";
import { PricingImage, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import Image from "next/image";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <Image
            src={PricingImage}
            className="relative z-1"
            width={400}
            height={400}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Image
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

     <Heading
  tag="Choose your perfect plan"
  title="Flexible pricing built for every team"
/>


        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

       
      </div>
    </Section>
  );
};

export default Pricing;
