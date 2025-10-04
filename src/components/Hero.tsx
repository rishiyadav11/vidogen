"use client";
import { useRef, useState } from "react";
import Section from "./Section";
import { BottomLine } from "./design/Hero";
import CompanyLogos from "./CompanyLogos";
import { BackgroundBeams } from "./design/background-beams";
import { useRouter } from "next/navigation";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const parallaxRef = useRef(null);
  const [prompt, setPrompt] = useState("");
  const router = useRouter();

  const handleGenerate = () => {
    router.push("/pricing");
  };

  return (
    <Section
      className="pt-[10rem] bg-gradient-to-br from-black via-[#0f0f1f] to-black -mt-[5.25rem] overflow-hidden relative"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <BackgroundBeams />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)]" />

      <div className="container relative z-10 flex flex-col items-center justify-center text-center min-h-[90vh]" ref={parallaxRef}>
        
        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 text-white tracking-tight drop-shadow-lg">
          <span className="bg-gradient-to-r from-[#3B82F6] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent animate-gradient">
            Turn Ideas Into Videos{" "}
          </span>
          <br />
          Instantly with AI ✨
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-300 max-w-2xl mb-10 leading-relaxed">
          VidoGen lets you create <span className="text-white font-semibold">AI-powered videos</span> 
          from just a <span className="text-pink-400">prompt or image</span>. Add captions, 
          voiceovers, and share instantly on YouTube & Instagram — all in one click.
        </p>

        {/* Prompt Input + Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 relative">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder=""
            className="w-full sm:w-96 px-4 py-3 rounded-xl bg-gray-900/70 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-lg"
          />
          {!prompt && (
            <span className="absolute left-4 text-gray-500 pointer-events-none">
              <Typewriter
                words={[
                  "Make a travel vlog in Tokyo 🌏",
                  "Create a product ad for my startup 🚀",
                  "Generate a motivational reel 💡",
                  "Turn my script into a video 🎬",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </span>
          )}
          <button
            onClick={handleGenerate}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-pink-500/30 transition-all"
          >
            Generate →
          </button>
        </div>

        {/* Trusted by Logos */}
        <CompanyLogos className="relative w-screen mt-16 pb-5 opacity-90" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
