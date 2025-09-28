"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import type { ReactNode } from "react";
import { TiLocationArrow } from "react-icons/ti";

interface BentoTiltProps {
  children: ReactNode;
  className?: string;
}

export const BentoTilt: React.FC<BentoTiltProps> = ({
  children,
  className = "",
}) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

interface BentoCardProps {
  src: string;
  title: ReactNode;
  description?: string;
  isComingSoon?: boolean;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  src,
  title,
  description,
  isComingSoon,
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();
    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <Image
        src={src}
        alt={title as string}
        fill
        className="absolute left-0 top-0 h-full w-full rounded-md object-cover"
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-white">
        {/* Added a new container for the title and description with a backdrop-blur effect */}
        <div className="rounded-xl p-4">
          <h1 className="bento-title  bg-black/10  backdrop-blur-md w-fit special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64  bg-black/10  backdrop-blur-md w-fit text-xs md:text-base">{description}</p>
          )}
        </div>
        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black/50 px-5 py-2 text-xs uppercase text-white/80"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #ffffff30, #00000060)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">Start Creating Now</p>
          </div>
        )}
      </div>
    </div>
  );
};


const Features: React.FC = () => (
  <section className="overflow-x-hidden bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32 text-center">
        <p className="font-circular-web text-2xl text-white">
          Discover <b>VidoGen</b>
        </p>
        <p className="mx-auto max-w-md font-circular-web text-lg text-white/70">
          AI-powered video generation with one prompt. Instantly post to YouTube
          & Instagram — your content, fully automated.
        </p>
      </div>

      {/* Main Feature */}
      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="/features/feature1.png"
          title={
            <>
              <b>V</b>idoGen Studio
            </>
          }
          description="Turn your ideas into videos with just a prompt or an image. Post everywhere, instantly."
          isComingSoon
        />
      </BentoTilt>

      {/* Additional Features Grid */}
      <div className="grid h-[140vh] w-full justify-center  grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="/features/feature6.jpg"
            title={
              <>
                <b>P</b>rompt to Video
              </>
            }
            description="Write a few words, and watch VidoGen turn them into engaging videos."
          />
        </BentoTilt>

       

        <BentoTilt className="bento-tilt_1 md:col-span-1">
          <BentoCard
            src="/features/feature3.jpg"
            title={
              <>
                <b>A</b>uto Posting
              </>
            }
            description="No more downloads & uploads — auto-share videos to multiple accounts."
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <BentoCard 
            src="/features/feature4.jpg"
            title={
              <>
                <b>M</b>ulti-Platform
              </>
            }
            description="Post to 10+ YouTube channels and Instagram accounts with one click."
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <BentoCard
            src="/features/feature5.jpg"
            title={
              <>
                <b>A</b>I Voiceovers
              </>
            }
            description="Add lifelike AI voiceovers in multiple languages to your videos."
          />
        </BentoTilt>

         <BentoTilt className="bento-tilt_1 md:col-span-1">
          <BentoCard
            src="/features/feature2.png"
            title={
              <>
                <b>I</b>mage Context
              </>
            }
            description="Upload an image, and VidoGen builds stunning visuals around it."
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2   md:h-[50vh] flex justify-center">
          <BentoCard
            src="/features/features7.jpg"
            title={
              <>
                <b>S</b>ocial-Ready
              </>
            }
            description="Optimized formats for YouTube Shorts, Instagram Reels & more."
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
