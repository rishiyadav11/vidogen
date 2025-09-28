"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Play, Sparkles, Zap, Camera, Film } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Button from "./Button1";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const totalImages = 3;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // The video source function remains the same.
  const getHeroImageSrc = (index: number) => `/images/hero${index}.webm`;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const startImageCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex % totalImages) + 1);
    }, 6000);
  };

  console.log(`Current Image Index: ${currentImageIndex}`);

  useEffect(() => {
    startImageCarousel();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handlePlayClick = () => {
    const nextIndex =
      currentImageIndex === totalImages ? 1 : currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
    startImageCarousel();
  };

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 1.1 });
    tl.from(".hero-badge", {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.4)",
    })
      .from(
        ".hero-title-line",
        { y: 60, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out" },
        "-=0.4",
      )
      .from(
        ".hero-subtitle",
        { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6",
      )
      .from(
        ".hero-stats-item",
        { y: 20, opacity: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" },
        "-=0.4",
      )
      .from(
        ".hero-cta",
        { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3",
      );
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative flex w-[105%] min-h-screen sm:w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 pt-16 text-white"
    >
      {/* Loading Screen */}
{isLoading && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900">
    <div className="text-center">
      {/* Spinner with glow */}
      <div className="relative mb-6">
        <div className="h-20 w-20 rounded-full border-4 border-purple-700/40 animate-spin-slow shadow-[0_0_20px_rgba(139,92,246,0.6)]">
          <div className="absolute inset-0 rounded-full border-4 border-t-purple-400 animate-spin-fast" />
        </div>
        {/* Icon in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Film className="h-8 w-8 text-purple-400 animate-pulse" />
        </div>
      </div>

      {/* Animated gradient text */}
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 animate-text">
        VidoGen
      </h1>

      {/* Optional: glowing particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute bg-purple-500 rounded-full opacity-30 blur-sm animate-pulse`}
            style={{
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  </div>
)}

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left Column - Content */}
            <div className="space-y-6 text-center lg:space-y-8 lg:text-left">
              {/* Badge */}
              <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-yellow-400" />
                <span className="text-xs font-medium text-white sm:text-sm">
                  Ignite Your Creativity 🚀
                </span>
              </div>

              {/* Title - refactored text */}
              <div className="space-y-2 lg:space-y-3">
                <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                  <span className="hero-title-line block text-white">
                    Turn ideas
                  </span>
                  <span className="hero-title-line block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    into Videos
                  </span>
                  <span className="hero-title-line block text-white">
                    Instantly.
                  </span>
                </h1>
              </div>
              {/* Subtitle - refactored text */}
              <p className="hero-subtitle mx-auto max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl lg:mx-0">
                Effortlessly transform your prompts and images into stunning
                AI-generated videos. We handle the creation and auto-post
                directly to your YouTube and Instagram.
              </p>

              {/* Simple First-launch Stats - refactored text */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:justify-start">
                <div className="hero-stats-item text-center">
                  <div className="text-2xl font-bold text-white sm:text-3xl">
                    <Zap className="inline-block h-6 w-6 text-purple-400" />
                  </div>
                  <div className="text-xs text-gray-400 sm:text-sm">
                    Lightning Fast
                  </div>
                </div>
                <div className="hero-stats-item text-center">
                  <div className="text-2xl font-bold text-white sm:text-3xl">
                    <Camera className="inline-block h-6 w-6 text-pink-400" />
                  </div>
                  <div className="text-xs text-gray-400 sm:text-sm">
                    Pixel Perfect
                  </div>
                </div>
                <div className="hero-stats-item text-center">
                  <div className="text-2xl font-bold text-white sm:text-3xl">
                    <Film className="inline-block h-6 w-6 text-cyan-400" />
                  </div>
                  <div className="text-xs text-gray-400 sm:text-sm">
                    Seamless Posts
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="hero-cta flex flex-col justify-center gap-3 pt-4 sm:flex-row sm:gap-4 lg:justify-start">
                <Button
                  id="start-creating"
                  title="Start Creating"
                  leftIcon={<Zap className="h-4 w-4" />}
                  containerClass="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/40"
                  onClick={handlePlayClick}
                />
                <Button
                  id="watch-demo"
                  title="Watch Demo"
                  leftIcon={<Play className="h-4 w-4" />}
                  containerClass="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Right Column - Video Preview */}
            <div className="group relative mx-auto aspect-video h-[400px] w-full overflow-hidden rounded-3xl shadow-2xl sm:aspect-square sm:h-[500px] md:aspect-video lg:mx-0 lg:aspect-auto lg:h-[600px]">
              {/* Added key attributes to fix the video not playing */}
              <video
                key={currentImageIndex} // Important: Forces re-render on index change
                src={getHeroImageSrc(currentImageIndex)}
                className="absolute inset-0 h-full w-full object-cover duration-700 ease-in-out"
                autoPlay
                loop
                muted
                playsInline
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/30" />
              {/* Caption */}
              <div className="absolute bottom-4 left-4 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md sm:bottom-6 sm:left-[40%] sm:text-base">
                Auto-post ready 🎥
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
