"use client";

import { motion } from "framer-motion";
import React from "react";
import { Autoplay, EffectCoverflow, FreeMode, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { cn } from "../lib/utils";
import AnimatedTitle from "./AnimatedTitle";
import Section from "./Section";

const Skiper49 = () => {
  const images = [
    { src: "https://i.pinimg.com/736x/6e/b1/91/6eb191d3bc76467e49ce7f7ee8e6e3f4.jpg", alt: "AI Avatar Model 1" },
    { src: "https://i.pinimg.com/736x/d2/8d/52/d28d52b4e4662c4e70f92289e9f89771.jpg", alt: "AI Avatar Model 2" },
    { src: "https://i.pinimg.com/1200x/b3/b2/31/b3b2312bdc1b4f74d84cb98cb630499f.jpg", alt: "AI Avatar Model 3" },
    { src: "https://i.pinimg.com/736x/8c/96/7d/8c967d8fe1f676d0cac020b808a54f8a.jpg", alt: "AI Avatar Model 4" },
    { src: "https://i.pinimg.com/736x/d0/82/ca/d082ca50ae4051454b635a3f1b98ac6a.jpg", alt: "AI Avatar Model 5" },
    { src: "https://i.pinimg.com/736x/08/86/a3/0886a3fbe3b8feecb2e18f1558b18838.jpg", alt: "AI Avatar Model 6" },
  ];

  return (
   <Section crosses>
     <div className="flex w-full flex-col items-center justify-center overflow-hidden text-white">
      <div className="mb-10 text-center px-5">
        <AnimatedTitle
          title="Explore AI <b>Avatar Models</b> <br /> to Create Stunning Videos"
          containerClass="text-4xl md:text-6xl font-bold !leading-snug"
        />
        <p className="mt-3 max-w-5xl text-sm flex justify-center text-gray-300">
          Choose from a variety of pre-trained AI avatar models and bring your videos to life in seconds.
        </p>
      </div>

      <Carousel_003 className="" images={images} showPagination loop autoplay />
    </div>
   </Section>
  );
};

export { Skiper49 };

const Carousel_003 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 0,
}: {
  images: { src: string; alt: string }[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
    .Carousal_003 {
      width: 100%;
      height: 350px;
      padding-bottom: 50px !important;
    }

    .Carousal_003 .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 300px;
    }

    .swiper-pagination-bullet {
      background-color: #000 !important;
    }
  `;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className={cn("relative w-full max-w-5xl px-5", className)}
    >
      <style>{css}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <Swiper
          spaceBetween={spaceBetween || 20}
          slidesPerView={3}
          loop={loop}
          centeredSlides={false}
          speed={5000}
          grabCursor={true}
          autoplay={
            autoplay
              ? { delay: 0, disableOnInteraction: false }
              : false
          }
          freeMode={{
            enabled: true,
            momentum: true,
            momentumVelocityRatio: 0.5,
          }}
          effect="coverflow"
          coverflowEffect={{ rotate: 40, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
          pagination={showPagination ? { clickable: true } : false}
          navigation={showNavigation ? { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" } : false}
          modules={[Autoplay, EffectCoverflow, FreeMode, Pagination, Navigation]}
          className="Carousal_003"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="!w-[250px]">
              <img
                className="h-64 w-full object-cover rounded-xl shadow-lg"
                src={image.src}
                alt={image.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export { Carousel_003 };
