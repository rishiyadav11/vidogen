"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen overflow-x-hidden">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to chandni Midway Resort
        </p>

        <AnimatedTitle
          title="Ex<b>p</b>erience luxury <br /> and tr<b>u</b>anquility"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>Relax in our luxurious rooms and lush gardens</p>
          <p className="text-gray-500">
            Unforgettable moments await at chandni Midway Resort, Narnaul.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <Image
            fill
            src="https://r1imghtlak.mmtcdn.com/2deab71f-a686-4d39-ac03-c3b2bc6df4ab.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
