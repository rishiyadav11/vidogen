"use client";
import { curve, Dashboardpic } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { useRef } from "react";
import Image from "next/image";
import Heading from "./Heading";

const Hero1 = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        {/* Headline */}
        <div className="relative z-1 max-w-[62rem] mx-auto text-center text-white mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Turn Ideas into{" "}
            <span className="inline-block relative">
              Stunning Videos{" "}
              <Image
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
            — Instantly with AI
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            VidoGen transforms your prompts or images into high-quality AI videos with captions, 
            voiceovers, and auto-posting to YouTube & Instagram. Create, schedule, and grow — all in one place.
          </p>
        </div>

        {/* Product Demo - Video or Image */}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-black rounded-[1rem]">
              <div className="h-[1rem] bg-black rounded-t-[0.9rem]" />
              <Heading tag="See VidoGen in Action" />
              <div className="rounded-b-[0.9rem] overflow-hidden h-[40rem] w-full relative">
                <video
                  src="/video.mov"
                  autoPlay
                  muted
                  loop
                  className="object-cover w-full scale-95 rounded-lg h-full"
                />
              </div>
            </div>
          </div>

          <BackgroundCircles />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero1;
