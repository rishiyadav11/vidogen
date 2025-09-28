"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white -950 font-sans md:px-10"
      ref={containerRef}
    >
    <div className="max-w-6xl mx-auto py-20 px-4 md:px-8 lg:px-10 text-center">
{/* Hero heading and subheading */} 
<div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-10 md:pt-15">
  <h1 className="text-4xl md:text-7xl font-extrabold text-center py-5 bg-clip-text text-transparent 
                 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600
                 drop-shadow-lg">
    <span className="animate-pulse text-white">✨</span> About Chandni Midway Resort <span className="animate-pulse text-white">✨</span>
  </h1> 
  <p className="mt-4 font-grotesk text-lg md:text-xl text-black max-w-2xl text-center mx-auto">
    The story of Chandni Resort is one of vision, legacy, and continuous growth — a journey of hospitality and unforgettable experiences.
  </p>
</div>

  <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
    It all began in 1997, when the late <span className="font-semibold">Mr. Prem Yadav</span> 
      laid the foundation with a humble restaurant—Chandni Midway. With his warmth and dedication, 
    the place soon became the heartbeat of travelers, welcoming over <span className="font-semibold">150 tourists daily</span> 
    and setting a benchmark in hospitality for the region.
  </p>
  <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-4">
    In 2007, his son <span className="font-semibold">Mr. Baljeet Yadav</span> expanded Chandni with a banquet hall and 22 modern rooms, 
    transforming it into a true destination for comfort and celebrations.
  </p>
</div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full  dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200  border border-neutral-300  p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500  ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 ">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
             className="absolute inset-x-0 top-0 w-[10px] h-full 
  bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400 
  rounded-full shadow-[0_0_20px_rgba(99,102,241,0.8)] 
  animate-pulse"

          />
        </div>
      </div>
    </div>
  );
};
